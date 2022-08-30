import React, { Fragment, useState } from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header"
import User from './components/User';
import Users from './components/Users';
import Search from "./components/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import "./bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

 
  const searchUsers = async text => {


    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID
      }&client_secret=${process.env.CLIENT_SECRET}`
    );

    setUsers(res.data.items);

  };

 
  const getUser = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID
      }&client_secret=${process.env.CLIENT_SECRET}`
    );
    setUser(res.data);
  };

 
  const getUserRepos = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID
      }&client_secret=${process.env.CLIENT_SECRET}`
    );

    setRepos(res.data);

  };

  return (
    <Router>
      <div className='App'>
        <Header />
       
        <div className='container'>

          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                  />
                  <Users users={users} />
                </Fragment>
              )}
            />

            <Route
              exact
              path='/user/:login'
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}

                />
              )}
            />
          </Switch>
        </div>
      </div>
      <footer className="mt-5 p-3 text-center bg-light">
        GitHub Finder &copy;
      </footer>
    </Router>
  );
}

export default App;
