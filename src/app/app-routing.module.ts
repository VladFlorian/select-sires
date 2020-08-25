//-------------- Core ----------------------------------------------------------------------//
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//-------------- Components/Pages ---------------------------------------------------------//
import { LoginPage } from './auth/pages/login/login.page';
import { AddProductPage } from './product/pages/add-product/add-product.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginPage
  },
  {
    path: 'product',
    component: AddProductPage
  },
  // { path: '**', redirectTo: 'auth', pathMatch: 'full' }
  // { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

