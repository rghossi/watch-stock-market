import { SET_STATE, ADD_STOCK_MARKET } from './actions';

function setState(state, newState) {
  return Object.assign({}, state, newState);
}

export default function(state = {}, action) {
  switch (action.type) {
  case SET_STATE:
    return setState(state, action.state);
	case ADD_STOCK_MARKET:
		return Object.assign({}, state, {
			stockMarkets: [ ...state.stockMarkets, action.stockMarket]
		});
  default:
  	return state;
  }
}