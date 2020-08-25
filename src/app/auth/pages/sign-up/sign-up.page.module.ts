//-------------- Core -----------------------------------------//
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
//------------- Components/Pages ------------------------------//
import { SignUpPage } from "./sign-up.page";

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  }
];

@NgModule({
  declarations: [
    SignUpPage
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class SignUpPageModule {}
