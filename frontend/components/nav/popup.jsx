import React from 'react';

class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: "",
            selectedThumbNail: "",
            title: "",
            description: ""
        }
        
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
        // debugger;
        // this.props.closePopup();
        const formData = new FormData();
        const tempData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[upload]', this.state.selectedVideo);
        formData.append('video[thumbnail]', this.state.selectedThumbNail);
        formData.append('video[view_count]', 0);
        formData.append('video[author_id]', this.props.currentUser)
        tempData.append('video[title]', this.state.title);
        // tempData.append('video[description]', this.state.description);
        tempData.append('video[upload]', this.state.selectedVideo);
        tempData.append('video[thumbnail]', this.state.selectedThumbNail);
        tempData.append('video[view_count]', 0);
        tempData.append('video[author_id]', this.props.currentUser)
        this.setState({title: ""});
        this.setState({ description: "" });
        this.setState({ selectedVideo: "" });
        this.setState({ selectedThumbNail: "" });
        console.log("form data ",formData);
        if (this.props.task === "Create a new Video"){
            let x = this.props.postVideo(formData)
            let y = this.props.postVideo(tempData)
            debugger;
            this.props.closePopup();
        } else {
            this.props.updateVideo(formData)
        }
        
        
    }
    render(){
        const { popup, closePopup, task } = this.props;
        if(!popup) return null;
        return (
            <div className="popup">
                <button className="exit" onClick={closePopup}>X</button>
                {/* <button className="upload" type="file">Upload Video</button> */}
                <div className="uploadControls">
                    <h1>{task}</h1>
                    <br/>
                    {this.props.errors.map(error => <div className="videoError">{error}</div>)}
                    <label>Upload Video: </label><input className="videoUpload" type="file" onChange={e => this.updateVideo(e)} accept="video/*"/>
                    <label>Select Thumbnail: </label><input className="thumbNailUpload" type="file" onChange={e => this.updateThumbnail(e)} accept="image/*"/>
                    <label>Video Title: </label><input className="titleUpload" value={this.state.title} type="text" onChange={e => this.updateTitle(e)}/>
                    <label>Description</label><textarea className="decriptionUpload" value={this.state.description} onChange={e => this.updateDescription(e)} />
                    <button className="uploadSubmit" type="submit" onClick={() => this.createVideo()}>Upload Video</button>
                </div>
                

            </div>
        )
    }
    
}

export default Popup;