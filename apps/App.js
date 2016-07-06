'use strict';

import React, {
    Navigator,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import StarList from './components/StarList'
import StarDetail from './components/StarDetail'
import AddStarButton from './components/AddStarButton'
import RemoveStarsButton from './components/RemoveStarsButton'
import {
    addStar,
    removeStar,
    removeAllSelectedStars,
    onEditName,
    selectStar,
    toggleFavor,
    exitDetail,
    readDetail,
} from './Actions'

const navigationBarRouteMapper = {

    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => {
                    route.exit();
                    navigator.pop()
                }}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    &laquo; {(index === 1)  ? 'Result' : 'Back'}
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return null;
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.routeTitle}
            </Text>
        );
    }

};

class MainPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <AddStarButton
                    stars={this.props.reducers.stars}
                    addStar={this.props.addStar}/>
                <RemoveStarsButton
                    stars={this.props.reducers.stars}
                    removeAllSelectedStars={this.props.removeAllSelectedStars}/>
                <StarList
                    stars={this.props.reducers.stars}
                    onEditName={this.props.onEditName}
                    removeStar={this.props.removeStar}
                    toggleFavor={this.props.toggleFavor}
                    selectStar={this.props.selectStar}
                    navigator={this.props.navigator}
                    readDetail={this.props.readDetail}
                    exitDetail={this.props.exitDetail}
                />
            </View>
        )
    }
}

class App extends React.Component{

    navigatorRenderScene(route, navigator) {
        switch (route.routeTitle) {
            case 'Main':
                return (<MainPage
                    navigator={navigator}
                    reducers={this.props.reducers}
                    addStar={this.props.addStar}
                    removeAllSelectedStars={this.props.removeAllSelectedStars}
                    onEditName={this.props.onEditName}
                    removeStar={this.props.removeStar}
                    toggleFavor={this.props.toggleFavor}
                    selectStar={this.props.selectStar}
                    readDetail={this.props.readDetail}
                    exitDetail={this.props.exitDetail}
                />);
            case 'Detail':
                return (<StarDetail
                    navigator={navigator}
                    stars={this.props.reducers.stars}
                    id={this.props.reducers.currentStar.id}
                    name={this.props.reducers.currentStar.name}
                    selected={this.props.reducers.currentStar.selected}
                    favor={this.props.reducers.currentStar.favor}
                    onEditName={this.props.onEditName}
                    removeStar={this.props.removeStar}
                    toggleFavor={this.props.toggleFavor}
                    selectStar={this.props.selectStar}
                />);
        }
    }

    render() {
        var me = this;
        return (
            <Navigator
                initialRoute={{
                    routeTitle: this.props.reducers.routeTitle,
                    component: MainPage
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={navigationBarRouteMapper}
                    />
                }
                renderScene={this.navigatorRenderScene.bind(this)}
            />
        );
    }
}

const stateToProps = (state) => {
    return {
        reducers: state.reducers
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        addStar,
        removeStar,
        removeAllSelectedStars,
        onEditName,
        selectStar,
        toggleFavor,
        exitDetail,
        readDetail
    }, dispatch)
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        justifyContent: 'center'
    },
    navBar: {
        backgroundColor: 'white'
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10
    },
    navBarTitleText: {
        fontWeight: '500',
        marginVertical: 9
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    scene: {
        flex: 1,
        paddingTop: 63
    }
});

export default connect(stateToProps, dispatchToProps)(App)