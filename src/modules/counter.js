// Actions
const PREFIX = 'counter';
const INCREASE = `${PREFIX}/INCREASE`;
const DECREASE = `${PREFIX}/DECREASE`;


//Action Creator
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});


// initial state
const INITIAL_STATE = {
  number: 0
};

function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE:
      return {...state, number: state.number + 1}
    case DECREASE:
      return {...state, number: state.number - 1};
    default:
      return state;
  }
};

export default counter;


