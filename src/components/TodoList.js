import React from 'react';
import TodoItem from './TodoItem';

function TodoList({
	todos,
	onRemove,
	onToggle,
	onInsert,
	inputText,
	onChangeInput,
}) {
	const handleSubmit = e => {
		e.preventDefault();
		inputText && onInsert();
	};

	return (
		<div>
			<h3>할일 목록</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputText} onChange={onChangeInput} />
				<button type="submit">등록</button>
				<ul>
					{todos.map(todo => (
						<TodoItem key={todo.id} onRemove={onRemove} onToggle={onToggle} />
					))}
				</ul>
			</form>
		</div>
	);
}

export default TodoList;
