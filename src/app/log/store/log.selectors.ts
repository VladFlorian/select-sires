//-------------- Core -------------------------------------------------//
import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.reducer';

//------------- State Variables ---------------------------------------//
export const getLogsState = (state: AppState) => state.log.logs;

//-------------- State Selectors --------------------------------------//
export const selectLogs = createSelector(
  getLogsState,
  logs => logs
);
