import * as api from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const GET_DECK = 'GET_DECK'
export const LOAD_DECK = 'LOAD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const LOAD_CARD = 'LOAD_CARD'
export const CLEAR_DECKS = 'CLEAR_DECKS'

export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export const loadDeck = (deck) => {
    return {
        type: LOAD_DECK,
        deck
    }
};


export const removeDeck = (deckId) => (dispatch) => {
    return api.removeDeck(deckId)
        .then(() => dispatch({
            type: REMOVE_DECK,
            deckId
        }))
}


export const clearAllDecks = () => (dispatch) => {
    return api.clearDecks()
        .then(() => dispatch({
            type: CLEAR_DECKS,
        }))
}


export const loadCard = (deckId, card,) => {
    return {
        type: LOAD_CARD,
        deckId,
        card,

    }
};


// 이 구조 왜 안먹히는지 이해 좀...????? 지금은 되려나?
