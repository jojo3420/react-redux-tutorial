import React from 'react';

function CounterWithThunk({ counter, increase, decrease }) {
	return (
		<div>
			<h1>Counter with Thunk Middleware</h1>
			<h2>{counter}</h2>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}

export default CounterWithThunk;
