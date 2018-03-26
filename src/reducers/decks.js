import * as actions from '../actions'


export default function decks (state = {}, action) {
    switch (action.type) {
        case actions.RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks,
            }
        case actions.CLEAR_DECKS :
            return {
                state : undefined
            }
        case actions.LOAD_DECK :
            return {
                ...state,
                ...action.deck
            }
        case actions.REMOVE_DECK :
            return {
                ...state,
                [action.deckId] : undefined
            }
        case actions.LOAD_CARD :
            return {
                ...state,
                [action.deckId] : {
                    ...state[action.deckId] ,
                    questions : [
                        ...state[action.deckId].questions,
                        action.card
                    ]
                }
            }
        default :
            return state
    }
}

