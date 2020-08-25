//-------------- Core -----------------------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
//-------------- Data Store ----------------------------------------------------------------------------------//
import { AuthDataStoreModule } from './store/auth-data-store.module';
//-------------- Components/Pages Modules --------------------------------------------------------------------//
import { LoginPageModule } from './pages/login/login.page.module';
import { ForgotPasswordPageModule } from './pages/forgot-password/forgot-password.page.module';
import { SignUpPageModule } from './pages/sign-up/sign-up.page.module';


@NgModule({
  imports: [
    //-- CORE -- 
    SharedModule,
    AuthDataStoreModule,
    AuthRoutingModule,
    //-- PAGES MODULES -- 
    LoginPageModule,
    ForgotPasswordPageModule,
    SignUpPageModule,
  ],
})
export class AuthModule {}
