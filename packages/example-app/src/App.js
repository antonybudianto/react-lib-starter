import React, { Component } from 'react';
import { MyHelloView } from 'example-lib';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <MyHelloView>
            Content from app!
          </MyHelloView>
        </div>
      </div>
    );
  }
}

export default App;
