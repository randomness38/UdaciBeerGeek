import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons'
import {  Button, Text } from 'native-base';
import { purple, white, black, gray, red } from '../../utils/colors'

class CompletedView extends Component {

    render() {
        const { deckId, score, fail, finalCardNum } = this.props
        console.log('score : ' + score)
        console.log('fail : ' + fail)


        return (
            <View style={styles.container}>

                <Text style={styles.mainText}>Enjoy Quizzes?</Text>

                <Text style={styles.subText}>Quiz Scored</Text>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.score}>{Math.floor( score/finalCardNum * 100 )}</Text>
                    <MaterialCommunityIcons
                        style={{margin:10}}
                        name='water-percent'
                        color={purple}
                        size={70} />
                </View>

                <View style={styles.row}>
                    <Button light
                            style={styles.scoreBtn}>
                        <Feather
                            style={{margin:10}}
                            name='minus-circle'
                            color='red'
                            size={20} />
                        <Text>{fail}</Text>
                    </Button>
                    <Button light
                            style={styles.scoreBtn}>
                        <Feather
                            style={{margin:10}}
                            name='plus-circle'
                            color='green'
                            size={20} />
                        <Text>{score}</Text>
                    </Button>
                </View>
                {/* score / finalCardNum 몇개 맞췄는지 보여주기*/}

                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => this.props.navigation.navigate(
                        // DeckDetailView 는 deckId 가 있어야 돌아가는 컴포넌트에요
                        'DeckDetailView',
                        { deckId }
                    )}
                >
                    <Text style={styles.backBtnText}
                    >
                        Back to deck
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.RestartBtn}
                    onPress={() => this.props.navigation.navigate(
                        'QuizView',
                        { deckId, cardIndex : 0, score : 0, fail : 0 }
                    )}
                >
                    <Text style={styles.restartBtnText}
                    >
                        Restart Quiz
                    </Text>
                </TouchableOpacity>
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainText: {color: black, fontSize: 30, textAlign: 'center', marginBottom:40},
    subText: {color: purple, fontSize: 20, marginBottom: 20},
    score: {color: purple, fontSize: 40},

    scoreBtn: { marginTop: 10,marginRight: 10 },

    backBtn: {
        justifyContent:'center',
        backgroundColor: purple,
        margin: 20,
        padding: 20,
        borderRadius: 7,
        height: 35,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },

    RestartBtn: {
        justifyContent:'center',
        backgroundColor: white,
        padding: 20,
        borderRadius: 7,
        height: 35,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1
    },

    backBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },

    restartBtnText: {
        color: purple,
        fontSize: 22,
        textAlign: 'center',
    },
})


function mapStateToProps ({decks}, { navigation }) {
    const { deckId, score, fail } = navigation.state.params

    return {
        finalCardNum: decks[deckId].questions.length,
        deckId,
        score,
        fail,
    }
}


export default connect(
    mapStateToProps,
)(CompletedView)
