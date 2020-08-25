//-------------- Core ----------------------------------------------------------//
import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../../shared/shared.module';
//-------------- Components/Pages ----------------------------------------------//
import { UserProfileMenuComponent } from './user-profile-menu.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [UserProfileMenuComponent]
})
export class UserProfileMenuComponentModule {}
