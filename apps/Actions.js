'use strict';

export const TOGGLE_FAVOR = 'TOGGLE_FAVOR';

export const toggleFavor = (favor) => {
    favor = !favor;
    return {type: TOGGLE_FAVOR, favor}
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