//-------------- Core ---------------------------------------------------------------------//
import { Action } from '@ngrx/store';
//-------------- Data Models --------------------------------------------------------------//
import { SignUpFormObj } from './../models/auth.model';
import { AuthDb } from '../models/auth.model';

export enum AuthActionTypes {
  LOGIN                                     = '[Auth] Login',
  LOGIN_SUCCESS                             = '[Auth] Login Success',

  SIGN_UP                                   = '[Auth] Sign Up',
  SIGN_UP_SUCCESS                           = '[Auth] Sign Up Success',

  FORGOT_PASSWORD                           = '[Auth] Forgot Password',
  FORGOT_PASSWORD_SUCCESS                   = '[Auth] Forgot Password Success',

  LOGOUT                                    = '[Auth] Logout',
  LOGOUT_SUCCESS                            = '[Auth] Logout Success',

  LISTEN_TO_AUTH_CHANGES                    = '[Auth] Listen to Auth Changes',
  LISTEN_TO_AUTH_CHANGES_SUCCESS            = '[Auth] Listen to Auth Changes Success',

  SET_UNAUTHENTICATED                       = '[Auth] Set Unathenticated',

  ACTION_SUCCESS                            = '[Auth] Action was Successfull',
}


//---------------------Login------------------------------------------//
export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: { email: string, password: string }) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { authUser: AuthDb }) { }
}

//---------------------Sign Up------------------------------------//
export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGN_UP;
  constructor(public payload: { signUpFormObj: SignUpFormObj}) { }
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_UP_SUCCESS;
  constructor(public payload: any = null) { }
}


//---------------------Forgot Password----------------------//
export class ForgotPassword implements Action {
  readonly type = AuthActionTypes.FORGOT_PASSWORD;
  constructor(public payload: { email: string }) { }
}

export class ForgotPasswordSuccess implements Action {
  readonly type = AuthActionTypes.FORGOT_PASSWORD_SUCCESS;
  constructor(public payload: any = null) { }
}

//---------------------Log Out----------------------//
export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor(public payload: any = null) { }
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any = null) { }
}

//------------------Listen For Auth Changes  --------------------//
export class ListenToAuthChanges implements Action {
  readonly type = AuthActionTypes.LISTEN_TO_AUTH_CHANGES;
  constructor(public payload: any = null) { }
}

export class ListenToAuthChangesSuccess implements Action {
  readonly type = AuthActionTypes.LISTEN_TO_AUTH_CHANGES_SUCCESS;
  constructor(public payload: { authUser: AuthDb }) { }
}



//----------------Set Unathenticated-----------------//
export class SetUnauthenticated implements Action {
  readonly type = AuthActionTypes.SET_UNAUTHENTICATED;
  constructor(public payload: any = null) { }
}

//------------Empty Action Success  -------------//
export class ActionSuccess implements Action {
  readonly type = AuthActionTypes.ACTION_SUCCESS;
}


export type AuthActions =
  | Login
  | LoginSuccess

  | SignUp
  | SignUpSuccess

  | ForgotPassword
  | ForgotPasswordSuccess

  | Logout
  | LogoutSuccess

  | ListenToAuthChanges
  | ListenToAuthChangesSuccess

  | SetUnauthenticated

  | ActionSuccess;
