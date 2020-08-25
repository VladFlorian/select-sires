//---------------CORE-------------------------------------------------------------------------------------------------//
import { NgModule } from "@angular/core";
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
//-------------- COMPONENT/MODULES -----------------------------------------------------------------------------------//
import { SideMenuComponent } from './side-menu.component';
import { SelectAccessMenuComponentModule } from './components/select-access-menu/select-access-menu.component.module';


@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SelectAccessMenuComponentModule,
  ],
  exports: [SideMenuComponent]
})
export class SideMenuComponentModule { }
