import React, { useCallback  } from 'react';
import { add, remove, done, changeInput } from 'modules/todoList';
import { connect } from 'react-redux';
import TodoList from 'components/TodoList';
import { bindActionCreators } from "redux";

function TodoListContainer({ list, text, add, remove, done, changeInput}) {

  const handleInput = useCallback(e => {
    const { value } = e.target;
    // console.log({ value })
    changeInput(value);
  }, []);

  const handleAdd = useCallback(() => {
    // console.log({ text });
    add(text);
    changeInput('');
  }, [text]);

  const handleRemove = useCallback(id => remove(id), []);

  const handleDone = useCallback(id => done(id), []);

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


export default connect(
  (state) => ({
    list: state.todoList.list,
    text: state.todoList.text,
  }),
  // (dispatch) => {
  //  return {
  //    add: text => dispatch(add(text)),
  //    remove: id => dispatch(remove(id)),
  //    done: id => dispatch(done(id)),
  //    changeInput: text => {
  //      console.log({ text })
  //      dispatch(changeInput(text));
  //    },
  //  }
  // },
  (dispatch) => bindActionCreators({
    add,
    remove,
    done,
    changeInput,
  }, dispatch)

  // { add, remove, done, changeInput }
)(TodoListContainer);
