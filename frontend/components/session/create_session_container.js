import { connect } from "react-redux";
import { signIn } from '../../actions/session_actions';
import SessionForm from './session_form';

if(!window.fillOut) window.fillOut = {username: "", password: ""}
const mapStateToProps = (state) => {
    // debugger;
    
    return {
    user: window.fillOut,
    formType: "Sign in"/*,
    textAlign: "center" */
}}

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)