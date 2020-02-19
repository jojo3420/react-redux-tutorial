import React, { useEffect } from 'react';
import PostWithSaga from '../components/PostWithSaga';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	getPost,
	getUsers,
	GET_POST,
	GET_USERS,
} from '../modules/post-with-saga';

function PostWithSagaContainer({
	post,
	users,
	postLoading,
	usersLoading,
	getPost,
	getUsers,
}) {
	useEffect(() => {
		const fetch = async () => {
			await getPost(1);
			await getUsers();
		};
		fetch();
	}, [getPost, getUsers]);

	return (
		<PostWithSaga
			post={post}
			users={users}
			postLoading={postLoading}
			usersLoading={usersLoading}
		/>
	);
}

const mapStateToProps = state => {
	const { postSaga, loading } = state;
	return {
		post: postSaga.post,
		users: postSaga.users,
		postLoading: loading[GET_POST],
		usersLoading: loading[GET_USERS],
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
)(PostWithSagaContainer);
