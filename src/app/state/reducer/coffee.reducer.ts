import { createReducer, on } from "@ngrx/store";
import { Coffee } from "../../models/coffee"
import { CoffeeState } from "../../models/coffee.state";
import { loadCoffees, loadCoffeesSuccess } from "../actions/coffee.action";

export const initialState:CoffeeState = {loading : false, coffees: [] };


export const coffeeReducer= createReducer(

    initialState,
    on(loadCoffees, (state)=>{
        return {...state, loading:true}
    }),
    on(loadCoffeesSuccess, (state, {coffees})=>{
        return {...state, loading:false, coffees:coffees}
    })
    
)