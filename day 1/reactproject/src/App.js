import React from 'react';
import './App.css';


//Normal code
class Hello extends React.Component{
  render(){
    return(
        <h1>Hello Guys...!</h1>
    )
  }
}

//Nested Code
class Nested extends React.Component{
  render(){
    return(
      <div>
        <br></br><br></br>
      <h1>I am Santhosh Shanmugam</h1>
      <h1>I am studying React js</h1>   
      <p>React it is facebook prodect</p>
      </div>
    )
  }
}

//Attributes
class Att extends React.Component{
  render(){
    return(
      <h1>{1+1}</h1>
    )
  }
}

//style
class Style extends React.Component{
  render(){
    var mystyle = {
      fontSize: 100,
      color: '#ff0000'
    }
    return(
      <div>
      <h1 style={mystyle}>Hello EveryOne</h1>
      </div>
    );
  }
}

//true
class True extends React.Component{
  render(){
    var i = 1;
    return(
    <h1>{i == 1 ? 'true' : 'false'}</h1>
    );

  }
}

//stateful
class Stateful extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[
        {
        'id':'1',
        'name' : 'santhosh',
        'age' : '20'
        },
        {
          'id':'2',
          'name' : 'kumar',
          'age' : '19'
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <table>
          <tbody>
          {this.state.data.map((persion,i)=> <Table key={i} data={persion}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
class Table extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td> 
      </tr>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Nested></Nested>
      <Att></Att>
      <True></True>
      <Style></Style>
      <Stateful></Stateful>
    </div>
  );
}

export default App;
