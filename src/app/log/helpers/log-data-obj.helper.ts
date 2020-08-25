//-------------- Core ----------------------------------------------//
import { Injectable } from '@angular/core';
//-------------- Services/Helpers ----------------------------------//
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
//-------------- Data Models ---------------------------------------//
import * as logsData from  '../models/log.model';
import { UserDb } from './../../user/models/user.model';
import { QuickLog } from './../../core/models/quick-log.model';
import { ProductDb } from './../../product/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class LogDataObjHelper {
  initialModifiedFields = [];
  constructor(
    public firebaseHelper: FirebaseHelper,
  ) { }


  //-------Generate User Log Object ---------------------------------------------------------------------------------------------------//
  genUserLog(userObj: UserDb, originalObj: UserDb, modifiedFields: string[], quickLog: QuickLog, logEvent: string, logLabel: string) {
    const logId = this.firebaseHelper.generateFirebaeId();
    const identifierFields = this.genUserIdentifierFields(userObj, quickLog);

    return {
      ...logsData.initialLogObj,
      id: logId,
      identifierFields,
      event: logEvent,
      type: logsData.userLogType,
      modifiedFields,
      obj: { ...userObj },
      originalObj: { ...originalObj },
      display: {
        label: logLabel,
      },
      ...quickLog.create
    };
  }

  // -- Gen User Identifier Fields -------------------------->
  genUserIdentifierFields(user: UserDb, quickLog: QuickLog) {
    return {
      ...logsData.initialIdentifierFields,
      objType: logsData.userLogType,
      userId: user.id,
    }
  }


  //------ Generate Product Log Object --------------------------------------------------------------------------------------------------------//
  genProductLog(product: ProductDb, originalObj: ProductDb, modifiedFields: string[], quickLog: QuickLog, logEvent: string, logLabel: string) {
    const logId = this.firebaseHelper.generateFirebaeId();
    const identifierFields = this.genProductIdentifierFields(product);

    return {
      ...logsData.initialLogObj,
      id: logId,
      identifierFields,
      event: logEvent,
      type: logsData.productLogType,
      modifiedFields,
      obj: { ...product },
      originalObj: { ...originalObj },
      display: {
        label: logLabel,
      },
      ...quickLog.create
    };
  }

  //------ Generate Identifier Fields Objects --------//
  genProductIdentifierFields(product: ProductDb) {
    return {
      ...logsData.initialIdentifierFields,
      objType: logsData.productLogType,
      userId: product.author.id,
      clientId: product.clientId,
      productId: product.id,
    }
  }


  //--------------- Enrich Firebase Response Logs ----------------------------------------------------------//
  enrichLogsResponse(logs) {
    if (logs.docs) {
      return logs.docs.map(doc => {
        const authored = (doc.data().authored) ? doc.data().authored.toDate() : null;
        const edited = (doc.data().edited) ? doc.data().edited.toDate() : null;
        return {
          id: doc.id,
          ...doc.data(),
          authored,
          edited
        };
      });
    } else {
      return logs.map(item => {
        const authored = (item.payload.doc.data().authored) ? item.payload.doc.data().authored.toDate() : null;
        const edited = (item.payload.doc.data().edited) ? item.payload.doc.data().edited.toDate() : null;
        return {
          ...item.payload.doc.data(),
          authored,
          edited
        };
      });
    }
  }

}