import { connect } from "react-redux";
import SingleVideo from "./single_video";
import { deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => ({
    video: state.videos[ownProps.match.params.videoId],
})

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo)