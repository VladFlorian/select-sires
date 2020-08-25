//-------------- Core ----------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/auth.guard';
//-------------- Components/Pages ----------------------------------------------------------//
import { UserDashboardPage } from './pages/user-dashboard/user-dashboard.page';


const routes: Routes = [
  {
    path: '',
    component: UserDashboardPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/dashboard',
    component: UserDashboardPage,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'user/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
