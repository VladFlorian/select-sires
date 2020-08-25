//--Product DB --------------->
export interface ProductDb {
  id?: string;
  clientId?: string;
  name?: string;
  description?: string;
  status?: string;     //**productStatusOptions**
  type?: string;       //**productTypeOptions**
  quantity?: number;
  price?: number;
  //------------------------->
  author?: any;
  authored?: any;
  editor?: any;
  edited?: any;
}


//-----Initial Product DB  ----------->
export const initialProductDb = {
  id: null,
  clientId: null,
  name: null,
  description: null,
  status: null,      //**productStatusOptions**
  type: null,        //**productTypeOptions**
  quantity: 0,
  price: 0,
  //---------------------------------->
  author: null,
  editor: null,
  authored: new Date(),
  edited: new Date(),
}


//--- Product Status Options -------------------->
export const productStatusOptions = {
  active: 'Active',
  archived: 'Archived',
}

export const productStatusOptionsArray = [
  productStatusOptions.active,
  productStatusOptions.archived,
];

//--- Product Type Options -------------------->
export const productTypeOptions = {
  specimen: 'Specimen',
  animal: 'Animal',
  results: 'Results',
}

export const productTypeOptionsArray = [
  productTypeOptions.specimen,
  productTypeOptions.animal,
  productTypeOptions.results,
];


//-----  Error Messages  ---------------->
export const productErrorMsgs = {
    name: 'Should be between 1-50 characters.',
    description: 'Enter a product descripton.',
    type: 'Select type.',
    price: 'Enter Price.',
    quantity: 'Enter Quantity.',
  }
