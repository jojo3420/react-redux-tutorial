import React, { useCallback, useRef } from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import {
	insertTodo,
	deleteTodo,
	toggleTodoDone,
	todoInputChange,
} from '../modules/todoList';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useActions } from '../lib/useActions';

function TodoListContainer(props) {
	// 1. 나의 방식 - 주석처리
	// const nextId = useRef(3);
	// let { todos, inputText } = props;
	// const { insertTodo, deleteTodo, toggleTodoDone, inputChange } = props;

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

	// 2. react-redux Hook 사용
	// const { inputText, todos } = useSelector(state => ({
	// 	todos: state.todoList.todos,
	// 	inputText: state.todoList.text,
	// }));
	//
	// const dispatch = useDispatch();
	// const inputChange = useCallback(
	// 	text => {
	// 		const action = todoInputChange(text);
	// 		dispatch(action);
	// 	},
	// 	[dispatch],
	// );
	// const onInsertTodo = useCallback(
	// 	text => {
	// 		const action = insertTodo(text);
	// 		dispatch(action);
	// 	},
	// 	[dispatch],
	// );
	//
	// const onDeleteTodo = useCallback(
	// 	id => {
	// 		dispatch(deleteTodo(id));
	// 	},
	// 	[dispatch],
	// );
	//
	// const onToggleTodo = useCallback(
	// 	id => {
	// 		dispatch(toggleTodoDone(id));
	// 	},
	// 	[dispatch],
	// );

	// 3. 간단하게 리팩토링 - react-redux Hook 사용: useActions
	const { inputText, todos } = useSelector(state => ({
		inputText: state.todoList.text,
		todos: state.todoList.todos,
	}));

	// useActions 매개변수로 넘긴 순서로 받아야 한다.
	// const dispatch = useDispatch();
	const [onInsertTodo, onDeleteTodo, onToggleTodo, inputChange] = useActions(
		[insertTodo, deleteTodo, toggleTodoDone, todoInputChange],
		[], // 후크 안에서 dispatch 를 임포트 하므로 dispatch 전달할 필요 없음
	);

	return (
		<TodoList
			inputText={inputText}
			todos={todos}
			onChangeInput={inputChange}
			onInsert={onInsertTodo}
			onRemove={onDeleteTodo}
			onToggle={onToggleTodo}
		/>
	);
}
// 최적화 진행
export default React.memo(TodoListContainer);

// react-redux 패키지 connect() 사용하여 리덕스 스토어 연결 방식
// const mapStateToProps = state => ({
// 	todos: state.todoList.todos,
// 	inputText: state.todoList.text,
// });
//
// const mapDispatchToProps = dispatch => ({
// 	insertTodo: todo => {
// 		const action = insertTodo(todo);
// 		dispatch(action);
// 	},
// 	deleteTodo: id => {
// 		dispatch(deleteTodo(id));
// 	},
// 	toggleTodoDone: id => {
// 		dispatch(toggleTodoDone(id));
// 	},
// 	inputChange: text => {
// 		dispatch(todoInputChange(text));
// 	},
// });

/*
	축약 문법
const mapDispatchToProps = dispatch => bindActionCreators({
	insertTodo,
	deleteTodo,
	toggleTodoDone,
	todoInputChange,
}, dispatch);

 */

//
// const makeContainer = connect(mapStateToProps, mapDispatchToProps);
// export default makeContainer(TodoListContainer);
