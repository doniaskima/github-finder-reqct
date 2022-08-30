import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, setAlert }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Github UserName');
        } else {
            searchUsers(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div className="container searchContainer">
            <div className="search card card-body" onSubmit={onSubmit} >
                <h1>Search GitHub Users</h1>
                <p className="lead">Enter a username to fetch a user profile and repos</p>
                <input type="text" className="form-control" placeholder="GitHub Username..." value={text}
                    onChange={onChange} />
            </div>
        </div>

    )
}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
};

export default Search