import React from 'react';
import './App.css';

//State
class State extends React.Component{
  constructor(){
    super();
    
    this.state = {
      header: "Hi...!",
      content: "I am Santhosh."
    }
  }
  render(){
    return(
    <div>
      <h1>{this.state.header}</h1>
      <h1>{this.state.content}</h1>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <State></State>
    </div>
  );
}

export default App;
