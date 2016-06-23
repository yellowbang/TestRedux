'use strict';

import { combineReducers } from 'redux'
import {
    TOGGLE_FAVOR,
} from './Actions'

const initialState = {
    favor: false,
    name: 'bonnnn'
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOR:
            return Object.assign({}, state, {favor: action.favor});
        default:
            return state
    }
};

const rootReducer = combineReducers({reducers});

export default rootReducer