import { ActionReducerMap } from "@ngrx/store";
import { Coffee } from "../models/coffee";
import { CoffeeState } from "../models/coffee.state";
import { coffeeReducer } from "./reducer/coffee.reducer";


export interface AppState{
    coffee :CoffeeState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    coffee : coffeeReducer
}