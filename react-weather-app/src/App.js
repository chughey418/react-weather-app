import React, { Component } from 'react';
import Search from './components/search';
import WeatherDisplay from './components/weatherDisplay';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    query: '',
    weather: {
      name: '',
      sys: {},
      main: {},
      weather: [],
    }
  }

  constructor () {
    super();
  }

  //update query when there is a change in search bar input
  handleChange = (value) => {
    this.setState({query: value});
  }

  //update weather when location is entered
  handleSearch = (result) => {
    this.setState({weather: {
      name: result.name, 
      sys: result.sys,
      main: result.main,
      weather: result.weather
    }});
}

  render() {
    return (
      <React.Fragment>
        <main>
          <Search 
          query={this.state.query}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
          />
          <WeatherDisplay 
          weather={this.state.weather}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
