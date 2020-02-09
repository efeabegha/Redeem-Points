import { ADD_POINTS, ADD_BRAND } from '../constants/action-types';

function addPoints(payload) {
    return {
        type: ADD_POINTS,
        payload
    }
};

function addBrand(payload) {
    return {
        type: ADD_BRAND,
        payload
    }
};

const Actions = {
    addPoints,
    addBrand
};

export {
    Actions
};