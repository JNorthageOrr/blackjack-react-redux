import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function() {
    return createStore(rootReducer);
}


