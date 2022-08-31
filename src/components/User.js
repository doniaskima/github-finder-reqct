import React, { Fragment, useEffect } from 'react';
import Repos from './repo/repos';
import PropTypes from 'prop-types';

const User = ({ user, getUser, getUserRepos, repos, match }) => {
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        stargazers_count,
        watchers_count,
        forks_count
    } = user;


    return (
        <>
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-3">
                        {/* <img className="img-fluid mb-2" src="{avatar_url}"> */}
                        <a href="{html_url}" target="_blank" className="btn btn-primary btn-block mb-4">View Profile </a>
                    </div>
                    <div className="col-md-9">
                        <span className="badge badge-primary">Public Repos:{public_repos}</span>
                        <span className="badge badge-secondary">Public Gists:{public_gists}</span>
                        <span className="badge badge-success">Followers:{followers}</span>
                        <span className="badge badge-info">Following:{following}</span>
                        <br />
                        <ul className="list-group">
                            <li className="list-group-item">Company: {company}</li>
                            <li className="list-group-item">Blog: {blog}</li>
                            <li className="list-group-item">Location: {location}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 className="page-heading mb-3">Lastest Repos</h3>

            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-3">
                        <a href="{html_url}" target="_blank" >{name}</a>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-primary">Starts: {stargazers_count}</span>
                        <span className="badge badge-secondary">Watchers:{watchers_count}</span>
                        <span className="badge badge-success">Forks:{forks_count}</span>

                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
};

export default User;
