import React from 'react';
import './App.css';

//Event
class Event extends React.Component {
  constructor() {
     super();
     
     this.state = {
        data: 'Initial data...'
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState() {
     this.setState({data: 'Data updated...'})
  }
  render() {
     return (
        <div>
           <button onClick = {this.updateState}>CLICK</button>
           <h4>{this.state.data}</h4>
        </div>
     );
  }
}

function App() {
  return (
    <div className="App">
     <Event></Event> 
    </div>
  );
}

export default App;
