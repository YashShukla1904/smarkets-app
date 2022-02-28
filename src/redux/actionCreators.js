import actionTypes from "./actionTypes";

function setEventDetailAction(eventDetail) {
    return {
        type: actionTypes.setEventDetail,
        payload: eventDetail
    }
}

export { setEventDetailAction }