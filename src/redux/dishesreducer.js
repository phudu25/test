import {DISHES} from "../shared/dishes";

export const Dishes = (state = DISHES,action)=>{
    switch (action.type) {
        case '@@INIT': console.log('dishes');
        default:
            return state
    }
}