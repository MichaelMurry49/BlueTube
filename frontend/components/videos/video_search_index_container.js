import { connect } from "react-redux";
import VideoSearchIndex from "./video_search_index"
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    videos: state.entities.videos,
    filter: ownProps.match.params.search,
}}

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSearchIndex)