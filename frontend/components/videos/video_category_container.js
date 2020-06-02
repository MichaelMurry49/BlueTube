import { connect } from "react-redux";
import VideoCategory from "./video_category"
import { deleteVideo, fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
    videos: state.entities.videos,
    category: ownProps.category
}}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoCategory)