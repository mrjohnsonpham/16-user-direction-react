import React from 'react';
import './search.css';

function Search(props) {
    console.log(props);
    return (
        <div className="container">
            <br></br>
            <form onSubmit={e => e.preventDefault()}>
                Filter: &nbsp; 
                <input type="text" placeholder="Name" name="search" onChange={e => props.handleSearch(e)}></input>
            </form>
        </div>
    )
}

export default Search;