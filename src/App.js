import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';
import CounterWithThunkContainer from './containers/CounterWithThunkContainer';
import PostWithThunkContainer from './containers/PostWithThunkContainer';
import CounterWithSagaContainer from './containers/CounterWithSagaContainer';
import PostWithSagaContainer from './containers/PostWithSagaContainer';

function App() {
	return (
		<Switch>
			<Route path="/" component={Home} />
			{/*<Route path="/counter" component={CounterContainer} />*/}
			{/*<Route path="/todo/list" component={TodoListContainer} />*/}
			{/*<Route path="/counter/thunk" component={CounterWithThunkContainer} />*/}
			{/*<Route path="/post/thunk" component={PostWithThunkContainer} />*/}
			{/*<Route path="/counter/saga" component={CounterWithSagaContainer} />*/}
			{/*<Route path="/post/saga" component={PostWithSagaContainer} />*/}
		</Switch>
	);
}

export default App;
