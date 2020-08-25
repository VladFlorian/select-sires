//-------------- Core --------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
//-------------- Data Store --------------------------------------------------------------------//
import { LogDataStoreModule } from './store/log-data-store.module';


@NgModule({
  imports: [
    //-- CORE -- 
    SharedModule,
    LogDataStoreModule,
    //-- PAGES MODULES -- 
    //...  
  ],
})
export class LogModule {}
