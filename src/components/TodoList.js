import React from 'react';
import TodoItem from './TodoItem';

function TodoList({
	list,
	text,
	handleAdd,
	handleRemove,
	handleDone,
	handleInput,
}) {
	const handleSubmit = e => {
		e.preventDefault();
		text && handleAdd();
	};

	if (!list) return null;

	return (
		<div>
			<h3>할일 목록</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" value={text} onChange={handleInput} />
				<button type="submit">등록</button>
				{list && list.length === 0 && <div>data is empty..</div>}

				<ul>
					{list.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							handleRemove={handleRemove}
							handleDone={handleDone} />
					))}
				</ul>
			</form>
		</div>
	);
}

export default React.memo(TodoList);
