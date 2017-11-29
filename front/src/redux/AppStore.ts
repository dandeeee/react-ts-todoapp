import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./RootReducer";
import {getInitialState} from "./AppState";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    getInitialState(),
    applyMiddleware(thunk)
)

export default store