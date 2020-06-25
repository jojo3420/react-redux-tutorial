import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, onRemove, onToggle }) {
	const { id, done, text } = todo;

	return (
		<li>
			<input type="checkbox" checked={done} onClick={() => onToggle(id)} />
			<span style={done ? {textDecoration: 'line-through'} : {}}>{text}</span>
			<button onClick={() => onRemove(id)}>X</button>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default TodoItem;
