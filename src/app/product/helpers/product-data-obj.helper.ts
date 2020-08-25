//-------------- Core ---------------------------------------------------//
import { Injectable } from '@angular/core';
//-------------- Data Models --------------------------------------------//
import { ProductDb } from '../models/product.model';
import { initialProductDb } from '../models/product.model';
import { productStatusOptions } from '../models/product.model';
import { LogDb } from '../../log/models/log.model';
//-------------- Services/Helpers ---------------------------------------//
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
import * as logsData from '../../log/models/log.model';
import { LogDataObjHelper } from '../../log/helpers/log-data-obj.helper';
import { UtilityHelper } from '../../shared/helpers/utility-helper';


@Injectable({
  providedIn: 'root'
})
export class ProductDataObjHelper {
  initialModifiedFields = [];
  constructor(
    public firebaseHelper: FirebaseHelper,
    public logDataObjHelper: LogDataObjHelper,
    public utilityHelper: UtilityHelper
  ) { }


  addProduct(product, quickLog) {
    let stateUpdates: { product: ProductDb } = { product: null };
    const productId = this.firebaseHelper.generateFirebaeId();

    //---product Insert----------------------------
    const productObj = {
      ...initialProductDb,
      id: productId,
      ...product,
      status: productStatusOptions.active,
      ...quickLog.create
    };

    // product Obj +  Log Insert  --------------------------------------------------------------------------------------------------------------------------------------------------------->
    const productCreateLog = this.logDataObjHelper.genProductLog(productObj, initialProductDb, this.initialModifiedFields, quickLog, logsData.productAddEvent, logsData.productAddLabel);
    const productInsert = {
      obj: productObj,
      log: productCreateLog
    }
    stateUpdates.product = productObj;

    return {
      productInsert,
      stateUpdates
    }
  }

  //---------------Update product ------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  updateProduct(product, compareObj, originalObj, quickLog) {
    var stateUpdates = { product: null };
    const diffObj = this.utilityHelper.genDifferencesObj(product, compareObj);
    const modifiedFields: string[] = diffObj.modifiedFields;

    //---product Update----------------------
    const productUpdate = {
      ...originalObj,
      ...product,
      ...quickLog.update,
      clientName: quickLog.clientName
    };

    const updateproductLog = this.logDataObjHelper.genProductLog(productUpdate, originalObj, modifiedFields, quickLog, logsData.productUpdateEvent, logsData.productUpdateLabel);

    const updateproductObj = {
      obj: productUpdate,
      log: updateproductLog
    }
  
    stateUpdates.product = { ...updateproductObj };

    return  { productUpdate: null, stateUpdates }
  }


  //---------------Enrich Firebase Response Products ------------------------------------------------------------//
  enrichProductsResponse(products) {
    if (products.docs) {
      return products.docs.map(doc => {
        const authored = (doc.data().authored) ? doc.data().authored.toDate() : null;
        const edited = (doc.data().edited) ? doc.data().edited.toDate() : null;
        return {
          ...initialProductDb,
          id: doc.id,
          ...doc.data(),
          authored,
          edited
        };
      });
    } else {
      return products.map(item => {
        const authored = (item.payload.doc.data().authored) ? item.payload.doc.data().authored.toDate() : null;
        const edited = (item.payload.doc.data().edited) ? item.payload.doc.data().edited.toDate() : null;
        return {
          ...initialProductDb,
          ...item.payload.doc.data(),
          authored,
          edited
        };
      });
    }
  }


}