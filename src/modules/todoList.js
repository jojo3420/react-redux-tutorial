// Action Type
const TODO_INPUT_CHANGE = 'todoList/TODO_INPUT_CHANGE';
const INSERT_TODO = 'todoList/INSERT_TODO';
const DELETE_TODO = 'todoList/DELETE_TODO';
const TOGGLE_TODO_DONE = 'todoList/TOGGLE_TODO_DONE';

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

// 상태 초기값
const INITIAL_STATE = {
	todos: [
		{ id: 1, text: 'learn redux with react', done: true },
		{ id: 2, text: 'learn react hook', done: false },
	],
	text: '',
};

// reducer function
const todoListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TODO_INPUT_CHANGE:
			return {
				...state,
				text: action.text,
			};
		case INSERT_TODO:
			return {
				...state,
				todos: state.todos.concat(action.todo),
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id),
			};
		case TOGGLE_TODO_DONE:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.id ? { ...todo, done: !todo.done } : todo,
				),
			};
		default:
			return state;
	}
};

export default todoListReducer;
