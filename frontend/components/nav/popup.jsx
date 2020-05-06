import React from 'react';

class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.selectedVideo = "",
        this.selectedThumbNail = "",
        this.title = "",
        this.description = ""
        this.state = {
            selectedVideo: "",
            selectedThumbNail: "",
            title: "",
            description: ""
        }
        
    }
    updateVideo(e){
        this.selectedVideo = e.target.files[0];
        return e => this.setState({selectedVideo: e.target.files[0]});
    }
    updateThumbnail(e){
        this.selectedThumbNail = e.target.files[0];
        return e => this.setState({ selectedThumbNail: e.target.files[0] });
    }
    updateTitle(e){
        this.title = e.target.value;
        return e => this.setState({ title: e.target.value });
    }
    updateDescription(e){
        this.description = e.target.value;
        return e => this.setState({ description: e.target.value });
    }
    createVideo(){
        debugger;
        const formData = new FormData();
        formData.append('video[title]', this.title);
        formData.append('video[description]', this.description);
        formData.append('video[upload]', this.selectedVideo);
        formData.append('video[thumbnail]', this.selectedThumbNail);
        formData.append('video[view_count]', 0);
        formData.append('video[author_id]', this.props.currentUser)
        // this.props.postVideo(formData)
        $.ajax({
            method: 'POST',
            url: `api/videos`,
            data: formData,
            contentType: false,
            processData: false
        });

        // let video = {title: this.title, description: this.description, authorId: this.props.currentUser, viewCount: 0}
        // debugger;
        // let newVid = this.props.postVideo(video);
        // newVid.thumbnail = this.selectedThumbNail;
        // newVid.upload = this.selectedVideo;
        // this.props.updateVideo(newVid);
    }
    render(){
        const { popup, closePopup } = this.props;
        if(!popup) return null;
        return (
            <div className="popup">
                <button className="exit" onClick={closePopup}>X</button>
                {/* <button className="upload" type="file">Upload Video</button> */}
                <div className="uploadControls">
                    <label>Upload Video: <input className="videoUpload" type="file" onChange={e => this.updateVideo(e)}/></label>
                    <label>Select Thumbnail: <input className="thumbNailUpload" type="file" onChange={e => this.updateThumbnail(e)}/></label>
                    <input className="titleUpload" type="text" onChange={e => this.updateTitle(e)}/>
                    <input className="decriptionUpload" type="text" onChange={e => this.updateDescription(e)} />
                    <button className="uploadSubmit" type="submit" onClick={() => this.createVideo()}>Upload Video</button>
                </div>
                

            </div>
        )
    }
    
}

export default Popup;