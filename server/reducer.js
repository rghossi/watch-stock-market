import { INITIAL_STATE, ADD_STOCK_MARKET, REMOVE_STOCK_MARKET, 
	CHANGE_FROM_DATE, CHANGE_TO_DATE } from './actions';

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_STOCK_MARKET:
			return Object.assign({}, state, {
				stockMarkets: [ ...state.stockMarkets, action.stockMarket]
			});
		case REMOVE_STOCK_MARKET:
			const index = state.stockMarkets.indexOf(action.stockMarket);
			const updatedArray = state.stockMarkets.filter((_, i) => i !== index);
			return Object.assign({}, state, {
				stockMarkets: updatedArray
			});
		case CHANGE_FROM_DATE:
			return Object.assign({}, state, {
				from: action.from
			});
		case CHANGE_TO_DATE:
			return Object.assign({}, state, {
				to: action.to
			});
		default:
			return state;
	}
}