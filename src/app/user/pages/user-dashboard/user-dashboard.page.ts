//---------------CORE-----------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
//---------------DATA_STORE-----------------------------------------------//
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as userActions  from './../../store/user.actions';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    //Dispatch Actions here 
    //Listen on selectors here
  }



  ngOnDestroy() {
    // console.log('Destroyed User Dashboard Page');
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

