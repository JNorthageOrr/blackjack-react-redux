import React from 'react';
import {render} from 'react-dom';



export default React.createClass({
    componentDidMount() {
        require('../css/message.scss')
    },
    render() {
        let message = this.props.message;

        return(
            <div className="message-container">
                <p className="action-message">{ message }</p>
            </div>
        );
    }
});