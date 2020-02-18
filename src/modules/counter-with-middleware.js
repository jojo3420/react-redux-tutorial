import { createAction, handleActions } from 'redux-actions';

// 1. Action Type
const INCREASE = 'counter/middleware/INCREASE';
const DECREASE = 'counter/middleware/DECREASE';

// Action Creator Function
export const increaseWithMiddle = createAction(INCREASE);
export const decreaseWithMiddle = createAction(DECREASE);

// Thunks Action Creator - 함수를 리턴
export const increaseAsync = () => dispatch => {
	// setTimeout() 을 비동기 요청 처리로 바꿔서 생각하면
	// Thunk 미들웨어에게  비동기 요청을 처리할 함수를 전달 한다.
	setTimeout(() => {
		dispatch(increaseWithMiddle());
	}, 1000);
};

export const decreaseAsync = () => dispatch => {
	setTimeout(() => {
		dispatch(decreaseWithMiddle());
	}, 1000);
};

// init state
const INITIAL_STATE = 0;

// reducer
const reducerWithMiddle = handleActions(
	{
		[INCREASE]: state => state + 1,
		[DECREASE]: state => state - 1,
	},
	INITIAL_STATE,
);

export default reducerWithMiddle;
