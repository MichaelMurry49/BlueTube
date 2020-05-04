import { connect } from "react-redux";
import { signOut } from "../../actions/session_actions";
import Nav from './nav';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUser],
    signedIn: Boolean(state.session.currentUser)
})

const mapDispatchToProps = dispatch => {
    // debugger
    return {
    signOut: () => dispatch(signOut()),
    postVideo: video => dispatch(postVideo(video))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)