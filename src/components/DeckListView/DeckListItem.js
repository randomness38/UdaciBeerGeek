import React from 'react'
import { View ,StyleSheet } from 'react-native'
import { purple, white ,blue } from '../../utils/colors'
import {  Button, Icon, Text } from 'native-base';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'



export default function DeckListItem ({ title, cardNum, onClear }) {
    return (
        <View style={styles.container}>
            <Text style={{color: purple, fontSize: 35}}>
                {title}
            </Text>
            <View style={styles.row}>
                <Button light
                        style={{ marginTop: 10,marginRight: 10 }}
                >
                    <MaterialCommunityIcons
                        style={{ marginLeft: 10,  justifyContent:'center' }}
                        name={'cards-variant' }
                        color = {purple}
                        size={30} />
                    <Text style={{color: purple, fontSize: 20}}>
                        {cardNum} card
                    </Text>
                </Button>
                <Button light
                        style={{ marginTop: 10,justifyContent:'center' }}
                        onPress={onClear}
                >

                    <FontAwesome
                        style={{ marginLeft: 10 }}
                        name={ 'trash-o' }
                        color = {purple}
                        size={30} />
                    <Text style={{color: purple, fontSize: 20}}>
                        Clear
                    </Text>
                </Button>
            </View>


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
