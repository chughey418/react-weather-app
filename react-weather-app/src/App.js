import React, { Component } from 'react';
import Search from './components/search';
import WeatherDisplay from './components/weatherDisplay';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    query: '',
    weather: {},
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
    this.setState({weather: result});
}

  render() {
    return (
      <React.Fragment>
        <div className={(typeof this.state.weather.main != "undefined") ? ((this.state.weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
          <main>
            <Search 
            query={this.state.query}
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            />
            {(typeof this.state.weather.main != "undefined") ? (
              <WeatherDisplay 
              weather={this.state.weather}
              />
            ) : ('') }
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
