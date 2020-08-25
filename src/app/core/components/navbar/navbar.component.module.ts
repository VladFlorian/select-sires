//-------------- Core ---------------------------------------------------------------------------------------------//
import { NgModule } from "@angular/core";
import { SharedModule } from './../../../shared/shared.module';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
//-------------- Components/Modules --------------------------------------------------------------------------------//
import { NavBarComponent } from './navbar.component';
import { UserProfileMenuComponentModule } from './components/user-profile-menu/user-profile-menu.component.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    //-- CORE --
    CommonModule,
    SharedModule,
    RouterModule,
    //-- COMPONENTS MODULES -- 
    UserProfileMenuComponentModule
  ],
  exports: [NavBarComponent]
})
export class NavbarComponentModule { }
