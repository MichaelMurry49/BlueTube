import React from 'react';

class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.count = 0;
        if(props.cUser) this.vidCount = props.cUser.videos.length;
        this.state = {
            selectedVideo: "",
            selectedThumbNail: "",
            title: "",
            description: "",
        }
        this.videoId = this.props.videoId;
        
    }

    closePopup(){
        // this.props.clearVideoErrors();
        this.videoId = -1;
        this.props.closePopup();
    }
    updateVideo(e){
        // debugger
        this.setState({selectedVideo: e.target.files[0]});
    }
    updateThumbnail(e){
        this.setState({ selectedThumbNail: e.target.files[0] });
    }
    updateTitle(e){
        this.setState({ title: e.target.value });
    }
    updateDescription(e){
        this.setState({ description: e.target.value });
    }
    createVideo(){
        this.vidCount = this.props.cUser.videos.length;
        const formData = new FormData();
        let title = this.state.title;
        let description = this.state.description;
        let upload = this.state.selectedVideo;
        let thumbnail = this.state.selectedThumbNail;
        let authorId = this.props.currentUser;
        // formData.append('video[title]', this.state.title);
        // formData.append('video[description]', this.state.description);
        // formData.append('video[upload]', this.state.selectedVideo);
        // formData.append('video[thumbnail]', this.state.selectedThumbNail);
        formData.append('video[author_id]', this.props.currentUser)
        this.setState({title: ""});
        this.setState({ description: "" });
        this.setState({ selectedVideo: "" });
        this.setState({ selectedThumbNail: "" });
        debugger;
        if (this.props.task === "Upload Video"){
            formData.append('video[view_count]', 0);
            formData.append('video[title]', title);
            formData.append('video[description]', description);
            formData.append('video[upload]', upload);
            formData.append('video[thumbnail]', thumbnail);
            this.props.postVideo(formData).then(() => this.closePopup());
        } else {
            if(title) formData.append('video[title]', title);
            if(description) formData.append('video[description]', description);
            if(upload) formData.append('video[upload]', upload);
            if(thumbnail) formData.append('video[thumbnail]', thumbnail);
            formData.append('video[id]', this.props.videoId)
            this.props.updateVideo(formData).then(() => this.closePopup());
        }
        
        
    }
    render(){
        const { popup, task } = this.props;
        if(!popup) return null;
        return (
            <div className="popup">
                <div className="screenWrap"></div>
                <div className="fill"></div>
                <div className="popupHeader">
                    <h1>{task}</h1>
                    <button className="exit" onClick={() => this.closePopup()}>X</button>
                </div>
                
                <div className="uploadControls">
                    {this.props.errors.map(error => <div className="videoError">{error}</div>)}
                    <label>Upload Video: </label><input className="videoUpload" type="file" onChange={e => this.updateVideo(e)} accept="video/*"/>
                    <label>Select Thumbnail: </label><input className="thumbNailUpload" type="file" onChange={e => this.updateThumbnail(e)} accept="image/*"/>
                    <label>Video Title: </label><input className="titleUpload" value={this.state.title} type="text" onChange={e => this.updateTitle(e)}/>
                    <label>Description:</label><textarea className="decriptionUpload" value={this.state.description} onChange={e => this.updateDescription(e)} />
                    <button className="uploadSubmit" type="submit" onClick={() => this.createVideo()}>Upload Video</button>
                </div>
            </div>
        )
    }   
}

export default Popup;