'use strict';

import React, {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import StarList from './components/StarList'
import AddStarButton from './components/AddStarButton'
import RemoveStarsButton from './components/RemoveStarsButton'
import {
    addStar,
    removeStar,
    removeAllSelectedStars,
    onEditName,
    selectStar,
    toggleFavor
} from './Actions'

class App extends React.Component {

    render() {
        return (
            <View>
                <AddStarButton
                    stars={this.props.reducers.stars}
                    addStar={this.props.addStar}/>
                <RemoveStarsButton
                    stars={this.props.reducers.stars}
                    removeAllSelectedStars={this.props.removeAllSelectedStars}/>
                <StarList
                    stars={this.props.reducers.stars}
                    onEditName={this.props.onEditName}
                    removeStar={this.props.removeStar}
                    toggleFavor={this.props.toggleFavor}
                    selectStar={this.props.selectStar}/>
            </View>
        )
    }
}

const stateToProps = (state) => {
    return {
        reducers: state.reducers
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        addStar,
        removeStar,
        removeAllSelectedStars,
        onEditName,
        selectStar,
        toggleFavor
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(App)