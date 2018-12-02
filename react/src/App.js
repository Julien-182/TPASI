import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.css';
import './App.css';
import Main from './components/mainPanel/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main></Main>
      </div>
    );
  }
}

export default App;
