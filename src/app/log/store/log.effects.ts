//-------------- Core ------------------------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { map, tap, switchMap, catchError, withLatestFrom, take, takeUntil, } from 'rxjs/operators';
import { of, forkJoin, throwError } from 'rxjs';
//-------------- Data Store ------------------------------------------------------------------------//
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as fromLog from './log.actions';
import * as fromCore from './../../core/store/core.actions';
import { selectQuickLog } from './../../user/store/user.selectors';
//-------------- Services/Helpers ------------------------------------------------------------------//
import { UiHelper } from '../../shared/helpers/ui.helper';
import { LogService } from '../services/log.service';
import { LogDataObjHelper } from './../helpers/log-data-obj.helper';
//-------------- Data Models -----------------------------------------------------------------------//
import { LogDb } from '../models/log.model';

@Injectable()
export class LogEffects {
  constructor(
    private actions$: Actions,
    private logService: LogService,
    private uiHelper: UiHelper,
    private store: Store<AppState>,
    public logDataObjHelper: LogDataObjHelper
  ) { }

  //------------------Get User Logs ---------------------------------//
  @Effect()
  public getUserLogs$ = this.actions$.pipe(
    ofType<fromLog.GetUserLogs>(fromLog.LogActionTypes.GET_USER_LOGS),
    tap(() => {
      this.uiHelper.showLoader('Loading...');
    }),
    withLatestFrom(this.store.select(selectQuickLog)),
    switchMap(([action, quickLog]) => {
      const userId = quickLog.userId;
      //---------------------------------------------------------------------------------------------------------------------------------------------//
      return this.logService.getUserLogs(userId).pipe(
        take(1),
        switchMap((res: any) => {
          const enrichLogs: LogDb [] = this.logDataObjHelper.enrichLogsResponse(res);
          this.uiHelper.hideLoader()
          return of(new fromLog.GetUserLogsSuccess({ logs: [...enrichLogs] }));
        }),
        catchError(error => {
          console.log('getUserLogs$-error', error);
          this.uiHelper.displayErrorAlert(error.message);
          return of(new fromCore.HandleError({ error: { ...error }, actionType: action.type, payload: { ...action.payload }, insertError: true }));
        })
      );
    }),
  );

}
