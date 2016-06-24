'use strict';

import { combineReducers } from 'redux'
import {
    ADD_STAR,
    TOGGLE_FAVOR,
} from './Actions'

const initialState = {
    stars:[{
        name: 'Sun',
        id: Date.now(),
        favor: false
    },{
        name: 'Moon',
        id: Date.now()+1,
        favor: false
    }]
};

const reducers = (state = initialState, action) => {
    var stars;
    switch (action.type) {
        case ADD_STAR:
            stars = state.stars.concat(action.star);
            return Object.assign({}, state, {stars: stars});
        case TOGGLE_FAVOR:
            var starIndex = findActiveStar(action.stars, action.id);
            stars = cloneData(action.stars);
            if (starIndex === -1) {
                console.log('The star is not existed!');
            } else {
                stars[starIndex].favor = action.favor;
            }
            return Object.assign({}, state, {stars: stars});
        default:
            return state
    }
};

const findActiveStar = (stars, id) => {
    for (var i=0; i < stars.length; i++){
        var star = stars[i];
        if (star.id === id) return i;
    }
    return -1;
};

const cloneData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

const rootReducer = combineReducers({reducers});

export default rootReducer