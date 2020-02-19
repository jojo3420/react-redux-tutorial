import { createAction, handleActions } from 'redux-actions';
import {
	delay,
	put,
	select,
	takeEvery,
	takeLatest,
	throttle,
} from 'redux-saga/effects';
// put:  이벤트 디스패치 함수 ,
// takeEvery: 이벤트 디스패치 요청에 대해 모두 처리
// takeLatest : 이벤트 디스패치 요청에 마지막 1개만 처리 : 중복 요청 방지 효과
// select : saga 함수에서 store 조회 할 때 사용
// throttle: 일정 시간(주기)를 줘서 패치를 진행 ..

// 1. Action Type
const INCREASE = 'counter-saga/INCREASE';
const DECREASE = 'counter-saga/DECREASE';
const INCREASE_SAGA = 'counter/saga/INCREASE';
const DECREASE_SAGA = 'counter/saga/DECREASE';

// 2. Action Creators
// 일반 액션 생성자
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 사가 액션 생성자
// 마우스 클릭 이벤트가 payload 안에 들어 가지 않도록
// () => null 를 두번째 파라미터로 넣어 준다.
export const increaseAsync = createAction(INCREASE_SAGA, () => null);
export const decreaseAsync = createAction(DECREASE_SAGA, () => null);

// saga action creator
function* increaseSaga() {
	yield delay(1000); // 1초 대기.
	yield put(increase()); // { type: INCREASE } 액션을 디스패치:
	// 스토어에 접근하는 참조 경로 주의할 것.
	// counter, sagaCounter thunkCounter 등 상태를 분리해서 만들어 놨으므로.
	const counter = yield select(store => store.sagaCounter);
	console.log(`사가 함수 내부에서 스토어 접근하여 로깅 counter : ${counter}`);
}

function* decreaseSaga() {
	yield delay(1000);
	yield put(decrease()); // { type: DECREASE } 액션을 디스패치
}

// reducer saga
export function* counterSaga() {
	// takeEvery 는 들어오는 모든 액션에 대해 모두 디스페치를 한다.
	// 즉 중복된 요청도 모두 처리 한다.
	// yield takeEvery(INCREASE_SAGA, increaseSaga);
	yield throttle(3000, INCREASE_SAGA, increaseSaga);

	// takeLatest 는 기존에 진행 중이던 작업이 있다면 취소 처리하고
	// 가장 마지막으로 실행된 액션만 디스페치 한다.
	// 즉 중복된 액션을 요청하면 마지막 한개의 액션에 대해서만 디스페치 한다.
	yield takeLatest(DECREASE_SAGA, decreaseSaga);
}

const INITIAL_STATE = 0;

const sagaCounter = handleActions(
	{
		[INCREASE]: state => state + 1,
		[DECREASE]: state => state - 1,
	},
	INITIAL_STATE,
);

export default sagaCounter;
