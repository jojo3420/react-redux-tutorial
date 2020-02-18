import { startLoading, endLoading } from '../modules/loading';

export default function createRequestThunk(actionType, requestFn) {
	const SUCCESS = `${actionType}_SUCCESS`;
	const FAILURE = `${actionType}_FAILURE`;
	return params => async dispatch => {
		dispatch({ type: actionType }); // start action
		dispatch(startLoading(actionType)); // Call action Creator : start loading
		try {
			const response = await requestFn(params);
			dispatch({ type: SUCCESS, payload: response.data });
			dispatch(endLoading(actionType)); //end loading
		} catch (e) {
			dispatch({ type: FAILURE, payload: e, error: true });
			dispatch(endLoading(actionType)); //end loading
			throw e;
		}
	};
}
