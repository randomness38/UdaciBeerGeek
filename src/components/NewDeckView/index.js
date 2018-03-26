import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {reset} from 'redux-form';
import { purple } from '../../utils/colors'
import { receiveDecks, loadDeck } from '../../actions'
import * as api from '../../utils/api'
import NewDeckForm from "./NewDeckForm";


class NewDeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'NEW DECK'
        }
    }

    // Deck 만들고 바로 Card 로 넘어가는게 좋지 않을까합니다. 가이드는 Deck Detail 로 가라는뎁
    // navigateAddCardView(title) {
    //     this.props.navigation.navigate(
    //         'AddCardView',
    //         { deckId : title }
    //     )
    // }

    navigateDeckDetailVew(title) {
        this.props.navigation.navigate(
            'DeckDetailView',
            { deckId : title }
        )
    }

    handleSubmit = (values) => {
        const { loadDeck, reset } = this.props
        const title = values.title
        loadDeck({ [title]: {title: title, questions:[]} })
        api.saveDeckTitle(title)
        this.navigateDeckDetailVew(title)
        // this.props.reset 으로 dispatch
        reset('deckForm')
    };

    render() {
        return (
            <View style={[styles.container]}>
                <NewDeckForm onSubmit={this.handleSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white',

    },

    button: {
        padding: 10,
        backgroundColor: purple,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20,
    },

})



export default connect(
    null,
    { receiveDecks, loadDeck, reset }
)(NewDeckView)
