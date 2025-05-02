
import { legacy_createStore as createStore} from 'redux';

import CounterReducer from '.page/CounterReducer';
import CounterReducer from './CounterReducer';

const store = createStore(counterReducer);

export default store;
