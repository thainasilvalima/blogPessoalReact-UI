import { createStore } from 'redux';
import { reducer } from './tokens/reducer';


const store = createStore(reducer);

export default store;