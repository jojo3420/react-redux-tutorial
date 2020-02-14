// Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creator Function
export function increase(number) {
	return { type: INCREASE, number };
}

export function decrease(number) {
	return { type: DECREASE, number };
}

// 상태 초기값
const INITIAL_STATE = {
	counter: 0,
	unUseValue: null,
};

// CounterReducer
const counterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				counter: state.counter + action.number,
			};
		case DECREASE:
			return {
				...state,
				counter: state.counter - action.number,
			};
		default:
			return state;
	}
};

export default counterReducer;
