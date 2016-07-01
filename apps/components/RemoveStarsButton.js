'use strict';

import React, {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

class RemoveStarsButton extends React.Component {

    onPress(event) {
        this.props.removeAllSelectedStars(this.props.stars)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="red"
                    onPress={this.onPress.bind(this)}>
                    <View>
                        <Text>Remove All Selected Stars</Text>
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

module.exports = RemoveStarsButton;