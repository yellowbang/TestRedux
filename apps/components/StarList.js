'use strict';

import React, {
    View,
    ListView,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native'

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

    renderRow(rowData) {
        return (
            <View style={styles.row}>
                <Star
                    stars={this.state.stars}
                    favor={rowData.favor}
                    selected={rowData.selected}
                    name={rowData.name}
                    id={rowData.id}
                    onEditName={this.props.onEditName}
                    removeStar={this.props.removeStar}
                    selectStar={this.props.selectStar}
                    toggleFavor={this.props.toggleFavor}
                    navigator={this.props.navigator}
                    readDetail={this.props.readDetail}
                    exitDetail={this.props.exitDetail}
                />
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