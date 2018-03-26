import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Toast, Button, Text } from 'native-base';
import TitleInput from './TitileInput'
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

    state = {
        title : "",
    }

    // changeInput = (value) => {
    //     this.setState(() => ({
    //         title : value
    //     }))
    // }

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

    popToast = () => {
        Toast.show({
            text: 'Your title is empty.',
            position: 'bottom',
            buttonText: 'Okay'
        })
    }
    saveTitle = () => {
        const { title } = this.state
        if (this.state.title === "" ) {
            this.popToast()
        } else {
            this.props.loadDeck({ [title]: {title: title, questions:[]} })
            api.saveDeckTitle(this.state.title)
            this.setState( () => ({ title : ""}) )
            this.navigateDeckDetailVew()
        }
    }
    handleSubmit = values => {

        console.log(values)
    };
    render() {
        return (
            <View style={[styles.container]}>
                    {/*<TitleInput*/}
                        {/*title={this.state.title}*/}
                        {/*onChange={(value) => this.changeInput(value)}/>*/}
                    {/*<Button*/}
                        {/*style={styles.button}*/}
                        {/*onPress={this.saveTitle}*/}
                    {/*>*/}
                        {/*<Text>SAVE TITLE</Text>*/}
                    {/*</Button>*/}

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
    { receiveDecks, loadDeck }
)(NewDeckView)
