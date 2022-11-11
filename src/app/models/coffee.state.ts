import { Coffee } from "./coffee";

export interface CoffeeState{
    loading:boolean,
    coffees: ReadonlyArray<Coffee>
}