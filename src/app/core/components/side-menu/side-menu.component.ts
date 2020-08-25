//-------------- Core -------------------------------------------------------------------------------------//
import { Component, Input } from "@angular/core";
import { NavController, PopoverController, MenuController } from '@ionic/angular';
//-------------- Data Models ------------------------------------------------------------------------------//
import { UserDb } from '../../../user/models/user.model';
import { SelectAccessMenuComponent } from './components/select-access-menu/select-access-menu.component';

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent {
  //-- Inputs/Core ------------------------>
  @Input() user: UserDb;
  @Input() isMobileView: boolean;
  @Input() selectedPath: string;

  constructor(
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private menuCtrl: MenuController,
  ) { }

  goToUserDashboardPage() {
    if (this.isMobileView) { this.menuCtrl.close('sideMenu') }
    this.navCtrl.navigateRoot('/user/dashboard', { animationDirection: 'back' });
  }

  goToProductsPage() {
    if (this.isMobileView) { this.menuCtrl.close('sideMenu') }
    this.navCtrl.navigateRoot('/products', { animationDirection: 'back' });
  }

 
 async showSelectAccessProfileMenu(ev) {
     const cssClass = (this.isMobileView) ? 'selectAccessMenuStyleMobile' : 'selectAccessMenuStyle'; 
     const selectAccessProfileMenu = await this.popoverCtrl.create({
       component: SelectAccessMenuComponent,
       componentProps: {
         isMobileView: this.isMobileView
       },
       cssClass: cssClass,
       animated: true,
       event: ev,
       translucent: true
     });
     selectAccessProfileMenu.present();
  }
}
