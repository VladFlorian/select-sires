//-------------- Core ------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//-------------- Data Store ------------------------------------------------------------------//
import { CoreDataStoreModule } from './store/core-data-store.module';
//-------------- Components/Page Modules -----------------------------------------------------//
import { NavbarComponentModule } from './components/navbar/navbar.component.module';
import { SideMenuComponentModule } from './components/side-menu/side-menu.component.module';

@NgModule({
  declarations: [],
  imports: [
    //--- CORE ---
    CommonModule,
    CoreDataStoreModule,
    //-- COMPONENTS --
    NavbarComponentModule,
    SideMenuComponentModule
  ],
  exports: [NavbarComponentModule, SideMenuComponentModule]
})
export class CoreModule { }
