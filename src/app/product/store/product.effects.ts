//-------------- Core -----------------------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tap, switchMap, catchError, withLatestFrom, take, takeUntil, } from 'rxjs/operators';
import { of } from 'rxjs';
//------------- Data Store -----------------------------------------------------------------------//
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as fromProduct from './product.actions';
import * as fromCore from '../../core/store/core.actions';
import { selectQuickLog } from './../../user/store/user.selectors';
import { selectProductCompareObj } from './product.selectors';
//------------- Services/Helpers -----------------------------------------------------------------//
import { UiHelper } from '../../shared/helpers/ui.helper';
import { ProductService } from '../services/product.service';
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
import { ProductDataObjHelper } from '../helpers/product-data-obj.helper';
import { ProductSubService } from '../services/product-sub.service';
import { AudioHelper } from '../../shared/helpers/audio.helper';
//------------- Data Models ----------------------------------------------------------------------//
import { ProductDb } from '../models/product.model';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private uiHelper: UiHelper,
    private navCtrl: NavController,
    private store: Store<AppState>,
    private firebaseHelper: FirebaseHelper,
    private productDataObjHelper: ProductDataObjHelper,
    private productSubService: ProductSubService,
    private audioHelper: AudioHelper
  ) { }

  //------------------Get Client Product -----------------------------------------------------------//
  getClientProducts$ = createEffect(() => this.actions$.pipe(
    ofType<fromProduct.GetClientProducts>(fromProduct.ProductActionTypes.GET_CLIENT_PRODUCTS),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
    }),
    switchMap((action) => {
      //--------------------------------------------------------------------------------------------------------------------------------------------------//
      return this.productService.getClientProducts().pipe(
        takeUntil(this.productSubService.productListUnsubscribe$),
        take(1),
        switchMap((products: any) => {
          this.uiHelper.hideLoader();
          const enrichedProducts: ProductDb[] = this.productDataObjHelper.enrichProductsResponse(products);
          return of(new fromProduct.GetClientProductsSuccess({ clientProducts: [...enrichedProducts] }));
        }),
        catchError(error => {
          console.group('error in getClientProducts$', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
        })
      );
    }),
  ));


  //------------------Add Product -------------------------------------------------------------//
  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType<fromProduct.AddProduct>(fromProduct.ProductActionTypes.ADD_PRODUCT),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
      this.audioHelper.play('save');
    }),
    withLatestFrom(this.store.select(selectQuickLog)),
    switchMap(([action, quickLog]) => {
      const product = action.payload.productObj;

      const dataObj = this.productDataObjHelper.addProduct(product, quickLog);
      // console.log('addProduct$ - dataObj', dataObj);
      //----------------------------------------------------------------------------------------------------------------------------------------------//
      return this.productService.addProduct(dataObj.productInsert).pipe(
        switchMap(() => {
          this.uiHelper.hideLoader();
          this.uiHelper.displayToast('Product was successfully created', 1000, 'bottom');
          this.navCtrl.navigateBack('/products');
          return of(new fromProduct.AddProductSuccess({ productObj: { ...dataObj.stateUpdates.product } }));
        }),
        catchError(error => {
          console.group('error in addProduct$', error);
          this.uiHelper.displayErrorAlert(error.message);
          this.uiHelper.hideLoader();
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
        })
      )
    }),
  ));


  //------------------Update Product ----------------------------------------------------------------------------------------------------------------------------------------------//
  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType<fromProduct.UpdateProduct>(fromProduct.ProductActionTypes.UPDATE_PRODUCT),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
      this.audioHelper.play('save');
    }),
    withLatestFrom(this.store.select(selectProductCompareObj), this.store.select(selectQuickLog)),
    switchMap(([action, productCompareObj, quickLog]) => {
      const product = action.payload.productObj;
      const compareObj = productCompareObj.compareObj;
      const originalObj = productCompareObj.originalObj;

      const dataObj = this.productDataObjHelper.updateProduct(product, compareObj, originalObj, quickLog);
      // console.log('dataObj', dataObj);
      //---------------------------------------------------------------------------------------------------------------------------------------------->
        return this.productService.updateProduct(dataObj.productUpdate).pipe(
          switchMap(() => {
            this.uiHelper.hideLoader();
            this.uiHelper.displayToast('Product was successfully updated', 1000, 'bottom');
            this.navCtrl.navigateBack('/client/products-dashboard');
            return of(new fromProduct.UpdateProductSuccess({ productObj: { ...dataObj.stateUpdates.product } }));
          }),
          catchError(error => {
            console.group('error in updateProduct$', error);
            this.uiHelper.displayErrorAlert(error.message);
            this.uiHelper.hideLoader();
            return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
          })
        )
      
    }),
  ));


}
