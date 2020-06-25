import { connect } from "react-redux";
import { signIn, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

if(!window.fillOut) window.fillOut = {username: "", password: ""}
const mapStateToProps = (state) => {
    // debugger;
    
    return {
    user: window.fillOut,
    errors: state.errors.sessionErrors,
    formType: "Sign in"
}}

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)