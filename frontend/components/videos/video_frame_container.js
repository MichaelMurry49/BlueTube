import { connect } from "react-redux";
import VideoFrame from "./video_frame";
import { fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        // video: this.ownProps.video
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoFrame)