//---------------CORE------------------------------------------//
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
//---------------COMPONENTS/PAGES------------------------------//
import { UserDashboardPage } from './user-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardPage
  }
];

@NgModule({
  declarations: [UserDashboardPage],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class UserDashboardPageModule {}
