import React from 'react';
import { connect } from 'react-redux';
import { RandomINC, RandomDEC} from './rootReducer/counterAction';

function App(props) {
  return (
    <div>
      <div>{props.count.num}</div>
      <button onClick={props.RandomINC}>Increase Count</button>
      <button onClick={props.RandomDEC}>Decrease Count</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.numbers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    RandomINC: () => dispatch(RandomINC()),

    RandomDEC: () => dispatch(RandomDEC()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
