export default {
    update(state) {
        return {
            type: 'UPDATE_DECK',
            deck: state.deck
        };
    },
    reset() {
    	return {
    		type: 'RESET_DECK'
    	}
    }
}