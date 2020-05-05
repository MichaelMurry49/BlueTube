import { connect } from "react-redux";
import SingleVideo from "./single_video";
import { deleteVideo, fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo)