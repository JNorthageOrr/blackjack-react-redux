export default {
    updateDealerHand(newState) {
        return {
            type: 'UPDATE_DEALER_HAND',
            cards: newState.cards
        };
    },
    reset() {
    	return {
    		type: 'RESET_DEALER_HAND'
    	}
    }
}