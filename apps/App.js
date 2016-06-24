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
import {
    toggleFavor
} from './Actions'

class App extends React.Component {

    onPressAdd(event){
        console.log('------click add')
    }
    
    render() {
        return (
            <View>
                <View style={styles.addButton}>
                    <TouchableHighlight
                        underlayColor="green"
                        onPress={this.onPressAdd.bind(this)}>
                        <View>
                            <Text>Add</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <StarList
                    stars={this.props.reducers.stars}
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
        toggleFavor
    }, dispatch)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    addButton: {
        flex: 1,
        justifyContent: 'flex-end',
        height: 100,
        padding: 20
    }
});

export default connect(stateToProps, dispatchToProps)(App)