import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Action Type
const TODO_INPUT_CHANGE = 'todoList/TODO_INPUT_CHANGE';
const INSERT_TODO = 'todoList/INSERT_TODO';
const DELETE_TODO = 'todoList/DELETE_TODO';
const TOGGLE_TODO_DONE = 'todoList/TOGGLE_TODO_DONE';

/*
export function todoInputChange(text) {
	return {
		type: TODO_INPUT_CHANGE,
		text,
	};
}

// export function insertTodo(todo) {
let id = 3;
export function insertTodo(text) {
	return {
		type: INSERT_TODO,
		// 투두 객체를 받는게 아니라 인풋을 받고 투두 객체를 여기서 생성함.
		todo: { id: id++, text, done: false },
	};
}

export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		id,
	};
}

export function toggleTodoDone(id) {
	return {
		type: TOGGLE_TODO_DONE,
		id,
	};
}
*/
// redux-actions 모듈을 이용하여 액션 생성자 함수 정의
export const todoInputChange = createAction(TODO_INPUT_CHANGE, text => text);

let id = 3;
export const insertTodo = createAction(INSERT_TODO, text => ({
	id: id++,
	text,
	done: false,
}));

export const deleteTodo = createAction(DELETE_TODO, id => id);
export const toggleTodoDone = createAction(TOGGLE_TODO_DONE, id => id);

// 상태 초기값
const INITIAL_STATE = {
	todos: [
		{ id: 1, text: 'learn redux with react', done: true },
		{ id: 2, text: 'learn react hook', done: false },
	],
	text: '',
};

// 1. switch 문 사용하여 액션 핸들링
// reducer function
// const todoListReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case TODO_INPUT_CHANGE:
// 			return {
// 				...state,
// 				text: action.text,
// 			};
// 		case INSERT_TODO:
// 			return {
// 				...state,
// 				todos: state.todos.concat(action.todo),
// 			};
// 		case DELETE_TODO:
// 			return {
// 				...state,
// 				todos: state.todos.filter(todo => todo.id !== action.id),
// 			};
// 		case TOGGLE_TODO_DONE:
// 			return {
// 				...state,
// 				todos: state.todos.map(todo =>
// 					todo.id === action.id ? { ...todo, done: !todo.done } : todo,
// 				),
// 			};
// 		default:
// 			return state;
// 	}
// };

// redux-actions 에서 제공해주는 handleActions 함수 사용하여 리듀서 생성
// const todoListReducer = handleActions(
// 	{
// 		[TODO_INPUT_CHANGE]: (state, { payload: text }) => ({
// 			...state,
// 			text,
// 		}),
// 		[INSERT_TODO]: (state, { payload: todo }) => ({
// 			...state,
// 			todos: state.todos.concat(todo),
// 		}),
// 		[DELETE_TODO]: (state, { payload: id }) => ({
// 			...state,
// 			todos: state.todos.filter(todo => todo.id !== id),
// 		}),
// 		[TOGGLE_TODO_DONE]: (state, { payload: id }) => ({
// 			...state,
// 			todos: state.todos.map(todo =>
// 				todo.id === id ? { ...todo, done: !todo.done } : todo,
// 			),
// 		}),
// 	},
// 	INITIAL_STATE,
// );

// immer 사용하여 더 단순히 처리
const todoListReducer = handleActions(
	{
		[TODO_INPUT_CHANGE]: (state, { payload: text }) =>
			produce(state, draft => {
				draft.text = text;
			}),
		[INSERT_TODO]: (state, { payload: todo }) =>
			produce(state, draft => {
				draft.todos.push(todo);
			}),
		[DELETE_TODO]: (state, { payload: id }) =>
			produce(state, draft => {
				const idx = draft.todos.findIndex(todo => todo.id === id);
				draft.todos.splice(idx, 1);
			}),
		[TOGGLE_TODO_DONE]: (state, { payload: id }) =>
			produce(state, draft => {
				const todo = draft.todos.find(todo => todo.id === id);
				todo.done = !todo.done;
			}),
	},
	INITIAL_STATE,
);
export default todoListReducer;
