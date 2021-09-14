import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar(props) {

    const { handleSearch } = props;

    return (
        <div>
            <div className="container-fluid ms-0 ps-0 mb-5">
                <form className="d-flex">
                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faSearch} color="#0d6efd" style={{ "marginTop": "8px" }} />
                    <input className="form-control me-2 search-bar-input" type="search" placeholder="Search" aria-label="Search" onChange={e => handleSearch(e.target.value)} />
                </form>
            </div>
        </div>
    );

}

export default SearchBar;