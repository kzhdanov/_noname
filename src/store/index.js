import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const logger = ({ getState }) =>
  next => action => {
    console.log('will dispatch: ', action);
    // console.log(getState());
    return next(action);
  };

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const store = createStore(reducers, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga);

export default store;
