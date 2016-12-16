import cards from "../constants/cards";
import _ from 'lodash';

const deck = _.shuffle(cards);

const initialState = {
    deck: deck
};

export default function deckReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DECK':
            return Object.assign({}, state, {
                deck: action.deck
            });
        case 'RESET_DECK':
        	return Object.assign({}, state, {
        		deck: _.shuffle(cards)
        	});
        default:
            return state;
    }
}