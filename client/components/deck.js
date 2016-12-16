import React from 'react';

export default React.createClass({
    componentDidMount() {
        require('../css/deck.scss');
    },
    render() {
        let {deck, dispatch, hitHandler} = this.props;

        return (
            <button onClick={hitHandler.bind(this, deck, dispatch)}>
                <svg id="deck">
                    <rect width="706" height="1000" style={{fill:"rgb(0,0,255)", strokeWidth:3, stroke:"rgb(0,0,0)"}} />
                </svg>
            </button>
        );
    }
});
