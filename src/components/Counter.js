import React from 'react';

function Counter({ counter, onChange }) {
	return (
		<div>
			<h3>Counter</h3>
			<p>{counter}</p>
			<button onClick={onChange}>+1</button>
			<button onClick={onChange}>-1</button>
		</div>
	);
}

export default Counter;
