import React from 'react';

function Bio({ githubBio }) {

    return (
        <div className="bio_container">
            <p className="profile_bio">{githubBio}</p>
        </div>
    )
}

export default Bio;