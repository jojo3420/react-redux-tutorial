import React, { useEffect } from 'react';
import PostWithSaga from '../components/PostWithSaga';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function PostWithSagaContainer({}) {
	return <PostWithSaga />;
}

const mapStateToProps = state => {
	const { thunk, loading } = state;
	return {};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PostWithSagaContainer);
