import React from 'react';

function Counter({ counter, increase, decrease }) {
	return (
		<div>
			<h3>Counter</h3>
			<p>{counter}</p>
			<button onClick={() => increase(10)}>+10</button>
			<button onClick={() => decrease(10)}>-10</button>
			{/*<button onClick={() => increase({ number: 1 })}>+1</button>*/}
			{/*<button onClick={() => decrease({ number: 1 })}>-1</button>*/}
		</div>
	);
}

export default Counter;
