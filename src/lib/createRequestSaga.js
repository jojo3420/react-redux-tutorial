import { call, put } from 'redux-saga/effects';
import { startLoading, endLoading } from '../modules/loading';

/**
 * Saga middleware common request func
 * @param actionType
 * @param requestFn
 * @returns {function(...[*]=)}
 */
export default function createRequestSaga(actionType, requestFn) {
	return function*(action) {
		const SUCCESS = `${actionType}_SUCCESS`;
		const FAILURE = `${actionType}_FAILURE`;
		yield put(startLoading(actionType));
		try {
			const response = yield call(requestFn, action.payload);
			yield put({ type: SUCCESS, payload: response.data });
			yield put(endLoading(actionType));
		} catch (e) {
			put({ type: FAILURE, payload: e, error: true });
			yield put(endLoading(actionType));
			throw e;
		}
	};
}
