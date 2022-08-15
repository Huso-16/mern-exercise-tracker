import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Main App Component is described here.
 */
class App extends Component {
  /**
   * Starts rendering the app
   * @return {ReactNode} main app component
   */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
