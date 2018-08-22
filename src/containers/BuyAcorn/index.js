import { connect } from 'react-redux';
import { acornBought } from '../../actions/action';
import Button from '../../components/Button';

const mapStateToProps = () => {
  return {
    value: 'Buy one',
    id: 'up',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {
      dispatch(acornBought());
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
