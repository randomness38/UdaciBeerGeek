import React from 'react';
import {View, Text, ScrollView, TextInput, Button } from 'react-native'


export default RenderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <View>
            <Text style={{fontSize:20}}>{label}</Text>
            <TextInput style={{fontSize:20}} {...input} type={type} placeholder={label} />
            {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    )
}
