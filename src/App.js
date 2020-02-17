import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

function App() {
	return (
		<div className="App">
			hello React&Redux
			<CounterContainer />
			<hr />
			<TodoListContainer />
		</div>
	);
}

export default App;
