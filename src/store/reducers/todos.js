const initialState = {};

const TODOS = 'TODOS';
export const LOAD_TODOS = `${TODOS}/LOAD_TODOS`;
export const ADD_TODO = `${TODOS}/ADD_TODO`;

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.text]);
    case LOAD_TODOS:
      console.log('3###################333');
      return state;
    default:
      return state;
  }
}

export const loadTodos = () => ({ type: LOAD_TODOS });
