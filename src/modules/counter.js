import { createAction, handleActions } from 'redux-actions';

// Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creator Function
// export function increase(number) {
// 	return { type: INCREASE, number };
// }
//
// export function decrease(number) {
// 	return { type: DECREASE, number };
// }

// Action Creator - redux-actions 함수 사용
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 상태 초기값
const INITIAL_STATE = {
	counter: 0,
	unUseValue: null,
};

// CounterReducer
// const counterReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case INCREASE:
// 			return {
// 				...state,
// 				counter: state.counter + action.number,
// 			};
// 		case DECREASE:
// 			return {
// 				...state,
// 				counter: state.counter - action.number,
// 			};
// 		default:
// 			return state;
// 	}
// };

const counterReducer = handleActions(
	{
		// [INCREASE]: (state, action) => ({
		[INCREASE]: (state, { payload: number }) => ({
			...state,
			// createAction() 이용하니 결과 액션을 payload 에다가 전달해줌.
			counter: state.counter + number,
		}),
		[DECREASE]: (state, { payload: number }) => ({
			...state,
			counter: state.counter - number,
		}),
	},
	INITIAL_STATE, // 상태 초기값 전달
);
export default counterReducer;
