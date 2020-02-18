import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';
import CounterWithMiddleContainer from './containers/CounterWithMiddleContainer';
import ThunkComponentContainer from './containers/ThunkComponentContainer';
import CounterWithSagaContainer from './containers/CounterWithSagaContainer';
function App() {
	return (
		<div className="App">
			hello React&Redux
			<CounterContainer />
			<hr />
			<TodoListContainer />
			<hr />
			<CounterWithMiddleContainer />
			<hr />
			<ThunkComponentContainer />
			<hr />
			<CounterWithSagaContainer />
		</div>
	);
}

export default App;
