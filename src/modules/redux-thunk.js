import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// Action Type
export const GET_POST = 'redux/thunk/GET_POST';
const GET_POST_SUCCESS = 'redux/thunk/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'redux/thunk/GET_POST_FAILURE';

export const GET_USERS = 'redux/thunk/GET_USERS';
const GET_USERS_SUCCESS = 'redux/thunk/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'redux/thunk/GET_USERS_FAILURE';

// Action Creator - Redux Thunk Function
// export const getPost = id => async dispatch => {
// 	dispatch({ type: GET_POST });
// 	try {
// 		const response = await api.getPost(id);
// 		dispatch({ type: GET_POST_SUCCESS, payload: response.data });
// 	} catch (e) {
// 		dispatch({ type: GET_POST_FAILURE, payload: e, error: true });
// 		throw e;
// 	}
// };
//
// export const getUsers = () => async dispatch => {
// 	dispatch({ type: GET_USERS });
// 	try {
// 		const response = await api.getUsers();
// 		dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
// 	} catch (e) {
// 		dispatch({ type: GET_USERS_FAILURE, payload: e, error: true });
// 		throw e;
// 	}
// };

// Refactoring  Request Thunk
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// INIT State
const INITIAL_STATE = {
	// loading: {
	// 	post: false,
	// 	users: false,
	// },
	// error: {
	// 	post: false,
	// 	users: false,
	// },
	post: null,
	users: [],
};

// Reducer
const thunkReducer = handleActions(
	{
		// [GET_POST]: (state, action) => ({
		// 	...state,
		// 	loading: {
		// 		...state.loading,
		// 		post: true,
		// 	},
		// }),
		// [GET_POST_SUCCESS]: (state, action) => ({
		// 	...state,
		// 	loading: {
		// 		...state.loading,
		// 		post: false,
		// 	},
		// 	post: action.payload,
		// }),
		// [GET_POST_FAILURE]: (state, action) => ({
		// 	...state,
		// 	loading: {
		// 		...state.loading,
		// 		post: false,
		// 	},
		// 	error: {
		// 		...state.error,
		// 		post: true,
		// 	},
		// }),
		// [GET_USERS]: (state, action) => ({
		// 	...state,
		// 	loading: {
		// 		...state.loading,
		// 		users: true,
		// 	},
		// }),
		// [GET_USERS_SUCCESS]: (state, action) => ({
		// 	...state,
		// 	loading: {
		// 		...state.loading,
		// 		users: false,
		// 	},
		// 	users: action.payload,
		// }),
		// [GET_USERS_FAILURE]: (state, action) => ({
		// 	...state,
		// 	loading: {
		// 		...state.loading,
		// 		users: false,
		// 	},
		// 	error: {
		// 		...state.error,
		// 		users: true,
		// 	},
		// }),
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

export default thunkReducer;
