import { createAction, handleActions } from 'redux-actions';

// Action Type
const START_LOADING = 'loading/START';
const END_LOADING = 'loading/END';

// Action Creator
export const startLoading = createAction(
	START_LOADING,
	requestType => requestType,
);
export const endLoading = createAction(END_LOADING, requestType => requestType);

// initial state
// 비어 있는 경우는 동적으로 상태가 생성됨(리듀서에서 상태가 생성됨)
const INITIAL_STATE = {};

// handle Actions - reducer
const loadingReducer = handleActions(
	{
		[START_LOADING]: (state, action) => ({
			...state,
			[action.payload]: true, // 상태가 없으면 신규 상태 생성
		}),
		[END_LOADING]: (state, action) => ({
			...state,
			[action.payload]: false, // 상태가 없으면 신규 상태 생성
		}),
	},
	INITIAL_STATE,
);

export default loadingReducer;
