import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, handleRemove, handleDone }) {
  const {id, text, done} = todo;
  return (
    <li>
      <input
        type="checkbox"
        checked={done}
        onClick={() => handleDone(id)}/>
      <span
        style={done ? {textDecoration: "line-through"} : {} }

      >{text}</span>
      <button onClick={() => handleRemove(id)}>X</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default React.memo(TodoItem);
