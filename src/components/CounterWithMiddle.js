import React from 'react';

function CounterWithMiddle({ counter, increase, decrease }) {
	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}

export default CounterWithMiddle;
