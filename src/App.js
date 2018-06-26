import React, { Component } from 'react';
import './App.css';

import loadingPageHOC from './Components/LoadingPage/LoadingPage';
import Routes from './Routes';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div><NavBar/></div>
        {Routes}
      </div>
    );
  }
}

export default loadingPageHOC(App);
