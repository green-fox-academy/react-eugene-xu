import { connect } from 'react-redux';
import { acornAte } from '../../actions/action';
import Button from '../../components/Button';

const mapStateToProps = () => {
  return {
    value: 'Eat one',
    id: 'down',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {
      dispatch(acornAte());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
