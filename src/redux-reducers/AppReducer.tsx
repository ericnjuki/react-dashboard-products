import { ACTION } from "../constants/actions";

const INITIAL_STATE = {
  val: null,
};

const AppReducer = (state = INITIAL_STATE, action: { payload: any, type: string }) => {
  const { payload, type } = action;
  switch(type) {
    case ACTION:
      return {
        ...state,
        val: payload
      }
    default:
      return state 
  }
}

export default AppReducer;