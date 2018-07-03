import React, { Component } from 'react';
import './App.css';

// import LoadingAnimation from './Components/LoadingPage/LoadAnimation';
import Routes from './Routes';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
        countdown: 0,
        show: true,
    }
}
incrementTimer = () => {
    this.setState({ countdown: this.state.countdown + 1 })
}
toggleShow = () => {
    this.setState({ show: false })
}
timer = () => {
    if (this.state.show) {
        setTimeout(() => {
            this.incrementTimer();
            if (this.state.countdown > 4) {
                this.toggleShow();
            }
        }, 1000)
    }
}
  render() {

    return (
      <div className="App">
      {this.timer()}
      <div><NavBar/></div>
      {/* {this.state.show ? <LoadingAnimation /> : ''} */}
        {Routes}
      </div>
    );
  }
}

export default App;