//-------------- Core ---------------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { map, tap, switchMap, catchError, take } from 'rxjs/operators';
import { of, forkJoin, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { withLatestFrom } from 'rxjs/operators';
//-------------- Data Store ---------------------------------------------------------------//
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import * as fromAuth from './auth.actions';
import * as fromUser from './../../user/store/user.actions';
import * as fromCore from './../../core/store/core.actions';
import { selectQuickLog } from './../../user/store/user.selectors';
//-------------- Services/Helpers ----------------------------------------------------------//
import { AuthService } from './../services/auth.service';
import { UserService } from './../../user/services/user.service';
import { AudioHelper } from './../../shared/helpers/audio.helper';
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
import { AuthDataObjHelper } from '../helpers/auth-data-obj.helper';
import { UiHelper } from './../../shared/helpers/ui.helper';
import { AuthSubService } from './../services/auth-sub.service';
import { TestService } from './../../shared/helpers/test.service';
//--------------- Data Models --------------------------------------------------------------//
import { AuthDb } from '../models/auth.model';
import { UserDb } from './../../user/models/user.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    public audioHelper: AudioHelper,
    public firebaseHelper: FirebaseHelper,
    public userService: UserService,
    public authDataObjHelper: AuthDataObjHelper,
    public uiHelper: UiHelper,
    public navCtrl: NavController,
    private store: Store<AppState>,
    public subService: AuthSubService,
    public testService: TestService
  ) { }

  //------------------LOGIN -------------------------------//
  @Effect()
  public login$ = this.actions$.pipe(
    ofType<fromAuth.Login>(fromAuth.AuthActionTypes.LOGIN),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
      this.audioHelper.play('save');
    }),
    switchMap((action) => {
      const credentials = action.payload;
      //------------------------------------------------------------------------------------------------------>
      return this.authService.login(credentials.email, credentials.password).pipe(
        take(1),
        map((authRes: any) => {
          return authRes.user.toJSON();
        }),
        switchMap((authUser: AuthDb) => {
          if (!authUser.emailVerified) {
            this.uiHelper.hideLoader();
            this.uiHelper.displayMessageAlert('Email Unverified', 'Check your email and verify your account.');
            return of(new fromAuth.ActionSuccess());
          } else {
            //#3 Get User Details + Other Data We May Need ------------------------------------------------>
            return forkJoin([
              this.userService.getUser(authUser.uid).pipe(take(1), catchError(error => throwError(error))),
            ]).pipe(
              switchMap(([user]) => {
                const enrichedUser: UserDb = this.firebaseHelper.enrichDocument(user);
                this.uiHelper.hideLoader();
                this.uiHelper.displayToast("signed in successfully", 2000, 'bottom')
                this.navCtrl.navigateRoot('/user/dashboard', { animationDirection: 'forward' });

                return [
                  new fromUser.GetUserSuccess({ userObj: { ...enrichedUser } }),
                  new fromAuth.LoginSuccess({ authUser: { ...authUser } }),
                ];
              }),
              catchError(error => throwError(error))
            )
          }
        }),
        catchError(error => {
          console.log('error in login$', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
        })
      );
    })
  );

  //----------------------SIGN UP---------------------------------//
  @Effect()
  public signUp$ = this.actions$.pipe(
    ofType<fromAuth.SignUp>(fromAuth.AuthActionTypes.SIGN_UP),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
      this.audioHelper.play('save');
    }),
    withLatestFrom(this.store.select(selectQuickLog)),
    switchMap(([action, quickLog]) => {
      const signUpFormObj = action.payload.signUpFormObj;
      //#1 Sign up-----------------------------------------------------------------------//
      return this.authService.signup(signUpFormObj.email, signUpFormObj.password).pipe(
        map((firebaseRes: any) => {
          return (typeof (firebaseRes.user) !== 'undefined')
            ? firebaseRes.user.toJSON()
            : firebaseRes;
        }),
        switchMap((authUser: AuthDb) => {
          const dataObj = this.authDataObjHelper.userSignUp(signUpFormObj, authUser.uid, quickLog);
          // console.log("signUp$ - dataObj", dataObj)
          //#2 Insert User In UserDb + Send Email Verification Email ----------------------------------------------------------------------------------//
          return forkJoin([
            this.authService.signUpInsertUserAuth(dataObj.userInsert).pipe(take(1), catchError(error => throwError(error))),
            this.authService.sendEmailVerification().pipe(take(1), catchError(error => throwError(error)))
          ]).pipe(
            take(1),
            switchMap(() => {
              this.uiHelper.hideLoader();
              this.navCtrl.navigateBack(['/auth/login']);
              this.uiHelper.displayMessageAlert('Account created!', 'Check your email for verifcation link');
              return of(new fromAuth.SignUpSuccess());
            }),
            catchError(error => {
              return throwError(error);
            }),
          );
        }),
        catchError(error => {
          this.uiHelper.hideLoader();
          console.log('error in signUp', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
        })
      );
    }),
  );

  //------------LOGOUT---------------------------------------//
  @Effect()
  public logOut$ = this.actions$.pipe(
    ofType<fromAuth.Logout>(fromAuth.AuthActionTypes.LOGOUT),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
      this.audioHelper.play('save');
    }),
    switchMap((action) => {
      //-------------------------------------------------------------------------------------------------------------------------------------------//
      return this.authService.logout().pipe(
        switchMap(() => {
          this.uiHelper.hideLoader();
          this.navCtrl.navigateRoot('/auth/login', { animationDirection: 'back' });
          this.uiHelper.displayToast('Logged out successfully', 1000, 'bottom');
          return of(new fromAuth.LogoutSuccess());
        }),
        catchError(error => {
          console.log('error logOut$', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: false }));
        }),
      );
    })
  );

  //------------FORGOT PASSWORD----------------------------------------------//
  @Effect()
  public forgotPassword$ = this.actions$.pipe(
    ofType<fromAuth.ForgotPassword>(fromAuth.AuthActionTypes.FORGOT_PASSWORD),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
      this.audioHelper.play('save');
    }),
    switchMap((action) => {
      const email = action.payload.email;
      //----------------------------------------------------------------------------------------------------------------------------------------------//
      return this.authService.forgotPassword(email).pipe(
        switchMap(() => {
          this.uiHelper.hideLoader();
          this.uiHelper.displayToast('Password Reset Link Sent!  Check your email', 4000, 'bottom');
          return of(new fromAuth.ActionSuccess());
        }),
        catchError(error => {
          console.log('error in forgotPassword$', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: false }));
        }),
      );
    }),
  );



  //------------------Listen to Auth Changes ---------------------------------------------//
  @Effect()
  public listenToAuthChanges$ = this.actions$.pipe(
    ofType<fromAuth.ListenToAuthChanges>(fromAuth.AuthActionTypes.LISTEN_TO_AUTH_CHANGES),
    switchMap((action) => {
      //-------------------------------------------------------------------------------------------------------------------------------------------------//
      return this.authService.listenToAuthChanges().pipe(
        takeUntil(this.subService.authUnsubscribe$),
        map((firebaseRes: any) => {
          if (firebaseRes !== null) {
            return (typeof (firebaseRes.user) !== 'undefined')
              ? firebaseRes.user.toJSON()
              : firebaseRes;
          } else {
            return firebaseRes;
          }
        }),
        switchMap((authUser: AuthDb) => {
          if (!authUser) {
            this.navCtrl.navigateRoot('/auth/login', { animationDirection: 'back' });
            this.store.dispatch(new fromAuth.SetUnauthenticated());
          }
          return of(new fromAuth.ListenToAuthChangesSuccess({ authUser: { ...authUser } }));
        }),
        catchError(error => {
          console.log('error in listenToAccessChanges$', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
        })
      );
    }),
  );

}
