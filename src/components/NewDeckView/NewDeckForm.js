import React, { Component } from 'react';
import {View, Text, ScrollView, TextInput, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import validate from "../../utils/input/validate";
import RenderField from "../../utils/input/RenderField";
// import RemoteSubmitButton from "../../utils/input/RemoteSubmitButton";

class NewDeckForm extends Component {
    state = {
        reInput: ""
    }
    onReChange = (text) => {
        this.setState({ ...this.state, reInput: text });
    }

    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
                <View>
                    <Field
                        name="title"
                        type="text"
                        component={RenderField}
                        label="Deck Title"
                        onReChange={(text) =>this.onReChange(text)}
                        reInput={this.state.reInput}
                    />

                    <Button type="button" onPress={handleSubmit} title='Save' />
                    <Button type="button" disabled={pristine || submitting} onPress={reset} title='Clear Values' />
                </View>
        );
    }
};

export default reduxForm({
    form: 'deckForm',
    // onSubmit: (values) => this.props.handleSubmit(values),
    validate,
})(NewDeckForm);
