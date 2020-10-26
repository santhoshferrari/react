import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormDataComponent from './components/form-data.component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormDataComponent />
      </div>
    );
  }
}

export default App;