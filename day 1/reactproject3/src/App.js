import React from 'react';
import './App.css';

//Default Props
class Props extends React.Component {
  render() {
     return (
        <div>
           <h1>{this.props.headerProp}</h1>
           <h2>{this.props.contentProp}</h2>
        </div>
     );
  }
}
Props.defaultProps = {
  headerProp: "Props Header",
  contentProp: "Props Contend"
}

//Props
class Car extends React.Component {
  render() {
    return (
      <div>
    <h2>I am a {this.props.brand}!</h2>;
    </div>
    );
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Props></Props>
      <Garage></Garage>
    </div>
  );
}

export default App;
