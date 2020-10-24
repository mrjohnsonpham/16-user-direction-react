import React, { Component } from "react";
import "./style.css";
import SearchBox from "../SearchBox";

class PageHeader extends Component {

    render() {
        return (
            <div className="jumbotron text-center" >
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Type in search bar below for an employee's name.</p>
                <p className="lead">Click the table header to toggle names in ascending/descending order.</p>
                <hr className="my-4" />
                <SearchBox handler={this.props.handler} />
            </div>
        )
    };
};

export default PageHeader;