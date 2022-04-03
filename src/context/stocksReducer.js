const StocksReducer = (state, action) => {
  switch (action.type) {
    case "GET_lABEL_AND_DATASET":
      return{
        ...state,
        label: action.payload.label,
        dataSet: action.payload.dataSet,
      }

    default:
      return state
  }
}

export default StocksReducer