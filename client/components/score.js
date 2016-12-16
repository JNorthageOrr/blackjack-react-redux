import React from 'react';
import {render} from 'react-dom';



export default React.createClass({
    componentDidMount() {
        require('../css/score.scss')
    },
    render() {
        let score = this.props.score,
        label = this.props.label;

        return(
            <div className="score-container">
                <span>{label + ": " + score}</span>
            </div>
        );
    }
});