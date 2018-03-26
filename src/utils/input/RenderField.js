import React from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'



export default RenderField = ({ reInput, onReChange, input, label, meta: { touched, error, dirty } }) => {

        return (
            <View>
                <Text style={{fontSize:20}}>{label}</Text>
                <TextInput
                    style={{fontSize:20, height:30}}
                    value={reInput || (dirty?undefined : input.value)}
                    onChangeText={onReChange}
                    placeholder={label}
                    onSubmitEditing={Keyboard.dismiss}
                    {...input}
                />
                {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
            </View>
        )

}
