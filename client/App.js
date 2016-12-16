
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import GameBoard from './containers/gameboard';
import createStore from './create-store';

const store = createStore();

class App extends React.Component {
    render () {
        return(
            <Provider store={ this.props.store }>
                <GameBoard />
            </Provider>
        );
    }
}

render(<App store={store} />, document.getElementById('root'));

