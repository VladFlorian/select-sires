//-------------- Core ----------------------------------------------------------//
import { NgModule } from "@angular/core";
import { SharedModule } from './../../../../../shared/shared.module';
//-------------- Components/Pages ----------------------------------------------//
import { SelectAccessMenuComponent } from './select-access-menu.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [SelectAccessMenuComponent]
})
export class SelectAccessMenuComponentModule {}
