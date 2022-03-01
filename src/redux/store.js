import { combineReducers, createStore } from "redux";
import { eventDetailReducer } from "./reducers";

const reducers = combineReducers({
    eventDetail: eventDetailReducer
})

const store = createStore(reducers)

export default store