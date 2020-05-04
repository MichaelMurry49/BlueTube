import { connect } from "react-redux";
import VideoCategory from "./video_category"
import { deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => ({
    videos: state.entities.videos,
    category: ownProps.category
})

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoCategory)