//-------------- Core -----------------------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { map, tap, switchMap, catchError, withLatestFrom, take, takeUntil, } from 'rxjs/operators';
import { of, forkJoin, throwError } from 'rxjs';
//------------- Data Store ------------------------------------------------------------------------//
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import * as fromUsers from './user.actions';
//------------- Services/Helpers -----------------------------------------------------------------//
import { UiHelper } from '../../shared/helpers/ui.helper';
import { UserService } from '../services/user.service';
//-------------- Data Models ---------------------------------------------------------------------//

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userServices: UserService,
    private uiHelper: UiHelper,
    private store: Store<AppState>,
  ) { }


}
