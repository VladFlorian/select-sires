//-------------- Core ----------------------------------------------------------------------//
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AngularMaterialUIModule } from '../../../core/modules/angular-material-ui.module';
//-------------- Componets/Pages ----------------------------------------------------------//
import { ProductListPage } from './product-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListPage
  }
];


@NgModule({
  declarations: [ProductListPage],
  imports: [
    AngularMaterialUIModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductListPageModule {}
