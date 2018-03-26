import React, { Component } from 'react';
import {View, Text, ScrollView, TextInput, Button } from 'react-native'
import { Field, FieldArray, reduxForm } from 'redux-form';
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
    // saveTitle = () => {
    //     this.props.handleSubmit()
    //     // this.props.reset()
    // }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <ScrollView>
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

                {/*<View>*/}

                    {/*<Field*/}
                        {/*name={`question`}*/}
                        {/*type="text"*/}
                        {/*component={RenderField}*/}
                        {/*label="Question"*/}
                        {/*onReChange={(text) =>this.onReChange(text)}*/}
                        {/*reInput={this.state.reInput}*/}
                    {/*/>*/}

                    {/*<Field*/}
                        {/*name={`answer`}*/}
                        {/*type="text"*/}
                        {/*component={RenderField}*/}
                        {/*label="Answer"*/}
                        {/*onReChange={(text) =>this.onReChange(text)}*/}
                        {/*reInput={this.state.reInput}*/}
                    {/*/>*/}

                    {/*<FieldArray*/}
                        {/*name={`opts`}*/}
                        {/*component={RenderOpts}*/}
                        {/*onReChange={(text) =>this.onReChange(text)}*/}
                        {/*reInput={this.state.reInput}*/}
                    {/*/>*/}

                    {/*<View>*/}
                        {/*<RemoteSubmitButton/>*/}
                        {/*<Button type="button" disabled={pristine || submitting} onPress={reset} title='Clear Values' />*/}
                    {/*</View>*/}
                {/*</View>*/}


            </ScrollView>
        );
    }
};

export default reduxForm({
    form: 'deckForm', // a unique identifier for this form
    // onSubmit: (values) => this.props.handleSubmit(values),
    validate,
})(NewDeckForm);
