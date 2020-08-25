//-------------- Core --------------------------------------------------------//
import { Action } from '@ngrx/store';
//-------------- Data Models -------------------------------------------------//
import { ProductDb } from '../models/product.model';

export enum ProductActionTypes {
  GET_CLIENT_PRODUCTS          = '[Product] Get Client Products',
  GET_CLIENT_PRODUCTS_SUCCESS  = '[Product] Get Client Products Success',

  ADD_PRODUCT                  = '[Product] Add Product',
  ADD_PRODUCT_SUCCESS          = '[Product] Add Product Success',

  UPDATE_PRODUCT               = '[Product] Update Product',
  UPDATE_PRODUCT_SUCCESS       = '[Product] Update Product Success',

  SET_PRODUCT                  = '[Product] Set Product',

  ACTION_SUCCESS               = '[Product] Action was Successfull',
}

//-----Get Client Products --------------------------------------------//
export class GetClientProducts implements Action {
  readonly type = ProductActionTypes.GET_CLIENT_PRODUCTS;
  constructor(public payload: any = null) { }
}

export class GetClientProductsSuccess implements Action {
  readonly type = ProductActionTypes.GET_CLIENT_PRODUCTS_SUCCESS;
  constructor(public payload: { clientProducts: ProductDb [] }) {}
}

//-----Add Product ------------------------------------------------//
export class AddProduct implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT;
  constructor(public payload: { productObj: ProductDb }) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT_SUCCESS;
  constructor(public payload: { productObj: ProductDb }) {}
}

//-----Update Product ----------------------------------------------//
export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT;
  constructor(public payload: { productObj: ProductDb }) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: { productObj: ProductDb }) { }
}

//-----Set Product -------------------------------------------------//
export class SetProduct implements Action {
  readonly type = ProductActionTypes.SET_PRODUCT;
  constructor(public payload: { productObj: ProductDb }) { }
}

//-----Action Success ---------------------------------//
export class ActionSuccess implements Action {
  readonly type = ProductActionTypes.ACTION_SUCCESS;
}

export type ProductActions =
| GetClientProducts
| GetClientProductsSuccess


| AddProduct
| AddProductSuccess

| UpdateProduct
| UpdateProductSuccess

| SetProduct

| ActionSuccess;
