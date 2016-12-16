import React from 'react';
import Menu from './menu';
import Score from './score';
import Hand from './hand';
import Deck from './deck';
import Message from './message';

function hit(deck, whosTurn) {
    const { updatePlayerHand, updateDealerHand, updateDeck } = this.props;
    let newDeck = _.clone(deck),
    newCard = newDeck.pop(),
    playerHand = [],
    dealerHand = [];

    if(whosTurn == "player"){
        playerHand.push(newCard);
        updatePlayerHand(playerHand);        
    }else{
        dealerHand.push(newCard);
        updateDealerHand(dealerHand);                
    }

    updateDeck(newDeck);
}

function initialDraw() {
    const { deck, startGame, updatePlayerHand, updateMessage,
        updateDealerHand, updateDeck, updatePlayerScore, updateDealerScore } = this.props;

    let playerHand = [],
        dealerHand = [], 
        playerScore = 0,
        dealerScore = 0,
        newDeck = _.clone(deck);

    for(let i = 0; i < 2; i++) {
        playerHand.push(newDeck.pop());
        dealerHand.push(newDeck.pop());
        playerScore += playerHand[i].value;
        dealerScore += dealerHand[i].value;
    }

    startGame();
    updatePlayerHand(playerHand);
    updateDealerHand(dealerHand);
    updatePlayerScore(playerScore);
    updateDealerScore(dealerScore);
    updateDeck(newDeck);
    updateMessage('Hit or Stay?');
    
       
}

function CalculateScore(cards){
    let hand = _.clone(cards) || [],
        sum = 0,
        alt = 0;
    hand.sort( (a, b) => {
        return a.value - b.value
    })

    hand.forEach(card => {
        if (!(card.name === 'Ace')){
            sum += card.value;      
        }else {
            let temp = sum + 11;
            if (temp > 21){
                alt = 0;
                hand.forEach(card => {
                    if (card.name === 'Ace'){
                        alt += 1;
                    }else {
                        alt += card.value;
                    }
                })
            }else {
                sum += 11;
        }}            
    });
    if (alt > 0) {
        return alt
    } else {
        return sum;
    }
}

function calculateWinner(props, dispatch){
    let winner;
    if ((props.playerScore > props.dealerScore) && (props.playerScore < 22)){
        winner = 'Player Wins!';
    } else if ((props.dealerScore > props.playerScore) && (props.dealerScore < 22)){
        winner = 'Dealer Wins!';
    } else if ((props.dealerScore === props.playerScore) && (props.dealerScore < 22)){
        winner = 'Tie Game';
    } else {
        winner = 'You Busted!'
    }
    console.log(winner);
    props.updateMessage(winner)
}

function bustCondition(score, player, props){
    let thisScore = score;
    if (thisScore > 21){
        let message = "Busted!"
        console.log(player + " " + message)
        props.updateTurn('dealer')
    }
}

function stay(whosTurn, props, dispatch){
    if (whosTurn === 'player') {
        this.props.updateTurn('dealer');
    }else {
        calculateWinner(props);
    }
}

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        hit = hit.bind(this);
        initialDraw = initialDraw.bind(this);
    }
    componentDidMount() {
        require('../css/blackjack.scss')
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.whosTurn === 'player') {
            let playerScore = CalculateScore(nextProps.playerHand);
            let dealerScore = CalculateScore(nextProps.dealerHand);

            nextProps.updatePlayerScore(playerScore);
            bustCondition(playerScore, "player", this.props);
        } else if (nextProps.whosTurn === 'dealer') {
            let dealerScore = CalculateScore(nextProps.dealerHand);
            
            bustCondition(dealerScore, "dealer", this.props);
            nextProps.updateDealerScore(dealerScore);
            if (dealerScore < 17) {
                hit(nextProps.deck, 'dealer');
            }else if (dealerScore >= 17) {
                stay(nextProps.whosTurn, nextProps);    
            }
            
        }
    }

    render() {
        let {deck, dispatch, dealerHand, message, resetGame,
            playerHand, playerScore, dealerScore, whosTurn, hasStarted, resetHandler} = this.props,
            dealHandler = initialDraw,
            hitHandler = hit,
            stayHandler = stay;
        const imgUrl = './images/table.png';
        const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden'
        };

        return(
            <section id="game-container" style={divStyle}>
                <Score label="Dealer Score" score={dealerScore}/>
                <Score label="Player Score" score={playerScore}/>
                <section id="game-board">
                    <section id="dealer-space">
                        <Hand
                            cards={dealerHand}
                        />
                    </section>

                    <section id="center-board">
                    </section>

                    <section id="player-space">
                        <Hand
                            cards={playerHand}
                        />
                    </section>
                <div className="aligner">
                    <Menu
                        hasStarted={hasStarted}
                        dealHandler={dealHandler}
                        hitHandler={hitHandler}
                        stayHandler={stayHandler.bind(this, whosTurn, this.props, dispatch)}
                        deck={deck}
                        whosTurn={this.props.whosTurn}
                        dispatch={dispatch}
                        resetHandler={resetGame}
                    />
                    <Message
                        message={message}
                    />
                </div>
                </section>
            </section>
        );
    }
}
