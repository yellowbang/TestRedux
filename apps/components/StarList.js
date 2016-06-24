'use strict';

import React, {
    View,
    ListView,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

import Star from './Star'

class StarList extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.stars)
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.stars.length !== this.props.stars.length || nextProps.stars !== this.props.stars) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.stars)
            })
        }
    }

    renderRow(rowData) {
        return (
            <View style={styles.row}>
                <Star
                    stars={this.props.stars}
                    favor={rowData.favor}
                    name={rowData.name}
                    id={rowData.id}
                    toggleFavor={this.props.toggleFavor}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.items}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F1F1F1',
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    items: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        padding: 10
    },
    row: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 10
    }
});

module.exports = StarList;