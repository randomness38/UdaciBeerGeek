import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { purple, white, black } from '../../utils/colors'


function QuizControl ({ onPress, name }) {
    return (
        <View>
            <TouchableOpacity
                style={ styles.startQuizBtn }
                onPress={onPress}>
                <Text style={styles.BtnText}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startQuizBtn: {
        marginTop: 10,
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
    AddCardBtn: {
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})

export default QuizControl
