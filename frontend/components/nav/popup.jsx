import React from 'react';

class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.selectedVideo = "";
        this.selectedThumbNail = "";
        this.title = "";
        this.description = "";
    }
    updateVideo(e){
        this.selectedFile = e.target.files[0];
    }
    updateThumbnail(e){
        this.selectedThumbNail = e.target.files[0];
    }
    updateTitle(e){
        this.title = e.target.value;
    }
    updateDescription(e){
        this.description = e.target.value;
    }
    createVideo(){
        let video = {title: this.title, body: this.body, authorId: this.props.currentUser, viewCount: 0, thumbnail: this.selectedThumbNail, upload: this.selectedVideo}
        this.props.postVideo(video);
    }
    render(){
        const { popup, closePopup } = this.props;
        if(!popup) return null;
        return (
            <div className="popup">
                <button className="exit" onClick={closePopup}>X</button>
                {/* <button className="upload" type="file">Upload Video</button> */}
                <div className="uploadControls">
                    <input className="videoUpload" type="file" onChange={e => this.updateVideo(e)}/>
                    <input className="thumbNailUpload" type="file" onChange={e => this.updateThumbnail(e)}/>
                    <input className="titleUpload" type="text" onChange={e => this.updateTitle(e)}/>
                    <input className="decriptionUpload" type="text" onChange={e => this.updateDescription(e)} />
                    <button className="uploadSubmit" type="submit" onClick={() => this.createVideo()}>Upload Video</button>
                </div>
                

            </div>
        )
    }
    
}

export default Popup;