const initialState = {
    dealerHand: []
};

export default function dealerReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DEALER_HAND':
            let newCards = action.cards,
                newHand = _.clone(state.dealerHand);

                newCards.forEach((card) => {
                    newHand.push(card);
                });

            return Object.assign({}, state, {
                dealerHand: newHand
            });
        case 'RESET_DEALER_HAND':
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}
