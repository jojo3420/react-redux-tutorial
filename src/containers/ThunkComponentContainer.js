import React, { useEffect } from 'react';
import ThunkComponent from '../components/ThunkComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost, getUsers } from '../modules/redux-thunk';

function ThunkComponentContainer({
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
		getPost(1);
		getUsers();
	}, [getPost, getUsers]);

	return (
		<ThunkComponent
			postLoading={postLoading}
			usersLoading={usersLoading}
			postError={postError}
			usersError={usersError}
			post={post}
			users={users}
		/>
	);
}

const mapStateToProps = state => {
	const { thunk } = state;
	return {
		postLoading: thunk.loading.post,
		userLoading: thunk.loading.users,
		postError: thunk.error.post,
		usersError: thunk.error.users,
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
)(ThunkComponentContainer);
