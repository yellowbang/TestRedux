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
import {
    addStar,
    onEditName,
    toggleFavor
} from './Actions'

class App extends React.Component {

    render() {
        return (
            <View>
                <AddStarButton
                    stars={this.props.reducers.stars}
                    addStar={this.props.addStar}/>
                <StarList
                    stars={this.props.reducers.stars}
                    onEditName={this.props.onEditName}
                    toggleFavor={this.props.toggleFavor}/>
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
        onEditName,
        toggleFavor
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(App)