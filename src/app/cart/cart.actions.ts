import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";


export const AddItemToCart = createAction('[Item] Add Item To Cart',props<{order : Product}>());
export const AddItemToCartSuccess = createAction('[Item] Added Item Successfully',props<{order : Product}>());
export const AddItemToCartFailure = createAction('[Item] Add Item To Cart Failure',props<{error : any}>());


export const RemoveItemFromCart = createAction('[Item] Remove Item From Cart',props<{orderId : number}>());
