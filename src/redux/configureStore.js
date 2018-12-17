import {createStore,combineReducers} from 'redux';
import {Comments} from "./commentreducer";
import {Dishes} from "./dishesreducer";
import {Leaders} from "./leadersreducer";
import {Promotions} from "./promotionsreducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}