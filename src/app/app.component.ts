//-------------- Core ---------------------------------------------------------------//
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { Router, RouterEvent } from '@angular/router';
//-------------- Data Store ---------------------------------------------------------//
import { AppState } from './app.reducer';
import { Store } from '@ngrx/store';
import * as fromAuth from './auth/store/auth.actions';
import * as fromCore from './core/store/core.actions';
import { selectIsAuthenticated } from './auth/store/auth.selectors';
import { selectUserObj } from './user/store/user.selectors';
import { selectIsMobileView } from './core/store/core.selectors';
//-------------- Services/Helpers ---------------------------------------------------// 
import { AudioHelper } from './shared/helpers/audio.helper';
import { AuthSubService } from './auth/services/auth-sub.service';
//------------- Data Models ---------------------------------------------------------//
import { UserDb } from './user/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  isAuthenticated$: boolean;
  userObj$: UserDb;
  isMobileView$: boolean;
  selectedPath = '';

  constructor(
    private platform: Platform,
    private audioHelper: AudioHelper,
    private store: Store<AppState>,
    private authSubService: AuthSubService,
    private router: Router,
  ) {
    this.router.events.pipe(distinctUntilChanged()).subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    // this.navCtrl.navigateRoot('/client/products-dashboard/add-product')
    this.audioHelper.preload('save', 'assets/audio/save2.mp3');
    this.audioHelper.preload('select', 'assets/audio/select.wav');
    this.audioHelper.preload('deselect', 'assets/audio/deselect.wav');
    this.platform.ready().then(() => {
      if (this.platform.width() < 780 && this.isMobileView$ === false) {
        this.store.dispatch(new fromCore.SetIsMobileView({ isMobileView: true }))
      } else if (this.platform.width() > 780 && this.isMobileView$ === true) {
        this.store.dispatch(new fromCore.SetIsMobileView({ isMobileView: false }))
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new fromAuth.ListenToAuthChanges());

    this.store.select(selectIsMobileView).pipe(takeUntil(this.destroy$)).subscribe(isMobileView => {
      this.isMobileView$ = isMobileView;
    })

    this.store.select(selectIsAuthenticated).pipe(takeUntil(this.destroy$)).subscribe(isAutenticated => {
      this.isAuthenticated$ = isAutenticated;
    })

    this.store.select(selectUserObj).pipe(takeUntil(this.destroy$)).subscribe(userObj => {
      this.userObj$ = {...userObj};
    })
  }

  ngOnDestroy() {
    this.authSubService.authUnsubscribeComponent$.next();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const screenWidth = event.target.innerWidth;
    if (screenWidth < 780 && this.isMobileView$ === false) {
      this.store.dispatch(new fromCore.SetIsMobileView({ isMobileView: true }))
    } else if (screenWidth > 780 && this.isMobileView$ === true) {
      this.store.dispatch(new fromCore.SetIsMobileView({ isMobileView: false }))
    }
  }

}
