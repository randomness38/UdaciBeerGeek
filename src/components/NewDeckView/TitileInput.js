import React from 'react'
import { StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Form, Item, Input, Icon } from 'native-base';
import { purple, white,gray } from '../../utils/colors'

export default function TitleInput ({ title, onChange }) {

    return (
            <Form>
                <Item>
                    <Input
                    placeholder="New Deck Title"
                    onChangeText={onChange}
                    title={title}
                    />
                    <MaterialIcons
                        style={{margin:10}}
                        name={title === "" ? 'radio-button-unchecked' : 'radio-button-checked' }
                        color = {title === "" ? 'red' : 'green'}
                        size={20} />
                </Item>
            </Form>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    row: {
        flex: 1,
        // alignItems: 'center',
    },
    formLabel: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formInput: {
        backgroundColor: gray,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 60,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },

})
