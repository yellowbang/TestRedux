'use strict';

import React, {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

class AddStarButton extends React.Component {

    onPress(event) {
        this.props.addStar()
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="green"
                    onPress={this.onPress.bind(this)}>
                    <View>
                        <Text>Add</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F101F1',
        marginTop: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    }
});

module.exports = AddStarButton;