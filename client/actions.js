export const SET_STATE = 'SET_STATE';

export function setState(state) {
  return {
    type: SET_STATE,
    state
  };
}