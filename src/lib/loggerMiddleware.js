// const loggerMiddleware = function (store) {
// 	return function (next) {
// 		return function (action) {
//
// 		}
// 	}
// };

const loggerMiddleware = store => next => action => {
	console.group(action && action.type); // action type으로 로그를 그룹화 함
	console.log('이전 상태: ', store.getState());
	console.log('action: ', action);
	next(action); // next middleware 또는 리듀서에게 액션 전달
	console.log('다음 상태: ', store.getState()); // 업데이트 된 상태
	console.groupEnd(); // 그룹 종료
};

export default loggerMiddleware;
