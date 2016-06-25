'use strict';

export const TOGGLE_FAVOR = 'TOGGLE_FAVOR';
export const ADD_STAR = 'ADD_STAR';

export const toggleFavor = (props) => {
    var favor = !props.favor;
    var id = props.id;
    var stars = props.stars;
    return {type: TOGGLE_FAVOR, stars, favor, id}
};

export const addStar = () => {
    const star = {
        id: Date.now(),
        favor: false,
        name: Date.now().toString()
    };
    return {type: ADD_STAR, star}
};
// export const toggleFavor = function (aa) {
//     const favor = !this.props.favor;
//     return function(dispatch){
//         dispatch(_changeFavor(favor));
//     }
// };
//
// const _toggleFavor = (dispatch) => {
//     debugger
//     const favor = !this.props.favor;
//     dispatch(_changeFavor(favor));
//     return favor;
// };
//
// const _changeFavor = (favor) => ({type: TOGGLE_FAVOR, favor});