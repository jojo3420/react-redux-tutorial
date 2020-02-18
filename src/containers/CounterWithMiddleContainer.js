import React, { useCallback } from 'react';
import CounterWithMiddle from '../components/CounterWithMiddle';
import {
	increaseWithMiddle,
	increaseAsync,
	decreaseWithMiddle,
	decreaseAsync,
} from '../modules/counter-with-middleware';
import { useSelector, useDispatch } from 'react-redux';
import { useActions } from '../lib/useActions';

function CounterWithMiddleContainer(props) {
	const { counter } = useSelector(state => ({ counter: state.counterWith }));

	// 후크 사용전 개별적으로 디스패치
	// const dispatch = useDispatch();
	// const onIncrease = useCallback(() => {
	// 	dispatch(increaseWithMiddle());
	// }, [dispatch]);
	//
	// const onDecrease = useCallback(() => {
	// 	dispatch(decreaseWithMiddle());
	// }, [dispatch]);

	// Hook - useActions
	const [onIncrease, onDecrease] = useActions(
		// middleware 적용:  logger middleware test
		// [increaseWithMiddle, decreaseWithMiddle],
		// redux-thunk middleware 적용: async
		[increaseAsync, decreaseAsync],
		[],
	);
	return (
		<CounterWithMiddle
			counter={counter}
			increase={onIncrease}
			decrease={onDecrease}
		/>
	);
}

export default React.memo(CounterWithMiddleContainer);
