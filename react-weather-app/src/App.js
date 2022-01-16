import React, { Component } from 'react';
import Search from './components/search';
import WeatherDisplay from './components/weatherDisplay';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    query: '',
    weather: {}
  }

  constructor () {
    super();
  }

  //update query when there is a change in search bar input
  handleChange = (value) => {
    this.setState({query: value});
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <Search 
          query={this.state.query}
          onChange={this.handleChange}
          />
          <WeatherDisplay />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
