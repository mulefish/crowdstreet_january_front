import { createStore } from 'redux';

export const ACTIONS = {
  SET_DETERMINATION:'SET_DETERMINATION',
  SET_INVESTMENT: 'SET_INVESTMENT',
  SET_AMOUNT: 'SET_AMOUNT',
  SET_CREDIT: 'SET_CREDIT',
  SET_INCOME: 'SET_INCOME',
  SET_FINANCIAL_DETAILS:'SET_FINANCIAL_DETAILS',
  SET_FIRST_NAME: 'SET_FIRST_NAME',
  SET_LAST_NAME: 'SET_LAST_NAME',
  SET_REASON:'SET_REASON', 
  RESET_RANDOM:'RESET_RANDOM', 
};

const initialState = {
  count: 10,
  investment: 0,
  amount: 0,
  credit: 0,
  income: 0,
  determination: 'TBD',
  reason:'TBD',
  firstname: 'TBD',
  lastname: 'TBD',
  random:'unset'
};

function theReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.RESET_RANDOM: {
      return {
        ...state, 
        random: action['random']
      }
    }
    case ACTIONS.SET_REASON: { 
      return {
        ...state, 
        reason: action['reason']
      }
    }
    case ACTIONS.SET_FIRST_NAME: {
      return {
        ...state, 
        firstname: action['firstname']
      }
    }
    case ACTIONS.SET_LAST_NAME: {
      return {
        ...state, 
        lastname: action['lastname']
      }
    }
    case ACTIONS.SET_DETERMINATION: {
      return {
        ...state, 
        determination: action['determination']
      }
    }
    case ACTIONS.SET_FINANCIAL_DETAILS: { 
      return {
        ...state,
        investment: action['investment'],
        amount: action['amount'],
        credit: action['credit'],
        income: action['income']
      }
    }
    case ACTIONS.SET_INVESTMENT: {
      let x = action['payload']
      return {
        ...state,
        investment: x
      }
    }
    case ACTIONS.SET_AMOUNT: {
      let x = action['payload']
      return {
        ...state,
        amount: x
      }
    }
    case ACTIONS.SET_CREDIT: {
      let x = action['payload']
      return {
        ...state,
        credit: x
      }
    }
    case ACTIONS.SET_INCOME: {
      let x = action['payload']
      return {
        ...state,
        income: x
      }
    }
    default:
      return state;
  }
}
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();
export function createReduxStore() {
  const store = createStore(theReducer, enableReduxDevTools);
  return store;
}