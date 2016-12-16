import React from 'react';
import {render} from 'react-dom';
import Card from './card';

function renderCards(cards) {
    if (cards) {
        return cards.map((card) => {
            return (
                <Card
                    name={card.name}
                    value={card.value}
                    suit={card.suit}
                    id={card.id}
                    key={card.id}
                />
            );
        });
    }
}

export default React.createClass({
    componentDidMount() {
        require('../css/hand.scss');
    },
    render() {
        let cards = this.props.cards;

        return (
            <div className="hand">
                {renderCards(cards)}
            </div>
        );
    }
});
