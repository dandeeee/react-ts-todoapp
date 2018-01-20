import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./RootReducer";
import {getInitialState} from "./AppState";
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "./AppSagas";

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        rootReducer,
        getInitialState(),
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(rootSaga)

    return store
}

const store = configureStore()

export default store