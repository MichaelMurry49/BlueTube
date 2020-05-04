import { connect } from "react-redux";
import VideoStorage from "./video_storage"
import { deleteVideo } from '../../actions/video_actions';

const mapStateToProps = state => ({
    videos: state.entities.videos
})

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoStorage)