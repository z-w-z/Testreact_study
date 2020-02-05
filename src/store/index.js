import {applyMiddleware, createStore,compose} from 'redux'
import reducer from './reducer'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mysaga from  './mysaga'


/** @namespace window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
// then run the saga
sagaMiddleware.run(mysaga)
/*const store = createStore(
    reducer,
    applyMiddleware(thunk)
    )*/
export default store