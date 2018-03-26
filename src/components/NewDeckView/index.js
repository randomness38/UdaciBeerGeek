import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple } from '../../utils/colors'
import { loadDeck } from '../../actions'
import * as api from '../../utils/api'
import NewDeckForm from './NewDeckForm'

class NewDeckView extends Component {


    // Deck 만들고 바로 Card 로 넘어가는게 좋지 않을까합니다. 가이드는 Deck Detail 로 가라는뎁
    // navigateAddCardView() {
    //     this.props.navigation.navigate(
    //         'AddCardView',
    //         { deckId : this.state.title }
    //     )
    // }

    navigateDeckDetailVew() {
        this.props.navigation.navigate(
            'DeckDetailView',
            { deckId : this.state.title }
        )
    }

    saveTitle = (values) => {
        const { submitSucceeded } = this.props;
        // *TODO : title 아니라 ReduxForm onSubmit() 으로  values.title 가져올 것
        // *TODO : if (submitSucceeded) { ... } 제대로 인풋 먹였을 때만 디스패치

        if (submitSucceeded) {
            const title = values.title
            this.props.loadDeck({ [title]: {title: title, questions:[]} })
            api.saveDeckTitle(title)
            this.navigateDeckDetailVew()
        }


    }

    render() {
        return (

            <View style={[styles.container]}>
                <NewDeckForm onSubmit={this.saveTitle}/>
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
    { loadDeck  }
)(NewDeckView)
