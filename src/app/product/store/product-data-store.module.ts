//------------- Core ---------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//------------- Data Store ---------------------------------//
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product.effects';
import * as fromProduct from './product.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('product', fromProduct.productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
})
export class ProductDataStoreModule {}
