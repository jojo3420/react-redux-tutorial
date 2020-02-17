import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { useSelector, useDispatch, useStore } from 'react-redux';

function CounterContainer(props) {
	// const { counter, increase, decrease } = props;

	// Hook를 사용하여 리덕스에 접근
	const counter = useSelector(state => state.counter.counter);
	// react-redux 제공하는 Hook 사용하여 액션에 디스페치 한다.
	const dispatch = useDispatch();
	// 스토어에 직접 접근.. 특수한 상황에서만 사용할 것...
	const store = useStore();

	// 액션에 디스패치할 때 최적화를 위해 useCallback() 함수를 필수적으로 사용해야 함
	const onIncrease = useCallback(
		number => {
			const action = increase(number);
			// console.log(store.getState());
			dispatch(action);
			// store.dispatch(action); // 이렇게 할수 도 있다. 하지만 이렇게 하지 말아라.
		},
		[dispatch], // dispatch 함수를 전달 해야함!
	);
	const onDecrease = useCallback(
		number => {
			const action = decrease(number);
			dispatch(action);
		},
		[dispatch],
	);

	return (
		<Counter counter={counter} increase={onIncrease} decrease={onDecrease} />
	);
}

// react-redux api 로 리덕스 연결할 경우 자동 최적화가 안되므로 메모 사용
export default React.memo(CounterContainer);

// react-redux connect() 함수로 스토어 연결 방식
// // Redux state ==> component props 전달
// const mapStateToProps = state => {
// 	// 여기서 스테이트는 스토어의 상태
// 	return {
// 		counter: state.counter.counter,
// 	};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		increase: number => {
// 			const action = increase(number);
// 			dispatch(action);
// 		},
// 		decrease: number => {
// 			const action = decrease(number);
// 			dispatch(action);
// 		},
// 	};
// };
//
// // connect() 함수의 리턴은 컨테이너를 만드는 함수를 리턴한다.
// const makeContainer = connect(mapStateToProps, mapDispatchToProps);
// export default makeContainer(CounterContainer);
