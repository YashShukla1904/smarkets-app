import actionTypes from "./actionTypes";

const eventDetailReducer = function (state = null, action) {
    switch (action.type) {
        case actionTypes.setEventDetail:
            return action.payload
        default:
            return state;
    }
};

export { eventDetailReducer } 