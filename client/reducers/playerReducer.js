const initialState = {
    playerHand: []
};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_PLAYER_HAND':
            let newCards = action.cards,
                newHand = _.clone(state.playerHand);

                newCards.forEach((card) => {
                    newHand.push(card);
                });

            return Object.assign({}, state, {
                playerHand: newHand
            });
        case 'RESET_PLAYER_HAND':
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}