//-------------- Core ----------------------------------------------------//
import { Injectable } from '@angular/core';
//-------------- Firebase ------------------------------------------------//
import { AngularFirestore } from '@angular/fire/firestore';
//-------------- Services/Helpers ----------------------------------------//
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
import { UtilityHelper } from './../../shared/helpers/utility-helper';
import { LogDataObjHelper } from '../../log/helpers/log-data-obj.helper';
//-------------- Data Models ---------------------------------------------//
import { initialErrorDb } from './../models/error.model';
import { UserDb } from './../../user/models/user.model';
import { QuickLog } from './../models/quick-log.model';

@Injectable({
  providedIn: 'root'
})
export class CoreDataObjHelper {
  initialModifiedFields = [];

  constructor(
    public firebaseHelper: FirebaseHelper,
    public logsDataObjHelper: LogDataObjHelper,
    public utilHelper: UtilityHelper,
    public fireStoreDB: AngularFirestore,
  ) { }


  //---------------Add Member Access Profile------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  handleError(error: any, actionType: string, payload: any, currentUser: UserDb, quickLog: QuickLog) {

    //---Error Insert----------------------
    const errorObj = {
      ...initialErrorDb,
      id: this.fireStoreDB.createId(),
      actionType: actionType,
      payload: { ...payload },
      error: { ...error },
      author: {
        id: currentUser.id,
        name: currentUser.fullName
      },
      authored: new Date(),
      editor: {
        id: currentUser.id,
        name: currentUser.fullName
      },
      edited: new Date(),
    };

    return { insert: { ...errorObj}}
  }
}