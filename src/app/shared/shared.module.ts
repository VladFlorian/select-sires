//------------- Core -------------------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
//---------- Ui Libraries --------------------------------------------//
import { ComponentsModule } from './components/components.module';
import { MDBBootstrapModule } from "angular-bootstrap-md";
//----------- Directives ---------------------------------------------//
import { NgxMaskModule } from "ngx-mask";


@NgModule({
  declarations: [],
  imports: [
    //-- CORE -- 
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    //-- UI LIBRARIES --
    ComponentsModule,
    MDBBootstrapModule.forRoot(),
    //-- DIRECTIVES --
    NgxMaskModule.forRoot(),
  ],
  exports: [
    IonicModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    
  ],
})
export class SharedModule { }
