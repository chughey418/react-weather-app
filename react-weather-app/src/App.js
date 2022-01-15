import React, { Component } from 'react';
import Search from './components/search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Search/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
