import React, { useCallback } from 'react';
import Counter from 'components/Counter';
// import { connect } from 'react-redux';
import { increase, decrease } from 'modules/counter';
import { useSelector, useDispatch  } from "react-redux";

function CounterContainer({ }) {
  const counter = useSelector(store => store.counter.counter);
  const dispatch =useDispatch();

  const handleIncrease = useCallback( () => {
    dispatch(increase());
  }, [dispatch]);

  const handleDecrease = useCallback( () => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <div>
      <Counter
        counter={counter}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    </div>
  );
}

// export default connect(
//   ({ counter }) => ({
//     counter: counter.counter,
//   }) , (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }))
// (CounterContainer);

export default CounterContainer;
