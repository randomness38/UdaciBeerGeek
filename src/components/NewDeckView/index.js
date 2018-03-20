import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Form, Toast, Item,  Input, Button, Text } from 'native-base';
import TitleInput from './TitileInput'
import { purple, black } from '../../utils/colors'
import { receiveDecks, loadDeck } from '../../actions'
import * as api from '../../utils/api'

class NewDeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'NEW DECK'
        }
    }

    state = {
        title : "",
    }

    changeInput = (value) => {
        this.setState(() => ({
            title : value
        }))
    }

    navigateAddCardView() {
        this.props.navigation.navigate(
            'AddCardView',
            { deckId : this.state.title }
        )
    }

    // toHome = () => {
    //     this.props.navigation.dispatch(NavigationActions.back({key: 'DeckListView'}))
    // }

    popToast = () => {
        Toast.show({
            text: 'Your title is empty.',
            position: 'bottom',
            buttonText: 'Okay'
        })
    }
    saveTitle = () => {
        const { title } = this.state
        // const deck = {title: title, questions:[]}
        // 이것도 ...state, [title] : deck 이렇게 concat 하는 reducer 구조지
        if (this.state.title === "" ) {
            this.popToast()
        } else {
            this.props.loadDeck({ [title]: {title: title, questions:[]} })
            api.saveDeckTitle(this.state.title)
            this.setState( () => ({ title : ""}) )
            this.navigateAddCardView()
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                    <TitleInput
                        title={this.state.title}
                        onChange={(value) => this.changeInput(value)}/>
                    <Button
                        style={styles.button}
                        onPress={this.saveTitle}
                    >
                        <Text>SAVE TITLE</Text>
                    </Button>
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



// function mapStateToProps (state) {
//
//     return {
//         decks: state.decks
//     }
// }
//
//
//
// export default connect(
//     mapStateToProps,
//     { receiveDecks, loadDeck }
// )(NewDeckView)

