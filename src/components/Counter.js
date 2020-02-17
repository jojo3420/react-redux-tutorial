import React from 'react';

function Counter({ counter, increase, decrease }) {
	return (
		<div>
			<h3>Counter</h3>
			<p>{counter}</p>
			<button onClick={() => increase(1)}>+1</button>
			<button onClick={() => decrease(1)}>-1</button>
		</div>
	);
}

export default Counter;
