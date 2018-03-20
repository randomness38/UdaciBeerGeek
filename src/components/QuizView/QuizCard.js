import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import { purple, white, black } from '../../utils/colors'
import FlipAnswer from './FlipAnswer'
import {setLocalNotification, clearLocalNotification} from "../../utils/helper";

function AnswerBtn ({ onPress, opt }) {
    return (
        <TouchableOpacity
            style={styles.AnswerBtn}
            onPress={onPress}>
            <Text style={styles.AnswerBtnText}>{opt}</Text>
        </TouchableOpacity>
    )
}

class QuizCard extends Component {

    // componentDidMount() {
    //     this.getRandomOptions()
    // }
    navigateNextCard = (option) => {
        let { deckId, cardIndex, score, fail, answer } = this.props
        cardIndex++
        option === answer ? score++ : fail++
        this.props.navigation.navigate(
            'QuizCard',
            { deckId, cardIndex, score, fail }
        )
    }

    navigateCompletedView = (option) => {
        let { deckId, answer, score, fail } = this.props
        option === answer ? score++ : fail++
        this.props.navigation.navigate(
            'CompletedView',
            { deckId, score, fail }
        )
        clearLocalNotification()
            .then(setLocalNotification)
    }

    onNext = (option) => {
        let { cardIndex, finalIndex } = this.props
        cardIndex === finalIndex ? this.navigateCompletedView(option)  : this.navigateNextCard(option)
    }

    getRandomOptions(){
        let { answer, incorrectAnswers} = this.props
        let optionArray = incorrectAnswers.concat(answer)
        let randomArray = optionArray.sort( function() { return 0.5 - Math.random() } );

        return randomArray
    }

    render() {
        let { cardIndex, question, finalIndex, answer} = this.props


        let currCardNum = cardIndex + 1
        let finalCardNum =  finalIndex + 1

        return (
            <ScrollView>
            <View style={styles.container}>
                <Text
                    style={{color: purple, fontSize: 20, marginBottom: 20}}
                >
                    {currCardNum +'/' + finalCardNum }
                </Text>

                <Text  style={{color: black, fontSize: 25, textAlign: 'center'}}>{question}</Text>

                <FlipAnswer
                    answer={answer}
                    style={styles.container}
                />
                <View style={styles.btnContainer}>
                    {this.getRandomOptions().map((item , i) => {
                        return <AnswerBtn key={i} onPress={() => this.onNext(item)} opt={item}/>
                    })}
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    AnswerBtn: {
        justifyContent:'center',
        backgroundColor: purple,
        marginBottom: 20,
        padding: 20,
        borderRadius: 7,
        height: 35,
    },
    AnswerBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    btnContainer: {
        justifyContent: 'space-around'
    },

})

function mapStateToProps (state, { navigation }) {
    const { deckId, cardIndex, score, fail } = navigation.state.params

    return {
        deckId,
        cardIndex,
        score,
        fail,
        finalIndex: state[deckId].questions.length - 1,
        question: state[deckId].questions[cardIndex].question,
        answer: state[deckId].questions[cardIndex].answer,
        incorrectAnswers: state[deckId].questions[cardIndex].incorrectAnswers
    }
}



export default connect(
    mapStateToProps,
)(QuizCard)
