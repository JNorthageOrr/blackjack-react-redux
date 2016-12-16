import {combineReducers} from 'redux';
import deckReducer from './deckReducer';
import dealerReducer from './dealerReducer';
import playerReducer from './playerReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
	deckReducer,
    dealerReducer,
    playerReducer,
    gameReducer
});

// const rootReducer = (state, action) => {
// 	if (action.type === 'RESET_GAME'){
// 		state = undefined
// 	}
// 	return appReducer(state, action)
// }
export default rootReducer;