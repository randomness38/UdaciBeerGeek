import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Text, TouchableOpacity } from 'react-native';
import {DECK_FORM} from "./FormNames";

const RemoteSubmitButton = ({ dispatch }) => {
    return (
        <TouchableOpacity style={{backgroundColor:'blue'}} onPress={ () => dispatch(submit(DECK_FORM)) }>
            <Text style={{ color: 'white', textAlign:'center', fontSize:20 }}>Submit</Text>
        </TouchableOpacity>
    );
};

export default connect()(RemoteSubmitButton);
