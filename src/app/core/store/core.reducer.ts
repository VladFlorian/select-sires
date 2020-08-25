//-------------- Core ----------------------------------------------------------------------//
import { CoreState, CoreStateInitialState } from './core.state';
import { CoreActionTypes, CoreActions } from './core.actions';

//--------------Core  Reducer --------------------------------------------------------------//
export function coreReducer(state = CoreStateInitialState, action: CoreActions): CoreState {
  switch (action.type) {

    case CoreActionTypes.SET_IS_MOBILE_VIEW: {
      return Object.assign({}, state, {
        isMobileView: action.payload.isMobileView
      });
    }

    default:
      return state;
  }
}

