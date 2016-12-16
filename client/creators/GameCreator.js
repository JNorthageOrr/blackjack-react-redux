export default {
    updatePlayerScore(newState) {
   		return {
       		type: 'UPDATE_PLAYER_SCORE',
			playerScore: newState.playerScore
        }
	},
	updateDealerScore(newState) {
		return {
			type: 'UPDATE_DEALER_SCORE',
			dealerScore: newState.dealerScore
		}
	},
	updateTurn(newState) {
		return {
			type: 'UPDATE_TURN',
			whosTurn: newState.whosTurn
		}
	},
	startGame(newState) {
		return {
			type: 'START_GAME',
			hasStarted: true
		}
	},
	updateMessage(newState) {
		return {
			type: 'UPDATE_MESSAGE',
			message: newState.message
		}
	},
	reset(newState) {
		return {
			type: 'RESET_GAME'
		}
	}
}
