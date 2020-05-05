import React from 'react';

const Popup = ({popup, closePopup}) => {
    if(!popup) return null;
    return (
        <div className="popup">
            <button className="exit" onClick={closePopup}>X</button>
            <button className="upload" type="file">Upload Video</button>
        </div>
    )
}

export default Popup;