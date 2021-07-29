import React from 'react';

function Avatar({ avatarUrl }) {

    return (
        <div className="image_container">
            <img src={avatarUrl} alt="avatar"></img>
        </div>
    )
}

export default Avatar;