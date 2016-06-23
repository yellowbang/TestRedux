'use strict';

import React, {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import Star from './components/Star'
import {
    toggleFavor
} from './Actions'

class App extends React.Component {

    render() {
        return (
            <Star
                favor={this.props.reducers.favor}
                name={this.props.reducers.name}
                toggleFavor={this.props.toggleFavor}/>
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
        toggleFavor
    }, dispatch)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default connect(stateToProps, dispatchToProps)(App)