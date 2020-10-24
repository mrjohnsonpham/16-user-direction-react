import React, { Component } from "react";
import "./style.css";

class SearchBox extends Component {

    noEnter = () => {
        return !(window.event && window.event.keyCode === 13);
    };

    render() {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                        onChange={(e) => {
                            this.props.handler(e.target.value)
                            console.log(e.target.value);
                        }}
                        onKeyPress={this.noEnter}
                        type="text"
                        className="form-control"
                        placeholder="Employee Name Search"
                        id="employee"
                    />
                </div>
            </form >
        )
    };
};

export default SearchBox;