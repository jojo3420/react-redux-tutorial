import React from 'react';
import TodoListContainer from './containers/TodoListContainer';
import CounterContainer from './containers/CounterContainer';

function App() {
	return (
		<div className="App">
			hello React&Redux
			<TodoListContainer />
			<hr />
			<CounterContainer />
		</div>
	);
}

export default App;
