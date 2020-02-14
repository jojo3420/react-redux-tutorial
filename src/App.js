import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
	return (
		<div className="App">
			hello React&Redux
			<Counter counter={0} />
			<hr />
			<TodoList todos={[]} />
		</div>
	);
}

export default App;
