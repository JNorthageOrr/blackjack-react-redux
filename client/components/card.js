import React from 'react';
import {render} from 'react-dom';

export default React.createClass({
   componentDidMount() {
       require('../css/blackjack.scss');
	     require('../css/card.scss');
   },
   render() {
   		let {value, suit, id} = this.props;
  
      return (
  			<svg className="card" viewBox="0 0 410 580">
  				<use xlinkHref={"./images/deck.svg#" + id}></use>
  			</svg>
      );
    }
});
