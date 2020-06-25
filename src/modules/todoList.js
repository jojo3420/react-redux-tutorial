import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Actions
const PREFIX = 'todoList';
const ADD = `${PREFIX}/ADD`;
const REMOVE = `${PREFIX}/REMOVE`;
const DONE = `${PREFIX}/DONE`;
const CHANGE_INPUT = `${PREFIX}/CHANGE_INPUT`;

let id = 3;
// Action Creator
export const add = createAction(ADD, text => ({ id: id++, text, done: false }));
export const remove = createAction(REMOVE, id => id);
export const done = createAction(DONE, id => id);
export const changeInput = createAction(CHANGE_INPUT, text => text);


// initial state
const INITIAL_STATE = {
  todos: [
    { id: 1, text: 'redux basic', done: true },
    { id: 2, text: 'react redux', done: false },
  ],
  text: ''
};

const todoList = handleActions({
  [ADD]: (state, { payload: todo }) => produce(state, draft => {
    draft.todos.push(todo);
  }),
  [REMOVE]: (state, { payload: id}) => {
      return {...state, todos: state.todos.filter(todo => todo.id !== id)};
  },
  [DONE]: (state, { payload: id }) => produce(state, draft => {
    const todo = draft.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
  }),
  [CHANGE_INPUT]: (state, { payload: text}) => ({...state, text}),

}, INITIAL_STATE);

export default todoList;







