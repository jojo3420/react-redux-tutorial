import  { combineReducers } from "redux";
import counter from './counter';
import todoList from './todoList';

const rootReducer  = combineReducers({
  counter,
  todoList,
});

export default rootReducer;
