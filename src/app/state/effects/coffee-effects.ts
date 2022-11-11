import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction, props } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { Coffee } from "src/app/models/coffee";
import { RequestService } from "src/app/services/request.service";


@Injectable()
export class CoffeeEffects {

    constructor(private actions$: Actions,
        private requestService: RequestService) {

    }

    loadCoffee$ = createEffect(()=>this.actions$.pipe(
            ofType('[Coffess Page] Load Coffees'),
            mergeMap(()=> this.requestService.getCoffees()
                .pipe(
                    map(coffees =>({type:'[Coffess Page] Loaded Success', coffees:coffees}))
                    ,catchError(()=> EMPTY))
            ))
    )
}