import {createStore, applyMiddleware ,combineReducers,compose} from 'redux';
import {Comments} from "./commentreducer";
import {Dishes} from "./dishesreducer";
import {Leaders} from "./leadersreducer";
import {Promotions} from "./promotionsreducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}