import { createReducer,on } from "@ngrx/store";
import { AddItemToCart,RemoveItemFromCart,AddItemToCartFailure,AddItemToCartSuccess } from "./cart.actions";
import { Product } from "../models/product";


export const initialState : Product[] = [];



export const CartReducer = createReducer(

    initialState,
    on(AddItemToCart, (state) => {return state}),
    on(AddItemToCartSuccess, (state,{order}) => [...state,order]),
    on(AddItemToCartFailure, (state,{error}) => {
        console.error(error);
        return state;
    }),
    on(RemoveItemFromCart,(state,{orderId}) => state.filter(order => order.id != orderId))

);