import { useReducer, useEffect, useCallback } from "react";
import reducerAuthentication from "Reducer/recucerAuthenntication";

function useAsync(api, data, condition = true) {
  const initialData = {
    status: "idle",
    isLoading: false,
    check: false,
    data: []
  };
  const postApi = useCallback(async () => {
    try {
      const result = await api(data);
      dispatch({ type: "fullfilled", payload: result });
    } catch (err) {
      dispatch({ type: "rejected", payload: err });
      throw new Error(" rejected your api ");
    }
  }, []);
  const [state, dispatch] = useReducer(reducerAuthentication, initialData);
  useEffect(() => {
    if (condition) {
      dispatch({ type: "pendding" });
      postApi();
    }
  }, [postApi, condition]);
  return state;
}
export default useAsync;
