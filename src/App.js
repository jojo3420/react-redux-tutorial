import React from 'react';
import CounterContainer from 'containers/CounterContainer';
import TodoListContainer from "containers/TodoListContainer";

function App() {
	return (
		<div>
			<h1>React & Redux tutorial</h1>
			<CounterContainer />
			<hr />
			<TodoListContainer />
		</div>
	);
}

export default App;
