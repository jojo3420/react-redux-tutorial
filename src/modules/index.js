import { combineReducers } from 'redux';
import counterReducer from './counter';
import todoListReducer from './todoList';

const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoListReducer,
});

export default rootReducer;
