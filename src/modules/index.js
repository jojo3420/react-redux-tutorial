import { combineReducers } from 'redux';
import counterReducer from './counter';
import todoListReducer from './todoList';
import reducerWithMiddle from './counter-with-thunk';
import thunkReducer from './post-with-thunk';
import loading from './loading';
import sagaCounter, { counterSaga } from './counter-with-saga';
import postSagaReducer, { postSaga } from './post-with-saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoListReducer,
	counterWith: reducerWithMiddle,
	thunk: thunkReducer,
	loading,
	sagaCounter,
	postSaga: postSagaReducer,
});

// RootSaga
export function* rootSaga() {
	//all 함수는 여러 사가를 합쳐주는 역할을 한다.
	yield all([counterSaga(), postSaga()]);
}

export default rootReducer;
