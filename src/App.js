import React, { Component } from 'react';
import './App.css';

import loadingPageHOC from './Components/LoadingPage/LoadingPage';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}

export default loadingPageHOC(App);
