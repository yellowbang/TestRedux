'use strict';

export const TOGGLE_FAVOR = 'TOGGLE_FAVOR';
export const SELECTED_STAR = 'SELECTED_STAR';
export const ON_EDIT_NAME = 'ON_EDIT_NAME';
export const ADD_STAR = 'ADD_STAR';
export const REMOVE_STAR = 'REMOVE_STAR';
export const REMOVE_ALL_SELECTED_STARS = 'REMOVE_ALL_SELECTED_STARS';

var id = 0;

export const onEditName = function (props, stars, name) {
    var id = props.id;
    return {type: ON_EDIT_NAME, stars, name, id}

};

export const toggleFavor = (props, stars) => {
    var favor = !props.favor;
    var id = props.id;
    return {type: TOGGLE_FAVOR, stars, favor, id}
};

export const selectStar = (props, stars) => {
    var selected = !props.selected;
    var id = props.id;
    return {type: SELECTED_STAR, stars, selected, id}
};

export const addStar = (stars) => {
    id++;
    const newStar = {
        id: id,
        selected: false,
        favor: false,
        name: id.toString()
    };
    return {type: ADD_STAR, newStar, stars}
};

export const removeStar = (props, stars) => {
    var id = props.id;
    return {type: REMOVE_STAR, id, stars}
};

export const removeAllSelectedStars = (stars) => {
    return {type: REMOVE_ALL_SELECTED_STARS, stars}
};

// const _toggleFavor = (dispatch) => {
//     debugger
//     const favor = !this.props.favor;
//     dispatch(_changeFavor(favor));
//     return favor;
// };
//
// const _changeFavor = (favor) => ({type: TOGGLE_FAVOR, favor});