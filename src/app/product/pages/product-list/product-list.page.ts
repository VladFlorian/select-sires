//------------- Core -----------------------------------------------------------------------//
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NavController } from '@ionic/angular';
import { takeUntil } from 'rxjs/operators';
//------------- Angular MAterial Table -----------------------------------------------------//
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//------------- Data Store------------------------------------------------------------------//
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as fromProducts from '../../store/product.actions';
import { selectEnrichedClientProducts } from './../../store/product.selectors';
//------------- Services/Helpers ----------------------------------------------------------//
import { ProductSubService } from './../../services/product-sub.service';
//---------------Data Models---------------------------------------------------------------//
import { productErrorMsgs } from '../../models/product.model';
import { productTypeOptions } from '../../models/product.model';
import { productTypeOptionsArray } from '../../models/product.model';
import { ProductDb } from './../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})

export class ProductListPage implements OnInit, OnDestroy {
  //-- Core  -------------------------------------------------->
  private destroy$: Subject<boolean> = new Subject<boolean>();
  //-------Angular Material Table Vars --------------------------------->
  displayedColumns: string[] = ['name', 'price', 'description',  'authored', 'status'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //-- Data Models -------------------------------------------->
  errorMsgs = productErrorMsgs;
  productTypeOptions = productTypeOptions;
  productTypeOptionsArray = productTypeOptionsArray;
  //-- Main Variables -------------------------------------------->
  products: ProductDb [];

  constructor(
    private store: Store<AppState>,
    private navCtrl: NavController,
    private productSubService: ProductSubService
  ) { }


  ngOnInit() {
    this.store.dispatch(new fromProducts.GetClientProducts())

    this.store.select(selectEnrichedClientProducts).pipe(takeUntil(this.destroy$)).subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });


  }

  //-- Add Product -------------------------------------->
  addProduct() {
    this.navCtrl.navigateForward('/products/add')

  }

  ngOnDestroy() {
  //  console.log('Destroyed Product List Page');
    this.productSubService.productListUnsubscribeComponent$.next();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
