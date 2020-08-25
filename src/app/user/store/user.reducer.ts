//-------------- Core -------------------------------------------//
import { UserState, UserStateInitialState } from './user.state';
import { UserActionTypes, UserActions } from './user.actions';


//------------- User Reducer--------------------------------------------------------------//
export function userReducer(state = UserStateInitialState, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.GET_USER_SUCCESS: {
      return Object.assign({}, state, {
        userObj: action.payload.userObj,
      });
    }

    default:
      return state;
  }
}

