export const INITIAL_STATE = {
	stockMarkets: [],
	from: new Date(2016, 6, 7),
	to: new Date()
};

export const ADD_STOCK_MARKET = 'ADD_STOCK_MARKET';
export const REMOVE_STOCK_MARKET = 'REMOVE_STOCK_MARKET';
export const CHANGE_FROM_DATE = 'CHANGE_FROM_DATE';
export const CHANGE_TO_DATE = 'CHANGE_TO_DATE';

export function addStockMarket(stockMarket) {
  return { type: ADD_STOCK_MARKET, stockMarket }
}

export function removeStockMarket(stockMarket) {
  return { type: REMOVE_STOCK_MARKET, stockMarket }
}

export function changeFromDate(state, from) {
	return { type: CHANGE_FROM_DATE, from }
}

export function changeToDate(state, to) {
	return { type: CHANGE_TO_DATE, to }
}