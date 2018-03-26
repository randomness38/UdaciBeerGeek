import React from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'


// <MaterialCommunityIcons
// style={{ marginLeft: 10,  justifyContent:'center' }}
// name={'radio-button-checked' }
// color = {purple}
// size={30} />

export default RenderField = ({ reInput, onReChange,
                                  input,
                                  label,
                                  meta: {valid, touched, error, dirty }}) => {

    return (
        <View>

            <Item style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/*<Label>{label}</Label>*/}

                <TextInput
                    style={{fontSize:20, height:30}}
                    value={reInput || (dirty?undefined : input.value)}
                    onChangeText={onReChange}
                    placeholder={label}
                    onSubmitEditing={Keyboard.dismiss}
                    {...input}
                />
                <MaterialIcons
                    style={{ marginLeft: 10,  justifyContent:'center' }}
                    // name={'radio-button-checked' }
                    name={ valid? 'radio-button-checked' : 'radio-button-unchecked' }
                    color = { valid? 'green' : 'red' }
                    size={20} />
                {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
            </Item>

        </View>
    )

}
