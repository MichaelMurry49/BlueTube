import { connect } from "react-redux";
import { signIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    user: ownProps.match.params.user,
    formType: "Sign in"/*,
    textAlign: "center" */
})

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)