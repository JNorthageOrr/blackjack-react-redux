const initialState = {
    playerScore: 0,
    dealerScore: 0,
    whosTurn: "player",
    hasStarted: false,
    message: "Let's Play!"
};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_PLAYER_SCORE':
            let newPlayerScore = action.playerScore;

            return Object.assign({}, state, {
                playerScore: newPlayerScore
            });
        case 'UPDATE_DEALER_SCORE':
            let newDealerScore = action.dealerScore;

            return Object.assign({}, state, {
                dealerScore: newDealerScore
            });
        case 'UPDATE_TURN':
            return Object.assign({}, state, {
                whosTurn: action.whosTurn
            });
        case 'START_GAME':
            return Object.assign({}, state, {
                hasStarted: action.hasStarted
            });
        case 'UPDATE_MESSAGE':
            return Object.assign({}, state, {
                message: action.message
            });
        case 'RESET_GAME':
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}

