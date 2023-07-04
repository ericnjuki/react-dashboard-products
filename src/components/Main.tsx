import { bindActionCreators, Dispatch } from "redux";
import { connect } from 'react-redux';
import { getVal } from "../redux-actions/AppActions";
import { useEffect } from "react";

const MainComponent = ({ val, getValAction }: { val: any, getValAction: any, [key:string]: any}) => {
  useEffect(() => {
    getValAction();
  }, []);
  return (
    <>{val}</>
  );
}

const mapStateToProps = (state: any) => {
  const { app: { val } } = state;
  return {
      val
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
      getValAction: getVal,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
