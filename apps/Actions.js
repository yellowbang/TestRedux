'use strict';

export const TOGGLE_FAVOR = 'TOGGLE_FAVOR';
export const ON_EDIT_NAME = 'ON_EDIT_NAME';
export const ADD_STAR = 'ADD_STAR';

export const onEditName = function (props, name) {
    var id = props.id;
    var stars = props.stars;
    return {type: ON_EDIT_NAME, stars, name, id}

};

export const toggleFavor = (props) => {
    var favor = !props.favor;
    var id = props.id;
    var stars = props.stars;
    return {type: TOGGLE_FAVOR, stars, favor, id}
};

export const addStar = (stars) => {
    const newStar = {
        id: Date.now(),
        favor: false,
        name: Date.now().toString()
    };
    return {type: ADD_STAR, newStar, stars}
};

// const _toggleFavor = (dispatch) => {
//     debugger
//     const favor = !this.props.favor;
//     dispatch(_changeFavor(favor));
//     return favor;
// };
//
// const _changeFavor = (favor) => ({type: TOGGLE_FAVOR, favor});