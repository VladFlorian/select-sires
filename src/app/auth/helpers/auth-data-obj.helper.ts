//-------------- Core -----------------------------------------------------//
import { Injectable } from '@angular/core';
//-------------- Services/Helper ------------------------------------------//
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
import { LogDataObjHelper } from './../../log/helpers/log-data-obj.helper';
import * as logsData from '../../log/models/log.model';
//-------------- Data Models ----------------------------------------------//
import { SignUpFormObj } from './../models/auth.model';
import { initialUserDb } from './../../user/models/user.model';
import { QuickLog } from '../../core/models/quick-log.model';

@Injectable({
  providedIn: 'root'
})
export class AuthDataObjHelper {
  initialModifiedFields = [];
  constructor(
    public firebaseHelper: FirebaseHelper,
    private logDataObjHelper: LogDataObjHelper,
  ) { }

  userSignUp(signUpFormObj: SignUpFormObj, userId: string, quickLog: QuickLog) {
    const fullName = signUpFormObj.firstName + ' ' + signUpFormObj.lastName;
    
    //---User Insert Obj--------------------->
    const userObj = {
      ...initialUserDb,
      id: userId,
      fullName: fullName,
      firstName: signUpFormObj.firstName,
      lastName: signUpFormObj.lastName,
      email: signUpFormObj.email,
      phone: signUpFormObj.phone,
      dateOfBirth: signUpFormObj.dateOfBirth,
      ...quickLog.create
    }

    // User Obj + Log Insert  --------------------------------------------------------------------------------------------------------------------------------------------------------->
    const userInsertLog = this.logDataObjHelper.genUserLog(userObj, initialUserDb, this.initialModifiedFields, quickLog, logsData.userSignUpEvent, logsData.userSignUpLabel);
    const userInsert = {
      obj: userObj,
      log: userInsertLog
    }

    return { userInsert: { ...userInsert}};
  }

}
