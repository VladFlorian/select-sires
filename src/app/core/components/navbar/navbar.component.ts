//-------------- Core --------------------------------------------------------------------------------//
import { Component, OnInit, Input } from "@angular/core";
import { MenuController, PopoverController } from '@ionic/angular';
//-------------- Data Store --------------------------------------------------------------------------//
import { AppState } from './../../../app.reducer';
import * as fromAuth from './../../../auth/store/auth.actions';
import { Store } from '@ngrx/store';
//-------------- Components --------------------------------------------------------------------------//
import { UserProfileMenuComponent } from './components/user-profile-menu/user-profile-menu.component';
//-------------- Data Models --------------------------------------------------------------------------//
import { UserDb } from './../../../user/models/user.model';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavBarComponent implements OnInit {
  //-- Inputs ---------------------------->
  @Input() user: UserDb;
  @Input() isMobileView: boolean;
  @Input() selectedPath: string;


  constructor(
    private store: Store<AppState>,
    public menuCtrl: MenuController,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    if (this.isMobileView) { this.menuCtrl.close('sideMenu') }
  }

  onLogoutClick() {
    this.store.dispatch(new fromAuth.Logout());
  }

  showSideMenu() {
    if (this.isMobileView) { this.menuCtrl.toggle() }
  }

  logout() {
    if (this.isMobileView) { this.menuCtrl.close('sideMenu') }
    this.store.dispatch(new fromAuth.Logout());
  }

  async showUserMenu(ev) {
    const cssClass = (this.isMobileView) ? 'userProfileMenuStyleMobile' : 'userProfileMenuStyle'; 

    const userProfileMenu = await this.popoverCtrl.create({
      component: UserProfileMenuComponent,
      componentProps: {
        user: this.user,
      },
      cssClass: cssClass,
      animated: true,
      event: ev,
      translucent: true
    });
    userProfileMenu.present();
  }

}
