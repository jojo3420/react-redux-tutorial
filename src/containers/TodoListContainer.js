import React, { useCallback } from 'react';
import TodoList from "components/TodoList";
import { add, remove, done, changeInput } from 'modules/todoList';
import { connect } from 'react-redux';

function TodoListContainer({ todos, text, add, remove, done, changeInput }) {


  const onAdd = useCallback(() => {
    add(text);
    changeInput('');
  }, [text]);

  const onChangeInput = useCallback(e => changeInput(e.target.value), []);

  const onRemove = useCallback(id => remove(id), []);
  const onDone = useCallback(id => done(id), []);

  return (
    <TodoList
      todos={todos}
      text={text}
      onInsert={onAdd}
      onRemove={onRemove}
      onDone={onDone}
      onChangeInput={onChangeInput}
    />
  );
}

export default connect(
  ({ todoList }) => ({
    todos: todoList.todos,
    text: todoList.text,
  }), {
    add, remove, done, changeInput
  }
)(TodoListContainer);
