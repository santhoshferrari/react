import React from 'react';
import './App.css';

class Refs extends React.Component {
  constructor() {
     super();
   
     this.state = {
        data: ''
     }
     this.updateState = this.updateState.bind(this);
     this.clearInput = this.clearInput.bind(this);
  };
  updateState(e) {
     this.setState({data: e.target.value});
  }
  clearInput() {
     this.setState({data: ''});
  }
  render() {
     return (
        <div>
           <input value = {this.state.data} onChange = {this.updateState} 
              ref = "myInput"></input>
           <button onClick = {this.clearInput}>CLEAR</button>
           <h4>{this.state.data}</h4>
        </div>
     );
  }
}

function App() {
  return (
    <div className="App">
     <Refs></Refs>
    </div>
  );
}

export default App;
