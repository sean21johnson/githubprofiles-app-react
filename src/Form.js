import React from 'react';

function Form({ onFormSubmit }) {
    
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" className="searchGithubUser" name="searchGithubUser" placeholder="Search"></input>
            <label name="searchGithubUser"></label>
        </form>
    )
}

export default Form;