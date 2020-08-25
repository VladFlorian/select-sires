//-------------- Core -----------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//-------------- Pages ----------------------------------------------------------------------------//
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'auth/login',
    component: LoginPage,
  },
  {
    path: 'auth/sign-up',
    component: SignUpPage
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }