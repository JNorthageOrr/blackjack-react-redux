export default {
    updatePlayerHand(newState) {
        return {
            type: 'UPDATE_PLAYER_HAND',
            cards: newState.cards
        };
    },
    reset() {
    	return {
    		type: 'RESET_PLAYER_HAND'
    	};
    }
}