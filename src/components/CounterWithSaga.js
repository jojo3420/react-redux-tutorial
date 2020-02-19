import React from 'react';

function CounterWithSaga({ counter, increase, decrease }) {
	return (
		<div>
			<h1>Counter with Sage</h1>
			<h2>{counter}</h2>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}

export default CounterWithSaga;
