import { combineReducers }  from 'redux';
import counter from './counter';
import todoList from './todoList';

const rootRouter = combineReducers({
  counter,
  todoList,
});

export default rootRouter;
