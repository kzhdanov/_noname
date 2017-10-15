import watchOnLoadTodos from './todos/index';

export default function* rootSaga() {
  yield [
    watchOnLoadTodos()
  ];
}