import { createAction, props } from "@ngrx/store";
import { Coffee } from "../../models/coffee";


export const loadCoffees = createAction(
    '[Coffess Page] Load Coffees'
)

export const loadCoffeesSuccess =  createAction(
    '[Coffess Page] Loaded Success',
    props<{coffees:Coffee[]}>()
)