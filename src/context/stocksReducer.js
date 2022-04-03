const StocksReducer = (state, action) => {
  switch (action.type) {
    case "GET_lABEL_AND_DATASET":
      return{
        ...state,
        label: action.payload.label,
        dataSet: action.payload.dataSet,
      }

    case "CLOSE_NAVBAR":
      return{
        ...state,
        checked: false,
      }

      case "OPEN_NAVBAR":
      return{
        ...state,
        checked: true,
      }

    default:
      return state
  }
}

export default StocksReducer