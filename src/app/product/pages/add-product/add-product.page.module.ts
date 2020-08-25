//-------------- Core ----------------------------------------------------------------------//
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AngularMaterialUIModule } from '../../../core/modules/angular-material-ui.module';
//-------------- Componets/Pages ----------------------------------------------------------//
import { AddProductPage } from './add-product.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductPage
  }
];


@NgModule({
  declarations: [AddProductPage],
  imports: [
    AngularMaterialUIModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class AddProductPageModule {}
