//------------- Core ----------------------------------------------------------------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
//-------------- Data Store  --------------------------------------------------------------------------------------------------------------------------//
import { ProductDataStoreModule } from './store/product-data-store.module';
//------------- Componets/PagesModules ----------------------------------------------------------------------------------------------------------------//
import { AddProductPageModule } from './pages/add-product/add-product.page.module';
import { ProductListPageModule } from './pages/product-list/product-list.page.module';

@NgModule({
  imports: [
    //-- CORE -- 
    SharedModule,
    ProductDataStoreModule,
    ProductRoutingModule,
    //-- PAGES MODULES -- 
    AddProductPageModule,
    ProductListPageModule
  ],
})
export class ProductModule {}
