import React from 'react';
import { Link, Route } from 'react-router-dom';
import CounterContainer from '../containers/CounterContainer';
import TodoListContainer from '../containers/TodoListContainer';
import CounterWithThunkContainer from '../containers/CounterWithThunkContainer';
import PostWithThunkContainer from '../containers/PostWithThunkContainer';
import CounterWithSagaContainer from '../containers/CounterWithSagaContainer';
import PostWithSagaContainer from '../containers/PostWithSagaContainer';

function Home() {
	return (
		<div>
			<h1>Redux tutorial app</h1>
			<ul>
				<li>
					<Link to="/counter">Counter</Link>
				</li>
				<li>
					<Link to="/todo/list">TodoList</Link>
				</li>
				<li>
					<Link to="/counter/thunk">Counter Thunk</Link>
				</li>
				<li>
					<Link to="/post/thunk">Post Thunk</Link>
				</li>
				<li>
					<Link to="/counter/saga">Counter Saga</Link>
				</li>
				<li>
					<Link to="/post/saga">Post Saga</Link>
				</li>
			</ul>
			<div>
				<Route exact={true} path="/counter" component={CounterContainer} />
				<Route exact={true} path="/todo/list" component={TodoListContainer} />
				<Route
					exact={true}
					path="/counter/thunk"
					component={CounterWithThunkContainer}
				/>
				<Route
					exact={true}
					path="/post/thunk"
					component={PostWithThunkContainer}
				/>
				<Route
					exact={true}
					path="/counter/saga"
					component={CounterWithSagaContainer}
				/>
				<Route
					exact={true}
					path="/post/saga"
					component={PostWithSagaContainer}
				/>
			</div>
		</div>
	);
}

export default Home;
