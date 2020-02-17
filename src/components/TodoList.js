import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

TodoList.propTypes = {
	todos: PropTypes.object.isRequired,
};

function TodoList({
	todos,
	onInsert,
	onRemove,
	onToggle,
	inputText,
	onChangeInput,
}) {
	const handleSubmit = e => {
		e.preventDefault();
		inputText && onInsert(inputText);
		onChangeInput('');
	};

	return (
		<div>
			<h3>할일 목록</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputText}
					onChange={e => onChangeInput(e.target.value)}
				/>
				<button type="submit">등록</button>
				<ul>
					{todos.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							onRemove={onRemove}
							onToggle={onToggle}
						/>
					))}
				</ul>
			</form>
		</div>
	);
}

export default TodoList;
