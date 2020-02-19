import React from 'react';

function PostWithSaga({ postLoading, usersLoading, post, users }) {
	return (
		<div>
			<h1>Post With Saga Middleware</h1>
			{postLoading && <div>post Loading...</div>}
			{!postLoading && post && (
				<section>
					<div>title: {post.title}</div>
					<div>body: {post.body}</div>
				</section>
			)}
			<hr />
			<h1>Users With Saga Middleware</h1>
			{usersLoading && <div>users Loading...</div>}
			<div>
				{!usersLoading &&
					users &&
					users.map(user => (
						<div key={user.id}>
							<span>{user.username}</span>
							<span>{user.email}</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default PostWithSaga;
