import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { fetchDeckResults, clearDecks } from '../../utils/api'
import { receiveDecks, removeDeck, clearAllDecks } from '../../actions'
import DeckListItem from './DeckListItem'
import { white, purple} from "../../utils/colors";
import {  Button, Text } from 'native-base';
import NoDeckView from "./NoDeckView";
import { AppLoading} from 'expo'

class DeckListView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'LIST'
        }
    }

    state = {
        noDeck : false,
        ready: false,
    }

    componentDidMount () {
        this.fetchData()
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.decks !== prevProps.decks) {
    //         this.fetchData()
    //     }
    // }


    fetchData = () =>{
        const { receiveDecks } = this.props

        fetchDeckResults()
            .then((decks) => receiveDecks(decks))
            .then(() => this.setState(() => ({ready: true})))
    }



    render() {
        const { decks, removeDeck,clearAllDecks } = this.props

        const { ready } = this.state
        if (ready === false) {
            return <AppLoading />
        }

        if (this.state.noDeck) {
            return <NoDeckView />
        }
        return (
            <ScrollView>
                {/*deckId = key*/}
                {Object.keys(decks).map((key) => {
                    if (decks[key] !== undefined) {
                        const cardNum = decks[key].questions.length

                        return (
                            <View key={key} style={styles.container}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate(
                                        'DeckDetailView',
                                        { deckId: key }
                                    )}
                                >
                                    <DeckListItem
                                        onClear={() => removeDeck(key)}
                                        title={key}
                                        cardNum={cardNum}/>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                })}
                <View >
                    <Button
                        onPress={() => clearAllDecks().then(()=> this.setState({noDeck:true}))}
                        transparent danger
                    >
                        <Text >All Deck Clear</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        marginTop: 20,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',

    },
    item: {
        height: 20,
        // width: 30,
    },clearBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 30,
        // marginRight: 30,
    },

})

function mapStateToProps (decks) {
    return {
        decks
    }
}
export default connect(
    mapStateToProps,
    { receiveDecks, removeDeck, clearAllDecks }
)(DeckListView)
