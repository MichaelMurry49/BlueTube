import { connect } from "react-redux";
import { signOut } from '../actions/session_actions';
import Splash from './splash';
import { signIn } from "../util/session_api_util";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
    signIn: user => dispatch(signIn(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)