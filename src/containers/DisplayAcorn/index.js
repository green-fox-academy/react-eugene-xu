import { connect } from 'react-redux';
import Display from '../../components/Display';

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;
