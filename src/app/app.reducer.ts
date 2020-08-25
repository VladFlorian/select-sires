//-------------- Core -------------------------------------------------------------//
import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';

//------------- Main Features State + Reducer -------------------------------------//
import * as fromAuth from './auth/store/auth.reducer';
import { AuthState } from './auth/store/auth.state';

import * as fromCore from './core/store/core.reducer';
import { CoreState } from './core/store/core.state';

import * as fromUser from './user/store/user.reducer';
import { UserState } from './user/store/user.state';

import * as fromLog from './log/store/log.reducer';
import { LogState } from './log/log.state';

import * as fromProduct from './product/store/product.reducer';
import { ProductState } from './product/store/product.state';

//-- Main App State Varaible ---
export interface AppState {
  core: CoreState;
  auth: AuthState;
  user: UserState;
  log: LogState;
  product: ProductState;
}

//-- Main App State Reducer --------------------------//
export const reducers: ActionReducerMap<AppState> = {
  core: fromCore.coreReducer,
  auth: fromAuth.authReducer,
  user: fromUser.userReducer,
  log: fromLog.logReducer,
  product: fromProduct.productReducer, 
};

//-- Main App Clear State On Actions  --------------------------------------------------//
export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: Action): AppState {
    if (action.type === '[Auth] Logout Success') {
      state = {
        core: state.core,
        auth: undefined,
        user: undefined,
        log: undefined,
        product: undefined,
      }
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [clearState];
