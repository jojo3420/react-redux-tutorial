import React from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from 'modules/counter';
import { useSelector, useDispatch } from 'react-redux';

function CounterContainer() {
  // 2. hook 이용하는 방식
  const number = useSelector(({ counter }) =>  counter.number);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter
      number={number}
      increase={onIncrease}
      decrease={onDecrease}
    />
  );
}


// 1> connect 이용하는 방식
// export default connect(
//   ({ counter }) => ({
//     number: counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer);


export default CounterContainer;

