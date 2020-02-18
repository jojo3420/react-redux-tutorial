import React from 'react';
import CounterWithSaga from '../components/CounterWithSaga';
import sagaCounter, {
	increase,
	increaseAsync,
	decrease,
	decreaseAsync,
} from '../modules/counter-with-saga';
import { useSelector } from 'react-redux';
import { useActions } from '../lib/useActions';

function CounterWithSagaContainer() {
	const { counter } = useSelector(state => ({ counter: state.sagaCounter }));

	// Hook - useActions
	const [onIncrease, onDecrease] = useActions(
		[increaseAsync, decreaseAsync],
		[],
	);
	return (
		<CounterWithSaga
			counter={counter}
			increase={onIncrease}
			decrease={onDecrease}
		/>
	);
}

export default React.memo(CounterWithSagaContainer);
