'use strict';

import React, {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import CheckBox from 'react-native-checkbox';

class Star extends React.Component {

    onToggleFavor(event) {
        this.props.toggleFavor(this.props, this.state.stars)
    }

    onPressDelete(event) {
        this.props.removeStar(this.props, this.state.stars)
    }

    onSelected(event) {
        this.props.selectStar(this.props, this.state.stars)
    }
    
    onEditName (text) {
        this.props.onEditName(this.props, this.state.stars, text)
    }

    constructor(props) {
        super(props);
        this.state = {stars: this.props.stars}
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.stars.length !== this.props.stars.length) {
            this.setState({'stars': nextProps.stars});
        }
    }
    
    render() {
        var propText = this.props.favor? 'true':'false';
        var selected = this.props.selected;
        var nameText = this.props.name;
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="yellow"
                    onPress={this.onToggleFavor.bind(this)}>
                    <View>
                        <TextInput
                            style={styles.nameField}
                            onChangeText={this.onEditName.bind(this)}
                            value={nameText}
                        />
                        <Text>{nameText}</Text>
                        <Text>{propText}</Text>
                        <CheckBox
                            label=''
                            checked={selected}
                            onChange={this.onSelected.bind(this)}
                        />
                        <TouchableHighlight
                            underlayColor="orange"
                            onPress={this.onPressDelete.bind(this)}>
                            <Text style={styles.deleteButton}>DELETE</Text>
                        </TouchableHighlight>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

Star.propTypes = {
    id: React.PropTypes.number.isRequired,
    favor: React.PropTypes.bool.isRequired,
    selected: React.PropTypes.bool.isRequired,
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
    },
    deleteButton: {
        color: 'red'
    }
});

module.exports = Star;