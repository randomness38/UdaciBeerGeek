import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import RenderField from "../../utils/input/validate"
import { purple } from '../../utils/colors'

import validate from '../../utils/input/validate'

class NewDeckForm extends Component {


    // TODO : reInput / onChangeInput 세팅 -> Field 다운도킹
    state = {
        reInput : "",
    }

    onReChange = (text) => {
        this.setState({ ...this.state, reInput: text });
    }

    // Deck 만들고 바로 Card 로 넘어가는게 좋지 않을까합니다. 가이드는 Deck Detail 로 가라는뎁
    // navigateAddCardView() {
    //     this.props.navigation.navigate(
    //         'AddCardView',
    //         { deckId : this.state.title }
    //     )
    // }

    // navigateDeckDetailVew() {
    //     this.props.navigation.navigate(
    //         'DeckDetailView',
    //         { deckId : this.state.title }
    //     )
    // }
    // // TODO : 얘도 이제 필요없을 것 같은데 일단 냅둬영
    // popToast = () => {
    //     Toast.show({
    //         text: 'Your title is empty.',
    //         position: 'bottom',
    //         buttonText: 'Okay'
    //     })
    // }
    // saveTitle = () => {
    //     // TODO : title 아니라 ReduxForm onSubmit() 으로  values.title 가져올 것
    //     // TODO : if (submitSucceeded) { ... } 제대로 인풋 먹였을 때만 디스패치
    //
    //     // TODO :
    //     const { title } = this.state
    //     if (this.state.title === "" ) {
    //         this.popToast()
    //     } else {
    //         this.props.loadDeck({ [title]: {title: title, questions:[]} })
    //         api.saveDeckTitle(this.state.title)
    //         this.setState( () => ({ title : ""}) )
    //         this.navigateDeckDetailVew()
    //     }
    // }

    render() {
        const { onSubmit, pristine, reset, submitting } = this.props;

        return (

            <View style={[styles.container]}>
                <Field
                    name="title"
                    type="text"
                    component={RenderField}
                    label="Deck Title"
                    onReChange={(text) =>this.onReChange(text)}
                    reInput={this.state.reInput}
                />
                <Button
                    style={styles.button}
                    //TODO : 나는 여기서 saveTitle 하고 싶은데
                    // 꼭 Field 안에서 onSubmit 해야 하나?
                    // 아니면 onSubmit handleSubmit 걸고
                    // .then value => saveTitle 해도 될까?
                    onSubmit={onSubmit}
                >
                    <Button type="button" disabled={pristine || submitting} onPress={reset} title='Clear Values' />
                    <Text>SAVE TITLE</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white',

    },

    button: {
        padding: 10,
        backgroundColor: purple,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20,
    },

})



export default reduxForm({
    form: 'deckForm', // a unique identifier for this form
    validate,
})(NewDeckForm);

