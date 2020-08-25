//-------------- Core ---------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { tap, switchMap, catchError, withLatestFrom, take } from 'rxjs/operators';
import { of } from 'rxjs';
//-------------- Services/Helpers ---------------------------------------------------//
import { ErrorService } from '../services/error.service';
import { UiHelper } from './../../shared/helpers/ui.helper';
import { CoreDataObjHelper } from './../helpers/core-data-obj.helper';
//-------------- Data Store ---------------------------------------------------------//
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import * as fromCore from './core.actions';
import { selectUserObj } from './../../user/store/user.selectors';
import { selectQuickLog } from './../../user/store/user.selectors';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private errorService: ErrorService,
    private store: Store<AppState>,
    private uiHelper: UiHelper,
    private coreDataObjHelper: CoreDataObjHelper,
  ) { }

  //------------------Handle Error -----------------------//
  @Effect()
  public handleError$ = this.actions$.pipe(
    ofType<fromCore.HandleError>(fromCore.CoreActionTypes.HANDLE_ERROR),
    withLatestFrom(this.store.select(selectUserObj), this.store.select(selectQuickLog)),
    switchMap(([action, currentUser, quickLog]) => {
      const error: any = action.payload.error;
      const actionType: string = action.payload.actionType;
      const payload: any = action.payload.payload;
      const insertErrorFlag = action.payload.insertError;
      const dataObj = this.coreDataObjHelper.handleError(error, actionType, payload, currentUser, quickLog);
      // console.log('handleError - dataObj', dataObj);
      //-------------------------------------------------------------------------------------------------------//
      if (insertErrorFlag) {
        //---------------------------------------------------------//
        return this.errorService.insertError(dataObj.insert).pipe(
          take(1),
          switchMap(() => {
            this.uiHelper.hideLoader();
            this.uiHelper.displayErrorAlert(error.message);
            return of(new fromCore.HandleErrorSuccess());
          }),
          catchError(error => {
            console.log('handleError$ -CatchError', error);
            this.uiHelper.hideLoader();
            this.uiHelper.displayErrorAlert(error.message);
            return of(new fromCore.ActionSuccess());
          })
        );
      } else {
        this.uiHelper.hideLoader();
        return of(new fromCore.HandleErrorSuccess());
      }
    }),
  );

  //------------------NO CHANGES DETECTED  ---------------------------------//
  @Effect()
  public noChangesDetected$ = this.actions$.pipe(
    ofType(fromCore.CoreActionTypes.NO_CHANGES_DETECTED),
    tap(() => {
      console.log('noChangesDetected$');
      this.uiHelper.hideLoader();
      this.uiHelper.displayToast('No Changes Detected', 1000, 'bottom');
    }),
    switchMap(() => {
      return of(new fromCore.ActionSuccess());
    }),
  );

}