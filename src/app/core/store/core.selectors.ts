//-------------- Core --------------------------------------------------------------//
import { AppState } from './../../app.reducer';
import { createSelector } from '@ngrx/store';
//-------------- State Variables ---------------------------------------------------//
export const getIsMobileViewState = (state: AppState) => state.core.isMobileView;

//-------------- State Selectors ---------------------------------------------------//
export const selectIsMobileView = createSelector(
  getIsMobileViewState,
  isMobileView => isMobileView
);