import React, { useCallback } from 'react';
import CounterWithThunk from '../components/CounterWithThunk';
import {
	increaseWithMiddle,
	increaseAsync,
	decreaseWithMiddle,
	decreaseAsync,
} from '../modules/counter-with-thunk';
import { useSelector, useDispatch } from 'react-redux';
import { useActions } from '../lib/useActions';

function CounterWithThunkContainer(props) {
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
		<CounterWithThunk
			counter={counter}
			increase={onIncrease}
			decrease={onDecrease}
		/>
	);
}

export default React.memo(CounterWithThunkContainer);
