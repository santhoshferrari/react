import React from 'react';
import './App.css';

//componentAPI
class Api extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[

      ]
    }
  this.setStateHandler=this.setStateHandler.bind(this);
}
setStateHandler()
{
  var item='setState'
  var myArray=this.state.data;
  myArray.push(item);
  this.setState({data:myArray})
}
render(){
  return(
    <div>
    <button type='submit' onClick={this.setStateHandler}>SET STATE</button>
    <h3>{this.state.data}</h3>
    </div>
  )
}
};


function App() {
  return (
    <div className="App">
      <Api></Api>
    </div>
  );
}

export default App;
