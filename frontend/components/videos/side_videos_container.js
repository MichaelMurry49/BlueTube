import { connect } from "react-redux";
import SideVideos from "./side_videos";
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => ({
    videos: state.entities.videos,
})

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideVideos)