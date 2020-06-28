import { connect } from "react-redux";
import VideoCategory from "./video_category"
import { deleteVideo, fetchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return {
    videos: state.entities.videos,
    users: state.entities.users,
    category: ownProps.category,
}}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoCategory)