import React from 'react';

function ReposItem({ name }) {

    return (
        <li className="repo_item">
            <p className="repo_name">{name}</p>
        </li>
    )
}

export default ReposItem;