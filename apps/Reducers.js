'use strict';

import { combineReducers } from 'redux'
import {
    ADD_STAR,
    REMOVE_STAR,
    REMOVE_ALL_SELECTED_STARS,
    ON_EDIT_NAME,
    TOGGLE_FAVOR,
    SELECTED_STAR,
    EXIT_DETAIL,
    READ_DETAIL,
} from './Actions'

const initialState = {
    routeTitle: 'Main',
    currentStar:{},
    stars:[{
        name: 'Sun',
        id: Date.now(),
        selected: false,
        favor: false
    },{
        name: 'Moon',
        id: Date.now()+1,
        selected: false,
        favor: false
    }]
};

const reducers = (state = initialState, action) => {
    var stars, originalStars, starIndex;
    stars = (action && action.stars)? cloneData(action.stars):[];
    switch (action.type) {
        case ADD_STAR:
            stars.push(action.newStar);
            break;
        case REMOVE_STAR:
            starIndex = findActiveStar(stars, action.id);
            stars.splice(starIndex, 1);
            break;
        case REMOVE_ALL_SELECTED_STARS:
            stars = filterOutSelectedStars(stars);
            break;
        case ON_EDIT_NAME:
            starIndex = findActiveStar(stars, action.id);
            if (starIndex === -1) {
                console.log('The star is not existed!');
            } else {
                stars[starIndex].name = action.name;
            }
            break;
        case TOGGLE_FAVOR:
            starIndex = findActiveStar(stars, action.id);
            if (starIndex === -1) {
                console.log('The star is not existed!');
            } else {
                stars[starIndex].favor = action.favor;
            }
            break;
        case SELECTED_STAR:
            starIndex = findActiveStar(stars, action.id);
            if (starIndex === -1) {
                console.log('The star is not existed!');
            } else {
                stars[starIndex].selected = action.selected;
            }
            break;
        case EXIT_DETAIL:
            return Object.assign({}, state, {
                routeTitle: 'Main'
            });
        case READ_DETAIL:
            return Object.assign({}, state, {
                routeTitle: 'Detail',
                currentStar: findActiveStar(stars, action.id, true)
            });
        default:
            return state
    }
    
    var currentStar = (starIndex >= 0)? stars[starIndex]:{};
    return Object.assign({}, state, {
        currentStar: currentStar,
        stars: stars
    });
};

const findActiveStar = (stars, id, returnStar=false) => {
    for (var i=0; i < stars.length; i++){
        var star = stars[i];
        if (star.id === id) return (returnStar)? star:i
    }
    return -1;
};

const filterOutSelectedStars = (stars) => {
    return stars.filter(function(star){
        return star.selected === false
    })
};

const cloneData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

const rootReducer = combineReducers({reducers});

export default rootReducer