import React from 'react';

import Avatar from './Avatar';
import Username from './Username'
import Bio from './Bio';
import MetricsContainer from './MetricsContainer';
import ReposContainer from './ReposContainer';

function GithubProfileContainer({ githubUserData, githubUserRepos }) {

    const { avatar_url: avatarUrl, login: username, bio: githubBio, followers: followerCount, following: followingCount, public_repos: repoCount } = githubUserData

    return (
        <>
            <Avatar avatarUrl={avatarUrl} />

            <div className="profile_right">
                <Username username={username}/>
                <Bio githubBio={githubBio} />
                <MetricsContainer followerCount={followerCount} followingCount={followingCount} repoCount={repoCount}/>
                <ReposContainer reposList={githubUserRepos}/>
            </div>
        </>


        /*
            Avatar Component
                <div className="image_container">
                    <img />
                </div>
                
                <div className="profile_right">
                    
                    Username Component

                    <div className="username_container">
                        <h1 className="profile_username"><h1>
                    </div>

                    Bio Component

                    <div className="bio_container">
                        <p className="profile_bio"></p>
                    </div>

                    MetricsContainer Component

                    <div className="metrics_container">

                        MetricsItem Component

                        <div className="metrics_item">
                            <h2 className="metrics_value"></h2>
                        </div>
                    </div>

                    ReposContainer Component

                    <div className="repos_container">
                        <ul className="repos_list">

                            ReposItem Component

                            <li className="repo_item"></li>

                        </ul>
                    </div>

                </div>
        */
    )

}

export default GithubProfileContainer;