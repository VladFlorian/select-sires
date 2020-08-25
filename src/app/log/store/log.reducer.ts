//-------------- Core ----------------------------------------------------------------------//
import { LogActions, LogActionTypes } from './log.actions';
import { LogInitialState, LogState } from '../log.state';

//-------------- Log Reducer ---------------------------------------------------------------//
export function logReducer(state = LogInitialState, action: LogActions): LogState {
  switch (action.type) {

    
    default:
      return state;
  }
}