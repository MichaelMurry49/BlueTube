import { connect } from "react-redux";
import { signIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    // debugger;
    return {
    user: {username: "", password: ""},
    formType: "Sign in"/*,
    textAlign: "center" */
}}

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)