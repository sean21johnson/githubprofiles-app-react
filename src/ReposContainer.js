import React from 'react';

import ReposItem from './ReposItem';

function ReposContainer({ reposList }) {

    return (
        <div className="repos_container">
            <ul className="repos_list">
                {reposList.map(repo => {
                    return <ReposItem key={repo.repoId} name={repo.repoName}/>
                })}
            </ul>
        </div>
    )
}

export default ReposContainer;