//-------------- Core ---------------------------------------//
import { AuthInitialState, AuthState } from './auth.state';
import { AuthActionTypes, AuthActions } from './auth.actions';


//-------------- Auth Reducer -------------------------------------------------------//
export function authReducer(state = AuthInitialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        authenticated: true,
      });
    }

    case AuthActionTypes.SET_UNAUTHENTICATED: {
      return Object.assign({}, state, {
        ...AuthInitialState
      });
    }
      
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        ...AuthInitialState
      });
    }

    default:
      return state;
  }
}
