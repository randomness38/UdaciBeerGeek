import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import { loadCard } from "../../actions/index";
import {reset} from 'redux-form';
import { addCardToDeck} from "../../utils/api";
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons'
import AddCardForm from "./AddCardForm";

class AddCardView extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'NEW CARD'
        }
    }

    handleSubmit = (values) => {
        console.log(values)
        const { loadCard, reset, deckId } = this.props
            loadCard(deckId,values);
            addCardToDeck(deckId, values);
            reset('deckForm');
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formContainer}>

                        <AddCardForm onSubmit={this.handleSubmit} />

                        {/*NewDeckView -> AddCardView 로 이동할 때 */}
                        {/*<Button*/}
                        {/*block light*/}
                        {/*onPress={() => this.props.navigation.navigate(*/}
                        {/*'DeckDetailView',*/}
                        {/*{ deckId }*/}
                        {/*)}>*/}
                        {/*<Text>BACK TO DECK</Text>*/}
                        {/*</Button>*/}

                        {/* NewDeckView -> DeckDetailView 로 이동할 때 */}
                        <Button
                            block light
                            onPress={() =>
                                this.props.navigation.dispatch(NavigationActions.back())
                            }>
                            <Text>GO HOME</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    item: {
        flex: 1,
        alignItems: 'center',

    },
    formContainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
})


// navigation 쓰려면 state return 안해도 넣어줘야 함니둥 **
function mapStateToProps ( state, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId : deckId
    }
}


export default connect(
    mapStateToProps,
    { loadCard, reset }
)(AddCardView)
