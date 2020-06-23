import React, { useCallback  } from 'react';
import { add, remove, done, changeInput } from 'modules/todoList';
import TodoList from 'components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import useActions from "hooks/useActions";


function TodoListContainer({ }) {
  const { text, list } = useSelector(({ todoList }) => todoList);

  // useDispatch 방식
  // const dispatch = useDispatch();
  // const handleInput = useCallback(e => {
  //   const { value } = e.target;
    // console.log({ value })
    // dispatch(changeInput(value));
  // }, [dispatch]);

  // const handleAdd = useCallback(() => {
    // console.log({ text });
    // dispatch(add(text));
    // dispatch(changeInput(''));
  // }, [text, dispatch]);

  // const handleRemove = useCallback(id => dispatch(remove(id)), [dispatch]);
  // const handleDone = useCallback(id => dispatch(done(id)), [dispatch]);


  // useActions Hooks 방식
  const [onAdd, onRemove, onDone, onInput ] = useActions([ add, remove, done, changeInput], []);

  const handleAdd = useCallback(() => {
    onAdd(text);
    onInput('');
  }, [text])
  const handleRemove = useCallback(id => onRemove(id), [])
  const handleDone = useCallback(id => onDone(id), [])
  const handleInput = useCallback(e => onInput(e.target.value), []);

  return (
    <TodoList
      list={list}
      text={text}
      handleAdd={handleAdd}
      handleRemove={handleRemove}
      handleDone={handleDone}
      handleInput={handleInput}
    />
  );
}

export default React.memo(TodoListContainer);

