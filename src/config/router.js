import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white } from '../utils/colors'
import NewDeckView from '../components/NewDeckView'
import DeckListView from '../components/DeckListView'
import AddCardView from '../components/AddCardView'
import DeckDetailView from '../components/DeckDetailView'
import QuizCard from '../components/QuizView/QuizCard'
import CompletedView from '../components/QuizView/CompletedView'
import AnswerCard from '../components/QuizView/AnswerCard'

const DeckListStack = StackNavigator({
    DeckListView: {
        screen: DeckListView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    DeckDetailView: {
        screen: DeckDetailView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    // AddCardView:{
    //     screen: AddCardView,
    //     navigationOptions: {
    //         header: null,
    //         // mode: 'modal',
    //     }
    // },
})

const NewDeckStack = StackNavigator({
    NewDeckView:{
        screen: NewDeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        },
    },
    // AddCardView:{
    //     screen: AddCardView,
    //     navigationOptions: {
    //         header: null,
    //         mode: 'modal',
    //     }
    // },
})

const AddCardViewStack = StackNavigator({
    AddCardView:{
        screen: AddCardView,
        // navigationOptions: {
        //     headerTintColor: white,
        //     headerStyle: {
        //         backgroundColor: purple,
        //     }
        // }
    }
})
const QuizViewStack = StackNavigator({
    QuizCard:{
        screen: QuizCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    AnswerCard:{
        screen: AnswerCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    CompletedView:{
        screen: CompletedView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
})

const Tabs = TabNavigator({
    DeckListView: {
        screen: DeckListStack,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        },
    },
    NewDeckView: {
        screen: NewDeckStack,
        navigationOptions: {
            tabBarLabel: 'NEW DECKS',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

export default MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    QuizView: {
        screen: QuizViewStack,
    },
    AddCardView: {
        screen: AddCardViewStack,
    }
}, {
    mode: 'modal',
    headerMode: 'none',
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
