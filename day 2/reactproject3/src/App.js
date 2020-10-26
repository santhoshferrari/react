import React from 'react';
import './App.css';

//Form
class Form extends React.Component {
  constructor() {
     super();
     
     this.state = {
        data: 'Initial data...'
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState(e) {
     this.setState({data: e.target.value});
  }
  render() {
     return (
        <div>
           <input type = "text" value = {this.state.data} 
              onChange = {this.updateState} />
           <h4>{this.state.data}</h4>
        </div>
     );
  }
}

function App() {
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

export default App;
