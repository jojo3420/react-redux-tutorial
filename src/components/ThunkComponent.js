import React from 'react';

function ThunkComponent({ postLoading, usersLoading, post, users }) {
	return (
		<div>
			<h2>Thunk Use : posts</h2>
			{postLoading && <div>post Loading...</div>}
			{!postLoading && post && (
				<section>
					<div>title: {post.title}</div>
					<div>body: {post.body}</div>
				</section>
			)}
			<hr />
			<h2>Thunk Use: users</h2>
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

export default ThunkComponent;
