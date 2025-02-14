import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import * as cartActions from './cart.actions';
import { CartService } from "./cart.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class CartEffects{

    addItemToCart$ = createEffect(() => this.actions$.pipe(

        // ofType(cartActions.AddItemToCart),
        // mergeMap(({action}) => this.cartService.addItemToCart(action).pipe(
        //     map(item => cartActions.AddItemToCartSuccess({item})),
        //     catchError(error => of(cartActions.AddItemToCartFailure({error})))
        // ))
     
    ));

    constructor(
        private actions$ : Actions,
        private cartService : CartService
    ){}

}