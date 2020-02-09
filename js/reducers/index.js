import { ADD_POINTS } from "../constants/action-types";

const initialState = {
    points: 0,
    brand: "Aldi"
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_POINTS:
            return Object.assign({}, state, {
                points: action.payload.points,
                brand: action.payload.brand
            });
        default:
            return state;
    }    
};

export {
    rootReducer
};