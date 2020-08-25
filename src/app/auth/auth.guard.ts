//-------------- Core ----------------------------------------------------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
//-------------- Data Store -----------------------------------------------------------------------------------------------------//
import { Store, select } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { selectIsAuthenticated } from './store/auth.selectors';
//-------------- Services/Helpers -----------------------------------------------------------------------------------------------//
import { UiHelper } from './../shared/helpers/ui.helper';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private uiHelper: UiHelper,
    private navCtrl: NavController
  ) { }


  //------ Can Load Route ------------------------------------------------------------------------->
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .pipe(
        select(selectIsAuthenticated),
        tap(loggedIn => {
          if (!loggedIn) {
            this.uiHelper.hideLoader();
            this.navCtrl.navigateRoot('auth/login', { animationDirection: 'back' });
          }
        }),
        take(1)
      );
  }

  //----- Can Activiate Route ----------------------------------------------------------->
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store
      .pipe(
        select(selectIsAuthenticated),
        tap(loggedIn => {
          if (!loggedIn) {
            this.uiHelper.hideLoader();
            this.navCtrl.navigateRoot('auth/login', { animationDirection: 'back' });
          }
        }),
        take(1)
      );
  }
}
