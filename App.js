import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { purple } from './src/utils/colors'
import configureStore from './src/config/configureStore'
import MainNavigator from './src/config/router'
import { Root } from "native-base";
import {setLocalNotification} from "./src/utils/helper";

const store = configureStore()


function FlashCardsStatusBar ({backgroundColor, ...props}) {
    return (
            <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
                <StatusBar translucent backgroundColor={backgroundColor} {...props} />
            </View>
    )
}

export default class App extends React.Component {

    componentDidMount() {
        setLocalNotification()
    }


    render() {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <FlashCardsStatusBar backgroundColor={purple} barStyle="light-content" />
                <Root>
                    <MainNavigator />
                </Root>
            </View>
        </Provider>
    );
  }
}

