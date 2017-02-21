export const SET_STATE = 'SET_STATE';
export const ADD_STOCK_MARKET = 'ADD_STOCK_MARKET';
export const REMOVE_STOCK_MARKET = 'REMOVE_STOCK_MARKET';

export function setState(state) {
  return {
    type: SET_STATE,
    state
  };
}

export function addStockMarket(stockMarket) {
  return { 
  	type: ADD_STOCK_MARKET,
  	meta: { remote: true },
  	stockMarket 
  }
}

export function removeStockMarket(stockMarket) {
  return { 
  	type: REMOVE_STOCK_MARKET,
  	meta: { remote: true },
  	stockMarket
  }
}