//-------------- Core --------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
//---------------PAGES--------------------------------------------------------------//
import { AddProductPage } from './pages/add-product/add-product.page';
import { ProductListPage } from './pages/product-list/product-list.page';


const routes: Routes = [
  {
    path: '',
    component: ProductListPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductListPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/add',
    component: AddProductPage,
    canActivate: [AuthGuard]
  },

  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }