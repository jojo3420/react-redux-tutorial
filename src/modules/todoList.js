// Action Type
const TODO_INPUT_CHANGE = 'todoList/TODO_INPUT_CHANGE';
const INSERT_TODO = 'todoList/INSERT_TODO';
const DELETE_TODO = 'todoList/DELETE_TODO';
const TOGGLE_TODO_DONE = 'todoList/TOGGLE_TODO_DONE';

export function todoInputChange(inputText) {
	return {
		type: TODO_INPUT_CHANGE,
		inputText,
	};
}

export function insertTodo(todo) {
	return {
		type: INSERT_TODO,
		todo,
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
	todoInput: '',
};

// reducer function
const todoListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TODO_INPUT_CHANGE:
			return {
				...state,
				todoInput: action.todoInput,
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
				todos: state.map(todo => (todo.id === action.id ? !todo.done : todo)),
			};
		default:
			return state;
	}
};

export default todoListReducer;
