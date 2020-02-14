import { createStore } from 'redux';

// model DOM - Document Object Model
const toggleEl = document.querySelector('.toggle');
const counterEl = document.querySelector('h2');
const btnIncreaseEl = document.getElementById('increase');
const btnDecreaseEl = document.getElementById('decrease');

// Actions type
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE" ;
const DECREASE = "DECREASE";


// Action Creator Function
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = counter => ({ type: INCREASE, counter  });
const decrease = counter => ({ type: DECREASE, counter });

const INITIAL_STATE = {
  toggle: false,
  counter: 0,
};

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SWITCH :
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.counter
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - action.counter
      };
    default:
      return state;
  }
}

const store = createStore(reducer);


function render () {
  const state = store.getState(); // 현재 상태를 불러 온다.
  // 토클 처리
  if (state.toggle) {
    toggleEl.classList.add('active');
  } else {
    toggleEl.classList.remove('active');
  }

  // DOM 변경 - counter
  counterEl.innerText = state.counter;
}

render();

// 스토어 구독하기 - 상태 변화 감지
const listener = () => {
  const state = store.getState();
  console.log('store state is change... ', state);
};

// 추후에 구록을 취소 할 함수 리턴
// 구독할 함수는 여려개 지정 할 수 있음
const unsubscribableLogger = store.subscribe(listener);
store.subscribe(render);


btnIncreaseEl.addEventListener("click", () => {
  const action = increase(1);
  store.dispatch(action);
});
btnDecreaseEl.addEventListener("click", () => {
  const action = decrease(1);
  store.dispatch(action);
});

toggleEl.onclick = () => {
  const action = toggleSwitch();
  store.dispatch(action);
};


