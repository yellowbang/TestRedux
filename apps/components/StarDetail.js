'use strict';

import React, {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import CheckBox from 'react-native-checkbox';

class StarDetail extends React.Component {

    onToggleFavor(event) {
        this.props.toggleFavor(this.props, this.props.stars)
    }

    onPressDelete(event) {
        this.props.navigator.pop();
        this.props.removeStar(this.props, this.props.stars)
    }

    onSelected(event) {
        this.props.selectStar(this.props, this.props.stars)
    }

    onEditName (text) {
        this.props.onEditName(this.props, this.props.stars, text)
    }

    constructor(props) {
        super(props);
        this.state = {stars: this.props.stars}
    }

    render() {
        var favorText = this.props.favor? 'true':'false';
        var selected = this.props.selected;
        var nameText = this.props.name;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.nameField}
                    onChangeText={this.onEditName.bind(this)}
                    value={nameText}
                />
                <Text>{nameText}</Text>
                <TouchableHighlight
                    underlayColor="blue"
                    onPress={this.onToggleFavor.bind(this)}>
                    <Text>Favor: {favorText}</Text>
                </TouchableHighlight>
                <CheckBox
                    label='selected'
                    checked={selected}
                    onChange={this.onSelected.bind(this)}
                />
                <TouchableHighlight
                    underlayColor="orange"
                    onPress={this.onPressDelete.bind(this)}>
                    <Text style={styles.deleteButton}>DELETE</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

StarDetail.propTypes = {
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#01F1F1',
        paddingTop: 70,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    nameField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    deleteButton: {
        color: 'red'
    }
});

module.exports = StarDetail;