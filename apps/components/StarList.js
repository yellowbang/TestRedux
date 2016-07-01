'use strict';

import React, {
    View,
    ListView,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native'
import CheckBox from 'react-native-checkbox';

import Star from './Star'

class StarList extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.stars),
            stars: this.props.stars
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.stars.length !== this.props.stars.length || nextProps.stars !== this.props.stars) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.stars),
                stars: nextProps.stars
            });
        }
    }


    onToggleFavor(props) {
        this.props.toggleFavor(props, this.state.stars)
    }

    onPressDelete(props) {
        this.props.removeStar(props, this.state.stars)
    }

    onSelected(props) {
        this.props.selectStar(props, this.state.stars)
    }

    onEditName (props, text) {
        this.props.onEditName(props, this.state.stars, text)
    }

    renderRow(rowData) {
        var favor = rowData.favor;
        var favorText = rowData.favor? 'true':'false';
        var selected = rowData.selected;
        var nameText = rowData.name;
        var id = rowData.id;
        var props = {
            id: id,
            selected: selected,
            favor: favor,
            name: nameText
        };
        return (
            <View style={styles.row}>
                <View style={styles.container}>
                    <TouchableHighlight
                        underlayColor="yellow"
                        onPress={() => this.onToggleFavor(props)}>
                        <View>
                            <TextInput
                                style={styles.nameField}
                                onChangeText={(text) => this.onEditName(props, text)}
                                value={nameText}
                            />
                            <Text>{nameText}</Text>
                            <Text>{favorText}</Text>
                            <CheckBox
                                label=''
                                checked={selected}
                                onChange={() => this.onSelected(props)}
                            />
                            <TouchableHighlight
                                underlayColor="orange"
                                onPress={() => this.onPressDelete(props)}>
                                <Text style={styles.deleteButton}>DELETE</Text>
                            </TouchableHighlight>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
        )
    }
}

var styles = StyleSheet.create({
    listView: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        height: Dimensions.get('window').height-110,
        padding: 10,
        marginTop: 20
    },
    row: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 10
    }
});

module.exports = StarList;