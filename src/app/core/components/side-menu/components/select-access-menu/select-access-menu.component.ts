//------------- Core -------------------------------------------------------------------------//
import { Component, Input } from "@angular/core";
import { NavController, NavParams, PopoverController, MenuController } from '@ionic/angular';
//------------- Data Store -------------------------------------------------------------------//
import { Store } from '@ngrx/store';
import { AppState } from './../../../../../app.reducer';

@Component({
  selector: 'app-select-access-menu',
  templateUrl: './select-access-menu.component.html',
  styleUrls: ['./select-access-menu.component.scss'],
})
export class SelectAccessMenuComponent {
  isMobileView: boolean;

  constructor(
    private store: Store<AppState>,
    private navCtrl: NavController,
    private navParams: NavParams,
    private popOverCtrl: PopoverController,
    private menuCtrl: MenuController,
  ) {
    this.isMobileView = this.navParams.data.isMobileView;
   }

  closeMenu(){
    this.popOverCtrl.dismiss();
  }

  selectUserProfile() {
    this.popOverCtrl.dismiss();
    if (this.isMobileView) { this.menuCtrl.close('sideMenu') }
    this.navCtrl.navigateRoot('/user/dashboard', { animationDirection: 'forward' });
  }

} 