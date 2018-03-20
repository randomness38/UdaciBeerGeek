import React from 'react'
import { View ,StyleSheet } from 'react-native'
import { purple, white ,blue } from '../../utils/colors'
import {  Button, Icon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons'




export default function NoDeckView ({ }) {
    return (
        <View style={styles.center}>
            <Ionicons
                style={{ marginLeft: 10 }}
                name={ 'ios-beer-outline' }
                color = {purple}
                size={60} />
            <Text>CREATE NEW BEER DECK 🍻</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },

})
