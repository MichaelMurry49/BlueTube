import {connect} from "react-redux";
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    user: {username: "", email: "", password: ""},
    formType: "Create your Bloogle Account",
}) 

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)