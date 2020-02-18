import { combineReducers } from 'redux';
import counterReducer from './counter';
import todoListReducer from './todoList';
import reducerWithMiddle from './counter-with-middleware';
import thunkReducer from './redux-thunk';

const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoListReducer,
	counterWith: reducerWithMiddle,
	thunk: thunkReducer,
});

export default rootReducer;
