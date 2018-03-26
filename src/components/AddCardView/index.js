// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation'
// import { loadCard } from "../../actions/index";
// import { addCardToDeck} from "../../utils/api";
// import t from 'tcomb-form-native';
// import { ScrollView, View, StyleSheet } from 'react-native'
// import { Toast, Button, Text, Header, Title, Left, Right, Body} from 'native-base';
// import { Entypo } from '@expo/vector-icons'
//
//
// class AddCardView extends Component {
//
//     static navigationOptions = ({ navigation }) => {
//         return {
//             title: 'NEW CARD'
//         }
//     }
//
//
//     // TODO: this.state reInput
//     // TODO: onChangeInput
//
//     handleSubmit = () => {
//         const { deckId } = this.props;
//         // TODO : title 아니라 ReduxForm onSubmit() 으로  values.title 가져올 것
//         // TODO : if (submitSucceeded) { ... } 제대로 인풋 먹였을 때만 디스패치
//
//         const value = this._form.getValue();
//
//         if (value) {
//             this.props.loadCard(deckId,value);
//             addCardToDeck(deckId, value);
//             this.clearForm();
//             Toast.show({
//                 text: ' The card has been saved successfully',
//                 position: 'bottom',
//                 buttonText: 'Okay'
//             })
//         }
//     }
//
//
//     render() {
//         // TODO: redux-form props 때려넣기 , Field 도킹 잊지마아
//         const { deckId } = this.props
//
//         return (
//             <ScrollView>
//                 <View style={styles.container}>
//                     <View style={styles.formContainer}>
//                         TODO: {/* Q/A Field */}
//
//                         TODO: {/* Opts Array Field */}
//
//                         TODO: {/* RemoteSubmit 으로 대체?? 응 아니 생각 좀..*/}
//                         <Button block
//                                 onPress={this.handleSubmit}>
//                             <Text>SAVE</Text>
//                         </Button>
//
//                         {/* NewDeckView -> AddCardView 로 이동할 때 */}
//                         {/*<Button*/}
//                         {/*block light*/}
//                         {/*onPress={() => this.props.navigation.navigate(*/}
//                         {/*'DeckDetailView',*/}
//                         {/*{ deckId }*/}
//                         {/*)}>*/}
//                         {/*<Text>BACK TO DECK</Text>*/}
//                         {/*</Button>*/}
//
//                         {/* NewDeckView -> DeckDetailView 로 이동할 때 */}
//                         <Button
//                             block light
//                             onPress={() =>
//                                 this.props.navigation.dispatch(NavigationActions.back())
//                             }>
//                             <Text>GO HOME</Text>
//                         </Button>
//                     </View>
//                 </View>
//             </ScrollView>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: 'white',
//     },
//     item: {
//         flex: 1,
//         alignItems: 'center',
//
//     },
//     formContainer: {
//         flex:1,
//         justifyContent: 'center',
//         backgroundColor: '#ffffff',
//     },
// })
//
//
// function mapStateToProps ( state, { navigation }) {
//     const { deckId } = navigation.state.params
//
//     return {
//         // deck : state.decks[deckId],
//         deckId : deckId
//     }
// }
//
//
// export default connect(
//     mapStateToProps,
//     { loadCard }
// )(AddCardView)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import { loadCard } from "../../actions/index";
import { addCardToDeck} from "../../utils/api";
import t from 'tcomb-form-native';
import { ScrollView, View, StyleSheet } from 'react-native'
import { Toast, Button, Text, Header, Title, Left, Right, Body} from 'native-base';
import { Entypo } from '@expo/vector-icons'


const Form = t.form.Form;


const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            marginBottom: 10,
        },
    },
    controlLabel: {
        normal: {
            color: '#292477',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        alignSelf: "center"
    },
    button: {
        height: 40,
        backgroundColor: '#292477',
        borderColor: '#4e4cb8',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: "stretch",
        justifyContent: "center"
    }
}


const objectiveItem = t.String

const Card = t.struct({
    question: t.String,
    answer: t.String,
    opts: t.list(objectiveItem)
});

const options = {
    fields: {
        question: {
            label: 'Question',
            placeholder: 'enter your question'
        },
        answer: {
            label: 'Answer',
            placeholder: 'enter your answer'
        },
        opts: {
            item: {
                label: 'Incorrect Item',
                placeholder: 'incorrect answer'
            }
        },
    },
    stylesheet: formStyles,
}

class AddCardView extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'NEW CARD'
        }
    }
    //
    // getInitialState() {
    //     return { value: null };
    // }
    //
    // onChange(value) {
    //     this.setState({ value });
    // }

    clearForm() {
        this.setState({ value: null });
    }

    handleSubmit = () => {
        const { deckId } = this.props;
        const value = this._form.getValue();

        if (value) {
            this.props.loadCard(deckId,value);
            addCardToDeck(deckId, value);
            this.clearForm();
            Toast.show({
                text: ' The card has been saved successfully',
                position: 'bottom',
                buttonText: 'Okay'
            })
        }
    }


    render() {
        const { deckId } = this.props

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Form
                            ref={c => this._form = c}
                            type={Card}
                            options={options}

                        />

                        <Button block
                                onPress={this.handleSubmit}>
                            <Text>SAVE</Text>
                        </Button>

                        {/* NewDeckView -> AddCardView 로 이동할 때 */}
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


function mapStateToProps ( state, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        // deck : state.decks[deckId],
        deckId : deckId
    }
}


export default connect(
    mapStateToProps,
    { loadCard }
)(AddCardView)
