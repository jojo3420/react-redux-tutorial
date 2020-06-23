
// Action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });


// initial State
const INITIAL_STATE = {
  counter: 0,
};

// reducer
function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

export default counter;


