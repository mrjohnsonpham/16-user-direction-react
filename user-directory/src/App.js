import React, { Component } from "react";
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header"
import Search from "./components/Search"

class App extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };

  completeSearch = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
      <div className="App">
        <Header />
        <Search handleSearch={this.completeSearch} />
        <Table searchTerm = {this.state.search} />
      </div>
    );
  }
}

export default App;