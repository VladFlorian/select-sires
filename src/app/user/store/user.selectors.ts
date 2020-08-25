//-------------- Core ----------------------------------------------------------------------------------//
import { AppState } from './../../app.reducer';
import { createSelector } from '@ngrx/store';
import { initialUserDb } from '../models/user.model';
//-------------- State Varaibles -----------------------------------------------------------------------//
export const getUserObjState = (state: AppState) => state.user.userObj;

//-------------- User State Selectors ------->
export const selectUserObj = createSelector(
  getUserObjState,
  user => {
    return {
      ...initialUserDb,
      ...user
    }
  }
);


//Used for logs, when updating, creating, or determining current user + client
export const selectQuickLog = createSelector(
  selectUserObj,
  user => {
    const userId = user.id;
    const userName = user.fullName;

    const editor = { name: userName, id: userId };
    const edited = new Date();

    const author = { name: userName, id: userId };
    const authored = new Date();

    const create = {editor, edited, author, authored };
    const update = {editor, edited };

    return { create, update, edited, editor, author, authored, userId, userName };
  }
);