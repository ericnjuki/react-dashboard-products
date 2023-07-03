import { bindActionCreators, Dispatch } from "redux";
import { connect } from 'react-redux';
import { getVal } from "./redux-actions/AppActions";
import { useEffect } from "react";

function App(props: any) {
  const { val, getValAction } = props;

  useEffect(() => {
    getValAction();
  }, []);

  return (
    <>
      <p>{val}</p>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
