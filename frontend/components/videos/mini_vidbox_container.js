import { connect } from "react-redux";
import MiniVidBox from "./mini_vidbox";
import { deleteVideo, fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniVidBox)