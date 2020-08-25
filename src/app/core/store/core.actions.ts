import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  SET_IS_MOBILE_VIEW          = '[Core] Set Is Mobile View',
  
  HANDLE_ERROR                = '[Core] Handle Error',
  HANDLE_ERROR_SUCCESS        = '[Core] Handle Error Success',

  NO_CHANGES_DETECTED         = '[Core] No Changes Detected',
  ACTION_SUCCESS              = '[Core] Action was Successfull',
}



//----Handle Error-----------------------------------------------------------------------------------//
export class HandleError implements Action {
  readonly type = CoreActionTypes.HANDLE_ERROR;
  constructor(public  payload: {error: any, actionType: any, payload: any, insertError: boolean;}) {}
}

export class HandleErrorSuccess implements Action {
  readonly type = CoreActionTypes.HANDLE_ERROR_SUCCESS;
  constructor(public payload: any = null) { }
}

//---- Set Is Mobile View ------------------------------------//
export class SetIsMobileView implements Action {
  readonly type = CoreActionTypes.SET_IS_MOBILE_VIEW;
  constructor(public payload: { isMobileView: boolean }) { }
}

//--- Action Success -------------------------------//
export class ActionSuccess implements Action {
  readonly type = CoreActionTypes.ACTION_SUCCESS;
  constructor(public payload: any = null) { }

}

//--- No Changes Detected ---=-------------------------//
export class NoChangesDetected implements Action {
  readonly type = CoreActionTypes.NO_CHANGES_DETECTED;
  constructor(public payload: any = null) { }
}

export type CoreActions =
  | SetIsMobileView
  
  | HandleError
  | HandleErrorSuccess

  | NoChangesDetected
  | ActionSuccess;
