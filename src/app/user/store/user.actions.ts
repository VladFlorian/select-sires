//-------------- Core -----------------------------------------------//
import { Action } from '@ngrx/store';
//------------- Data Models -----------------------------------------//
import { UserDb } from './../models/user.model';

export enum UserActionTypes {
  GET_USER                         = '[Users] Get User Detail',
  GET_USER_SUCCESS                 = '[Users] Get User Detail Success',

  SET_USER                         = '[Users] Set User',

  ACTION_SUCCESS                   = '[Users] Action was Successfull',
}

//----------- Get User ---------------------------------//
export class GetUser implements Action {
  readonly type = UserActionTypes.GET_USER;
  constructor(public  payload: {userId: string } ) {}
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: { userObj: UserDb } ) {}
}


//----------- Set User ---------------------------------//
export class SetUser implements Action {
  readonly type = UserActionTypes.SET_USER;
  constructor(public payload: { userObj: UserDb }) { }
}

//------------------------- ACTION SUCCESS  -----------------------------------//
export class ActionSuccess implements Action {
  readonly type = UserActionTypes.ACTION_SUCCESS;
}


export type UserActions =
  | GetUser
  | GetUserSuccess

  | SetUser

  | ActionSuccess;
