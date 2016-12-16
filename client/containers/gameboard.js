import React from 'react';
import {connect} from 'react-redux';
import {dispatch} from 'redux';

import GameBoard from '../components/gameboard';
import DeckCreator from '../creators/deckCreator';
import dealerCreator from '../creators/DealerCreator';
import deckCreator from '../creators/deckCreator';
import playerCreator from '../creators/PlayerCreator';
import gameCreator from '../creators/GameCreator';

function mapStateToProps(state) {
    return {
        deck: state.deckReducer.deck,
        dealerHand: state.dealerReducer.dealerHand,
        playerHand: state.playerReducer.playerHand,
        playerScore: state.gameReducer.playerScore,
        dealerScore: state.gameReducer.dealerScore,
        whosTurn: state.gameReducer.whosTurn,
        hasStarted: state.gameReducer.hasStarted,
        message: state.gameReducer.message
    };
}

function mapDispatchToProps(dispatch, props) {
	return {
		updatePlayerHand: (playerHand) => dispatch(playerCreator.updatePlayerHand({cards: playerHand})),
		updateDealerHand: (dealerHand) => dispatch(dealerCreator.updateDealerHand({cards: dealerHand})),
		updateDeck: (deck) => dispatch(deckCreator.update({deck: deck})),
		updatePlayerScore: (playerScore) => dispatch(gameCreator.updatePlayerScore({playerScore: playerScore})),
		updateDealerScore: (dealerScore) => dispatch(gameCreator.updateDealerScore({dealerScore: dealerScore})),
        updateTurn: (whosTurn) => dispatch(gameCreator.updateTurn({whosTurn: whosTurn})),
		startGame: () => dispatch(gameCreator.startGame()),
        updateMessage: (message) => dispatch(gameCreator.updateMessage({message: message})),
        resetGame: () => {
            dispatch(deckCreator.reset());
            dispatch(playerCreator.reset());
            dispatch(dealerCreator.reset());
            dispatch(gameCreator.reset());
        }
	}
}

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(GameBoard);
export default ConnectedGame;