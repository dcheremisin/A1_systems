import { createStore } from 'redux';
import reducer from '../reducer';
import { devToolsEnhancer } from  'redux-devtools-extension' ;

export function configureStore() {
    return createStore(reducer, devToolsEnhancer ());
}
