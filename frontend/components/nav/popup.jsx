import React from 'react';

class Popup extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        const { popup, closePopup } = this.props;
        if(!popup) return null;
        return (
            <div className="popup">
                <button className="exit" onClick={closePopup}>X</button>
                <button className="upload" type="file">Upload Video</button>
            </div>
        )
    }
    
}

export default Popup;