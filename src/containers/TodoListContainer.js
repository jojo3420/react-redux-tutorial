import React, { useCallback, useRef } from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import {
	insertTodo,
	deleteTodo,
	toggleTodoDone,
	todoInputChange,
} from '../modules/todoList';

function TodoListContainer(props) {
	// const nextId = useRef(3);
	let { todos, inputText } = props;
	const { insertTodo, deleteTodo, toggleTodoDone, inputChange } = props;

	// 핸들러 함수를 생성하지 말고 심플하게 전달하는 걸로 변경.
	// const handleInsert = useCallback(() => {
	// 	const todo = { id: nextId.current, text: todoInput, done: false };
	// 	insertTodo(todo);
	// 	nextId.current += 1;
	// }, [todoInput]);
	//
	// const handleRemove = useCallback(
	// 	id => {
	// 		deleteTodo(id);
	// 	},
	// 	[[]],
	// );
	//
	// const handleToggle = useCallback(
	// 	id => {
	// 		toggleTodoDone(id);
	// 	},
	// 	[todos],
	// );
	//
	// const handleChangeInput = useCallback(text => {
	// 	inputChange(text);
	// }, []);

	return (
		<TodoList
			inputText={inputText}
			todos={todos}
			onChangeInput={inputChange}
			onInsert={insertTodo}
			onRemove={deleteTodo}
			onToggle={toggleTodoDone}
		/>
	);
}

const mapStateToProps = state => ({
	todos: state.todoList.todos,
	inputText: state.todoList.text,
});

const mapDispatchToProps = dispatch => ({
	insertTodo: todo => {
		const action = insertTodo(todo);
		dispatch(action);
	},
	deleteTodo: id => {
		dispatch(deleteTodo(id));
	},
	toggleTodoDone: id => {
		dispatch(toggleTodoDone(id));
	},
	inputChange: text => {
		dispatch(todoInputChange(text));
	},
});

const makeContainer = connect(mapStateToProps, mapDispatchToProps);
export default makeContainer(TodoListContainer);
