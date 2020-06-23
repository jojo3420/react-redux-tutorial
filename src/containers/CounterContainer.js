import React, { useCallback } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from 'modules/counter';

function CounterContainer({ counter, increase, decrease }) {

  const handleIncrease = useCallback( () => {
    increase();
  }, []);

  const handleDecrease = useCallback( () => {
    decrease();
  }, []);

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

export default connect(
  ({ counter }) => ({
    counter: counter.counter,
  }) , (dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }))
(CounterContainer);

