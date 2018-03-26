import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import decks from './decks'

export default combineReducers({
    decks,
    form: formReducer
});
