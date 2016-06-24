'use strict';

import React, {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

class Star extends React.Component {

    onPress(event) {
        this.props.toggleFavor(this.props)
    }

    render() {
        var propText = this.props.favor? 'true':'false';
        var nameText = this.props.name;
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="yellow"
                    onPress={this.onPress.bind(this)}>
                    <View>
                        <Text>{nameText}</Text>
                        <Text>{propText}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

Star.propTypes = {
    id: React.PropTypes.number.isRequired,
    favor: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired,
    toggleFavor: React.PropTypes.func.isRequired
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F1F1F1',
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    }
});

module.exports = Star;