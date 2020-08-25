//------------- Core -------------------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
//------------- Data Store--------------------------------------------------------------------------------------------------------------------------------//
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as fromProducts from './../../store/product.actions';
//---------------Data Models------------------------------------------------------------------------------------------------------------------------------//
import { productErrorMsgs } from './../../models/product.model';
import { productTypeOptions } from './../../models/product.model';
import { productTypeOptionsArray } from './../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})

export class AddProductPage implements OnInit, OnDestroy {
  //-- Core  -------------------------------------------------->
  formObj: FormGroup;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  //-- Data Models -------------------------------------------->
  errorMsgs = productErrorMsgs;
  productTypeOptions = productTypeOptions;
  productTypeOptionsArray = productTypeOptionsArray;
  //-- Main Vars ----------------------------------------------->

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private navCtrl: NavController,
  ) { }


  ngOnInit() {
    this.initForm();
  }

  //---- Initial Form --------------------------------> 
  initForm() {
    this.formObj = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }


  // Navigatge Back --------------------------------------->
  goBack() {
    this.navCtrl.navigateBack('/products')
  }

  // On Product Icon Btn Selection ----------------------->
  onProductTypeSelection(productType) {
    this.formObj.patchValue({
      productType: productType
    })
  }


  // On Form Submission ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  onSubmit() {
    if (this.formObj.valid) {
      const formValue = this.formObj.value;

      const product = {
        name: formValue.name,
        price: parseInt(formValue.price),
        description: formValue.description,
      };

      this.store.dispatch(new fromProducts.AddProduct({ productObj: { ...product } }));
    }
  }

  // On Page Destruction ---------------------->
  ngOnDestroy() {
  //  console.log('Destroyed Add Product Page');
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
