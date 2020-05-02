import {connect} from "react-redux";
import { signUp, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    user: {username: "", email: "", password: ""},
    errors: state.errors.sessionErrors,
    formType: "Create your Bloogle Account",
    // signedIn:
}) 

const mapDispatchToProps = dispatch => {
    // debugger;
    return {
    action: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
}}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)