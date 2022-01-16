import React, { Component } from 'react';
import Search from './components/search';
import WeatherDisplay from './components/weatherDisplay';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Search/>
          <WeatherDisplay />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
