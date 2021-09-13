import { createStore,combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";

import { imagesReducer } from "../reducers/imagesReducer";
import { loginReducer } from "../reducers/loginReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    login:loginReducer,
    images:imagesReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    )