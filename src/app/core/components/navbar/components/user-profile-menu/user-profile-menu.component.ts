//-------------- Core --------------------------------------------------------//
import { Component } from "@angular/core";
import { NavController, NavParams, PopoverController } from '@ionic/angular';
//-------------- Data Store --------------------------------------------------//
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../app.reducer';
import * as fromAuth from '../../../../../auth/store/auth.actions';
//-------------- Data Models -------------------------------------------------//
import { UserDb } from './../../../../../user/models/user.model';

@Component({
  selector: 'app-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
})
export class UserProfileMenuComponent {
  user: UserDb;

  constructor(
    private store: Store<AppState>,
    private navCtrl: NavController,
    private navParams: NavParams,
    private popOverCtrl: PopoverController
  ) {
    this.user = this.navParams.data.user
   }

  selectUserProfile() {
    this.popOverCtrl.dismiss();
    this.navCtrl.navigateRoot('/user/dashboard', { animationDirection: 'forward' });
  }

  logout() {
    this.popOverCtrl.dismiss();
    this.store.dispatch(new fromAuth.Logout())
  }

} 