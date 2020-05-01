import { connect } from "react-redux";
import { signOut } from '../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)