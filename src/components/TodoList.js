import React from 'react';
import TodoItem from './TodoItem';

function TodoList({
	todos,
	onRemove,
	onDone,
	onInsert,
	text,
	onChangeInput,
}) {
	const handleSubmit = e => {
		e.preventDefault();
		text && onInsert();
	};

	return (
		<div>
			<h3>할일 목록</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" value={text} onChange={onChangeInput} />
				<button type="submit">등록</button>
				<ul>
					{todos && todos.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							onRemove={onRemove}
							onToggle={onDone}
						/>
					))}
				</ul>
			</form>
		</div>
	);
}

export default TodoList;
