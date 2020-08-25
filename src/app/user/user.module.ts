//-------------- Core ---------------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
//------------- Data Store ----------------------------------------------------------------------------//
import { UserDataStoreModule } from './store/user-data-store.module';
//------------- Components/Page Modules ---------------------------------------------------------------//
import { UserDashboardPageModule } from './pages/user-dashboard/user-dashboard.page.module';

@NgModule({
  imports: [
    //-- CORE -- 
    SharedModule,
    UserDataStoreModule,
    UserRoutingModule,
    //-- PAGES MODULES -- 
    UserDashboardPageModule,
  ],
})
export class UserModule {}
