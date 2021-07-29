import React from 'react';

import MetricsItem from './MetricsItem';

function MetricsContainer({ followerCount, followingCount, repoCount }) {
    return (

        <div className="metrics_container">
            <MetricsItem value={followerCount} title={"Followers"}/>
            <MetricsItem value={followingCount} title={"Following"}/>
            <MetricsItem value={repoCount} title={"Repos"}/>
        </div>
    )
}

export default MetricsContainer;