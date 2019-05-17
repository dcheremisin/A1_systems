import { createStore } from 'redux';
import reducer from '../reducer';


export function configureStore() {
    return createStore(reducer);
}
