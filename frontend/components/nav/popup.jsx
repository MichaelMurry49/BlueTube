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
        
    }

    closePopup(){
        // this.props.clearVideoErrors();
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
        debugger
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[upload]', this.state.selectedVideo);
        formData.append('video[thumbnail]', this.state.selectedThumbNail);
        formData.append('video[view_count]', 0);
        formData.append('video[author_id]', this.props.currentUser)
        this.setState({title: ""});
        this.setState({ description: "" });
        this.setState({ selectedVideo: "" });
        this.setState({ selectedThumbNail: "" });
        if (this.props.task === "Create a new Video"){
            this.props.postVideo(formData).then(() => this.closePopup());
        } else {
            this.props.updateVideo(formData).then(this.props.fetchUser(this.props.currentUser));
        }
        
        
    }
    render(){
        const { popup, task } = this.props;
        if(!popup) return null;
        // debugger;
        // this.props.fetchUser(this.props.currentUser)
        this.count += 1;
        // if(false === true) this.closePopup();
        // if(this.vidCount && this.props.cUser.videos.length > this.vidCount) {
        //     debugger;
        //     this.vidCount += 1;
        //     this.closePopup();
        // }
        // if(!this.props.errors || this.props.errors.length === 0)  this.props.closePopup();
        // let errors = this.props.errors.slice(0);
        // this.props.clearVideoErrors();
        return (
            <div className="popup">
                <button className="exit" onClick={() => this.closePopup()}>X</button>
                {/* <button className="upload" type="file">Upload Video</button> */}
                <div className="uploadControls">
                    <h1>{task}</h1>
                    {/* <h1>{this.props.cUser.videos.length}</h1> */}
                    <h1>{this.count}</h1>
                    <br/>
                    {this.props.errors.map(error => <div className="videoError">{error}</div>)}
                    {/* {this.props.clearVideoErrors} */}
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