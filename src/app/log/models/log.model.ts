//--------------SUMMARY-------------------------------------------------------------------------------------------------------
// -Each log Obj will have a log type derived from the database it's going to i.e.(client, product, objective)
// -Each log Obj will have an identifierObject consisting of all possible unique Id's + object type (client/user/evaluations)
// -Each log Obj will have an event Type  **can do counts on this/filters/Derive Performance indicators**
// -Each Log Obj will have a friendly display for reports etc
//----------------------------------------------------------------------------------------------------------------------------
export interface LogIdentifierFields {
  objType: string;   //differnt logTypes i.e. created new product object type would be product
  userId: string;
  clientId: string;
  accessId: string;
  purchaseId: string;
  uin: string;
  orderId: string;
  invoiceId: string;
  inventoryId: string;
  productId: string;
  productObjectiveIds: string [],
  productActivityIds: string [],
  objectiveId: string;
  activityId: string;

};

export interface LogDb {
  id: string;
  identifierFields: LogIdentifierFields,
  event: string;
  type: string;
  obj: any;
  originalObj: any;
  modifiedFields: string[],
  actionDetails: any;  //might want to use this field for meta data 
  display: {
    label: string;
  },
  clientId: string;
  author: {
    name: string;
    id: string;
  },
  authored: any,
  editor: {
    name: string;
    id: string;
  },
  edited: any;
}


export interface toServiceObj {
  log: any;
  obj: any
}
//-------------LOG TYPES-----------------------------------
export const authLogType = 'auth';
export const userLogType = 'user';
export const productLogType = 'product';

//------------User EVENTS + FRIENDLY DISPLAY-------------------
export const userSignUpEvent = 'USER_SIGNEND_UP';
export const userSignUpLabel = 'User Signed Up';

//------------Product  EVENTS + FRIENDLY DISPLAY-------------------
export const productAddEvent = 'PRODUCT_CREATED';
export const productAddLabel = 'Product Created';

export const productUpdateEvent = 'PRODUCT_UPDATED';
export const productUpdateLabel = 'Product Updated';

//-------------INITIAL IDENTIFIER FIELDS----------------------------------------------------------
export const initialIdentifierFields = {
  objType: null,   //differnt logTypes i.e. created new product object type would be product
  userId: null,
  productId: null,
};

//-------------Initial Log Obj---------------------------------------------------------------------
export const initialLogObj = {
  id: null,
  identifierFields: initialIdentifierFields,
  event: null,
  type: null,
  obj: null,
  originalObj: null,
  modifiedFields: [],
  actionDetails: null,  //might want to use this field for meta data 
  display: {
    label: null,
  },
  clientId: null,
  author: {
    name: null,
    id: null,
  },
  authored: new Date(),
  editor: {
    name: null,
    id: null,
  },
  edited: new Date()
}

export interface toDataBaseObj {
  log: any;
  obj: any
}




