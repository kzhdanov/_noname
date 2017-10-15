import { takeEvery } from 'redux-saga/effects';
import { LOAD_TODOS } from '../../reducers/todos';

function* onLoadTodos(action) {
  console.log(action);
  yield null;
}

function* watchOnLoadTodos() {
  yield takeEvery(LOAD_TODOS, onLoadTodos);
}

export default watchOnLoadTodos;