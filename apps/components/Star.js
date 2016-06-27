'use strict';

import React, {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

class Star extends React.Component {

    onPress(event) {
        this.props.toggleFavor(this.props)
    }

    onEditName (text) {
        this.props.onEditName(this.props, text)
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
                        <TextInput
                            style={styles.nameField}
                            onChangeText={this.onEditName.bind(this)}
                            value={nameText}
                        />
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
    name: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F1F1F1',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    nameField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

module.exports = Star;