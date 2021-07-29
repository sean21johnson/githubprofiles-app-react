import React, { useState, useEffect } from 'react';

import GithubProfileContainer from './GithubProfileContainer';
import Form from './Form';

import './App.css';


/*
  Sections:
    -Form and text input button
    -GitHub Profile

  Components:
    -Form
    -Avatar
    -Username
    -Bio
    -MetricsContainer
      -MetricsItems
    -ReposContainer
      -RepoItems

    -Steps:
      -Add the Form component and ensure that it is passing back the value that is submitted to the App component
      -Create a few methods in the App component:
        -fetchGithubData...will need to hit the API the value of "username" set in state passed in and return the data

    -GitHub Response Properties Needed:
      -avatar_url, bio, followers, following, public_repos, 
*/

function App() {

  const githubAPI = "https://api.github.com/users/";
  const reposString = "/repos";

  // State
  const [ githubUsername, setGithubUsername ] = useState("sean21johnson");
  const [ githubUserData, setGithubUserData ] = useState({});
  const [ githubUserRepos, setGithubUserRepos ] = useState([]);

  // useEffect hook to fetch initial data and listen for changes to data
  useEffect(() => {
    return fetchGithubData(githubUsername)
  },[githubUsername])

  const fetchGithubData = async (githubUsername) => {
    const response = await fetch(`${githubAPI}${githubUsername}`)
    const responseJson = await response.json();

    updateGithubUserData(responseJson)
    updateGithubUsername(githubUsername)
    
    fetchRepoData(githubUsername)
  }

  //Method to fetch the repos for a user
  const fetchRepoData = async (username) => {
    const response = await fetch (`${githubAPI}${username}${reposString}`)
    const responseJson = await response.json();

    console.log('responseJson is', responseJson)

    const reposList = responseJson.slice(0, 10).map(repo => {
      const item = {
        repoId: repo.id,
        repoName: repo.name,
      }

      return item;
    })

    updateGithubUserRepos(reposList);

  } 

  // Method to update the github user data
  const updateGithubUserData = (data) => {
    setGithubUserData(data)
  }

  // Method to update the github username
  const updateGithubUsername = (username) => {
    setGithubUsername(username);
  }

  // Method to update the github user's repos collection
  const updateGithubUserRepos = (repos) => {
    setGithubUserRepos(repos)
  }

  // Method to handle the submission of the form when a user searches for a Github user
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.searchGithubUser.value;

    console.log(searchValue)

    fetchGithubData(searchValue);

    e.target.searchGithubUser.value = "";
  } 



  return (
    <div className="App">
      <section className="upper_container">
        <Form onFormSubmit={handleFormSubmit}/>
      </section>
      <section className="lower_container">

        <GithubProfileContainer githubUserData={githubUserData} githubUserRepos={githubUserRepos}/>
      </section>
    </div>
  );
}

export default App;
