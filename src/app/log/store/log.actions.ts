//-------------- Core ---------------------------------------------//
import { Action } from '@ngrx/store';
//-------------- Data Models --------------------------------------//
import { LogDb } from '../models/log.model'

export enum LogActionTypes {
  GET_USER_LOGS                    = '[log] Get User Logs',
  GET_USER_LOGS_SUCCESS            = '[log] Get User Logs Success',

  ACTION_SUCCESS                   = '[log] Action was Successfull',
}

//------------------ Get User Logs --------------------//
export class GetUserLogs implements Action {
  readonly type = LogActionTypes.GET_USER_LOGS;
  constructor(public payload: any = null) { }
}

export class GetUserLogsSuccess implements Action {
  readonly type = LogActionTypes.GET_USER_LOGS_SUCCESS;
  constructor(public payload: { logs: LogDb[] }) { }
}

//------------------- Action Succss ---------------//
export class ActionSuccess implements Action {
  readonly type = LogActionTypes.ACTION_SUCCESS;
}

export type LogActions =
| GetUserLogs
| GetUserLogsSuccess

| ActionSuccess;
