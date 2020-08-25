//---------------CORE------------------------------------------------------------//
import { ProductInitialState, ProductState, productAdapter  } from './product.state';
import { ProductActionTypes, ProductActions } from './product.actions';

//---------------Product Reducer -------------------------------------------------------------------------//
export function productReducer(state = ProductInitialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.GET_CLIENT_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        clientProducts: productAdapter.addAll(action.payload.clientProducts, state.clientProducts),
      });
    }


    case ProductActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const productObj = action.payload.productObj;
      const changes = { id: productObj.id, changes: { ...productObj } };
      return Object.assign({}, state, {
        clientProducts: productAdapter.updateOne(changes, state.clientProducts),
      });
    }

 
    case ProductActionTypes.ADD_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        clientProducts: productAdapter.addOne(action.payload.productObj, state.clientProducts),
      });
    }

    case ProductActionTypes.SET_PRODUCT: {
      return Object.assign({}, state, {
        productObj: action.payload.productObj
      });
    }

    default:
      return state;
  }
}

export const { selectAll } = productAdapter.getSelectors();
