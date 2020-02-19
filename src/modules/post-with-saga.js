import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';
// import { startLoading, endLoading } from './loading';
import produce from 'immer';

// 1-1 동기 액션 타입
export const GET_POST = 'saga/GET_POST';
export const GET_POST_SUCCESS = 'saga/GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'saga/GET_POST_FAILURE';
export const GET_USERS = 'saga/GET_USERS';
export const GET_USERS_SUCCESS = 'saga/GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'saga/GET_USERS_FAILURE';

// 1-2 비동기 액션 타입

// 2. Action Creator
export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS, () => null);

// 리팩토링 전 코드
// function* getPostSaga(action) {
// 	yield startLoading(GET_POST);
// 	try {
// 		const response = yield call(api.getPost, action.payload);
// 		yield put({ type: GET_POST_SUCCESS, payload: response.data });
// 		yield endLoading(GET_POST);
// 	} catch (e) {
// 		yield put({ type: GET_POST_FAILURE, payload: e, error: true });
// 		yield endLoading(GET_POST);
// 		// throw e;
// 	}
// }
//
// export function* getUsersSaga() {
// 	yield startLoading(GET_USERS);
// 	try {
// 		const response = yield call(api.getUsers);
// 		yield put({ type: GET_USERS_SUCCESS, payload: response.data });
// 		yield endLoading(GET_USERS);
// 	} catch (e) {
// 		yield put({ type: GET_USERS_FAILURE, payload: e, error: true });
// 		yield endLoading(GET_USERS);
// 	}
// }

// 리팩토링 사가 - Common request
const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* postSaga() {
	yield takeLatest(GET_POST, getPostSaga);
	yield takeLatest(GET_USERS, getUsersSaga);
}

// init state
const INITIAL_STATE = {
	post: null,
	users: [],
};

const postSagaReducer = handleActions(
	{
		[GET_POST_SUCCESS]: (state, action) => ({
			...state,
			post: action.payload,
		}),
		[GET_USERS_SUCCESS]: (state, action) => ({
			...state,
			users: action.payload,
		}),
	},
	INITIAL_STATE,
);

export default postSagaReducer;
