import { createSelector } from "@ngrx/store";
import { CoffeeState } from "src/app/models/coffee.state";
import { AppState } from "../app.state";


export const selectCoffeeFeature = (state :AppState) => state.coffee;

export const selectCoffeeList = createSelector(
    selectCoffeeFeature,
    (state:CoffeeState)=>state.coffees
)

export const selectLoading = createSelector(
    selectCoffeeFeature,
    (state:CoffeeState)=>state.loading
)