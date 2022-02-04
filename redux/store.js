import { createStore, applyMiddleware } from "redux"
import { createWrapper } from "next-redux-wrapper"
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./reducers/rootReducer"


const makeStore = () => createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware()
    ))


export const wrapper = createWrapper(makeStore)