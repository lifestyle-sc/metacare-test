import { createContext, useReducer } from 'react'
import StocksReducer from './stocksReducer'


const StocksContext = createContext()

export const StocksProvider = (props) => {
  const initialState = {
    label: [],
    dataSet : [],
    checked : false
  }

  const [ state, dispatch ] = useReducer(StocksReducer, initialState)

  return <StocksContext.Provider value={{
    ...state,
    dispatch,
  }}>
    {props.children}
  </StocksContext.Provider>
}

export default StocksContext