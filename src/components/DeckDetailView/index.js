import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import DeckListItem from '../DeckListView/DeckListItem'
import QuizControl from './QuizControl'
class DeckDetailView extends Component {

    // APP UI title bar 설정이에요 !
    static navigationOptions = ({ navigation }) => {
        const { deckId } = navigation.state.params

        return {
            title: `${deckId}`
        }
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.deck !== null && nextProps.deck !== undefined
    }

    render() {
        const { deck, deckId } = this.props
        const cardIndex = 0;
        const score = 0;
        const fail = 0;
        return (
            <View style={styles.container}>
                <DeckListItem title={deckId} cardNum={deck.questions.length}/>
                {/*<DeckListItem title={deckId} />*/}
                <QuizControl
                    name={'START QUIZ'}
                    onPress={() => this.props.navigation.navigate(
                        'QuizView',
                        { deckId, cardIndex, score, fail }
                    )}
                />
                <QuizControl
                    name={'ADD CARD'}
                    onPress={() => this.props.navigation.navigate(
                        'AddCardView',
                        { deck, deckId }
                    )}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function mapStateToProps (state, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId,
        deck: state[deckId],
    }
}


export default connect(
    mapStateToProps,
)(DeckDetailView)
