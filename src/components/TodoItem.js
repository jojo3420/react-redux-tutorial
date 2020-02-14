import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, onRemove, onToggle }) {
	const { id, checked, text } = todo;
	return (
		<li>
			<input type="checkbox" value={checked} onClick={onToggle} />
			<span>{text}</span>
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
