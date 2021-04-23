import { connect } from "react-redux";
import { signOut } from "../../actions/session_actions";
import { openPopup } from "../../actions/popup_actions";
import StudioNav from "./studio_nav";

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser],
        signedIn: Boolean(state.session.currentUser),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        postVideo: video => dispatch(postVideo(video)),
        openPopup: popup => dispatch(openPopup(popup)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudioNav)