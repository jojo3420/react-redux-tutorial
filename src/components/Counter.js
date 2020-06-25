import React from 'react';

function Counter({ number, increase, decrease }) {
	return (
		<div>
			<h3>Counter</h3>
			<p>{number}</p>
			<button onClick={increase}>+1</button>
			<button onClick={decrease}>-1</button>
		</div>
	);
}

export default Counter;
