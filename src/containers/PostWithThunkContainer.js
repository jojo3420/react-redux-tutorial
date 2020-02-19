import React, { useEffect } from 'react';
import PostWithThunk from '../components/PostWithThunk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost, getUsers, GET_POST, GET_USERS } from '../modules/redux-thunk';

function PostWithThunkContainer({
	postLoading,
	usersLoading,
	postError,
	usersError,
	post,
	users,
	getPost,
	getUsers,
}) {
	useEffect(() => {
		const fetch = async () => {
			try {
				await getPost(1);
				await getUsers();
			} catch (e) {
				// component level 에서 예외를 캐치 할 수도 있다.
				console.info(e);
			}
		};
		fetch();
	}, [getPost, getUsers]);

	return (
		<PostWithThunk
			postLoading={postLoading}
			usersLoading={usersLoading}
			post={post}
			users={users}
		/>
	);
}

const mapStateToProps = state => {
	const { thunk, loading } = state;
	return {
		postLoading: loading[GET_POST],
		userLoading: loading[GET_USERS],
		// postError: thunk.error.post,
		// usersError: thunk.error.users,
		post: thunk.post,
		users: thunk.users,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			getPost,
			getUsers,
		},
		dispatch,
	);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PostWithThunkContainer);
