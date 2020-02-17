import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

function CounterContainer(props) {
	const { counter, increase, decrease } = props;
	return <Counter counter={counter} increase={increase} decrease={decrease} />;
}

// Redux state ==> component props 전달
const mapStateToProps = state => {
	// 여기서 스테이트는 스토어의 상태
	return {
		counter: state.counter.counter,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increase: number => {
			const action = increase(number);
			dispatch(action);
		},
		decrease: number => {
			const action = decrease(number);
			dispatch(action);
		},
	};
};

// connect() 함수의 리턴은 컨테이너를 만드는 함수를 리턴한다.
const makeContainer = connect(mapStateToProps, mapDispatchToProps);
export default makeContainer(CounterContainer);
