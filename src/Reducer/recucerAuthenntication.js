function reducerAuthentication(state, action) {
  switch (action.type) {
    case "pendding": {
      let newState = { ...state, status: "pendding", isLoading: true };
      return newState;
    }
    case "fullfilled": {
      let newState = {
        ...state,
        status: "fullfilled",
        isLoading: false,
        check: true,
        data: [action.payload]
      };
      return newState;
    }
    case "rejected": {
      let newState = {
        ...state,
        status: "rejected",
        isLoading: false,
        check: true,
        data: [],
        error: action.payload
      };
      return newState;
    }
    default:
      return state;
  }
}
export default reducerAuthentication;
