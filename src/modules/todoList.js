import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


// Action List
const APP = 'todoList';
const ADD = `${APP}/ADD`;
const REMOVE = `${APP}/REMOVE`;
const DONE = `${APP}/DONE`;
const CHANGE_INPUT = `${APP}/CHANGE_INPUT`;

let id = 3;
//  Action Creator
// export const add = text => ({
//   type: ADD,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   }
// });
//
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
//
// export const done = (id) => ({
//   type: DONE,
//   id,
// });
//
// export const changeInput = text => ({
//   type: CHANGE_INPUT,
//   text,
// })

export const add = createAction(ADD, text => ({ id: id++, text, done: false}));
export const remove = createAction(REMOVE, id => id);
export const done = createAction(DONE, id => id);
export const changeInput = createAction(CHANGE_INPUT, text => text);


// initial state
const INITIAL_STATE = {
  list: [
    {id: 1, text: 'redux 기초', done: true},
    {id: 2, text: 'react & redux', done: false},
  ],
  text: '',
};

// function todoList (state =INITIAL_STATE, action) {
//   console.log({action})
//   switch (action.type) {
//     case ADD:
//       return {
//         ...state,
//         list: state.list.concat(action.todo),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         list: state.list.filter(todo => todo.id !== action.id),
//       };
//     case DONE:
//       return {
//         ...state,
//         list: state.list.map(todo => todo.id === action.id ? { ...todo, done: !todo.done} : todo),
//       };
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         text: action.text,
//       }
//     default:
//       return state;
//   }
// }

 const todoList = handleActions({
   [ADD]: (state, { payload: todo}) => {
     return produce(state, draft => {
       draft.list.push(todo);
     });
   },
   [REMOVE]: (state, { payload: id }) =>{
     return produce(state, draft  => {
       draft.list.splice(draft.list.findIndex(todo => todo.id  === id), 1);
     })
   },
   [DONE]: (state, { payload: id}) => {
     return produce(state, draft  => {
       const todo = draft.list.find(todo => todo.id === id);
       todo.done = !todo.done;
     })
   },
   [CHANGE_INPUT]: (state, { payload: text }) => {
     return produce(state, draft => {
        draft.text = text;
     });
   },
 }, INITIAL_STATE);



export default todoList;
