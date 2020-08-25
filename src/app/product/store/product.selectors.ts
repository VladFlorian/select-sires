//-------------- Core -------------------------------------------------------------------------//
import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromProduct from './product.reducer';
//--------------  State Varaibles ----------------------------------------------------//
export const getClientProductsState = (state: AppState) => state.product.clientProducts;
export const getProductObjState = (state: AppState) => state.product.productObj;

//--------------- State Selectors------------------------------------------------------//
export const selectClientProducts = createSelector(
  getClientProductsState,
  fromProduct.selectAll
);


export const selectProductObj = createSelector(
  getProductObjState,
  productObj => productObj
);

//------------- Custom Slices Of State Selectors --------------------------------------------------
export const selectEnrichedClientProducts = createSelector(
  selectClientProducts,
  products => {
    const sortedProducts = products.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return sortedProducts;
  }
);


export const selectProductCompareObj = createSelector(
  selectProductObj,
  product => {
    return {
      originalObj: {
        ...product
      },
      compareObj: {
        name: product.name,
        description: product.description,
        type: product.type,
        quantity: product.quantity,
        price: product.price,
      }
    };
  }
);
