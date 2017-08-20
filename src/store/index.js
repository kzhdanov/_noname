import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const logger = ({ getState }) =>
  next => action => {
    console.log('will dispatch: ', action);
    console.log(getState());
    return next(action);
  };

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export default createStore(reducers, applyMiddleware(...middlewares));
