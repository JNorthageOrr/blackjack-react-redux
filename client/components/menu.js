import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.deal = this.deal.bind(this);
    }

    componentDidMount() {
        require('../css/menu.scss');
    }
    
    deal(){
        const {deck, dispatch, dealHandler} = this.props;
        dealHandler(deck, dispatch);
    }

    renderDealButton(props) {
        let button;

        if (props.hasStarted) {
            button = (<button id='dealButton'
                        onClick = {props.resetHandler}>Reset Game</button>);
        } else {
            button = (<button id='dealButton'
                        onClick = {this.deal}>Deal Cards</button>);
        }

            return button;
    }

    render() {
    	let {dealHandler, hitHandler, stayHandler, deck, dispatch, whosTurn, hasStarted} = this.props;
        let disabled = whosTurn === 'player' && hasStarted ? false : true;

        return (
            <div id='Menu'>
            	{this.renderDealButton(this.props)}
                <button disabled={disabled} id='hitButton'
                    onClick = {hitHandler.bind(this, deck, whosTurn, dispatch)}>Hit</button>
                <button disabled={disabled} id='stayButton'
                    onClick = {stayHandler}>Stay</button>
            </div>
        );
    }
}