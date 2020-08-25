//-------------- Core --------------------------------------------------------//
import { createEntityAdapter, EntityState } from '@ngrx/entity';
//-------------- Data Models -------------------------------------------------//
import { ProductDb, initialProductDb } from '../models/product.model';

//ENTITY STUFF --Allows us to use addMany,updateMany,removeMany,addOne,addAll,removeAll, removeOne methods in reducer
interface EntityProductDb extends EntityState<ProductDb> { }
const adapterProduct = createEntityAdapter<ProductDb>();
const productEntityInitialState: EntityProductDb = adapterProduct.getInitialState({});
export const productAdapter = adapterProduct;

//-------Product State Variables ------->
export interface ProductState {
    clientProducts: EntityProductDb;
    productObj: ProductDb;
}

//-------Product Initial State Variables ------------>
export const ProductInitialState: ProductState = {
    clientProducts: productEntityInitialState,
    productObj: initialProductDb
};
