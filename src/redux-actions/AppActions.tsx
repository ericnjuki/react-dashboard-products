import { Dispatch } from 'redux';
import { ACTION } from "../constants/actions";

const getValSuccess = (payload: any) => ({
  type: ACTION,
  payload,
});
const getVal = () => (
  (dispatch: Dispatch) => {
    // axios
    // axios then
    dispatch(getValSuccess('success'));
  }
);

export {
  getVal,
}