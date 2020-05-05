import { connect } from 'react-redux';
import Popup from './popup';
import { closePopup } from '../../actions/popup_actions';

const mapStateToProps = state => ({
    popup: state.ui.popup
});

const mapDispatchToProps = dispatch => ({
    closePopup: () => dispatch(closePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);