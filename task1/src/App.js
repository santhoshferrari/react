import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      email:'',
      address:'',
      city:'',
      pin:'',
      date:'',
      married:'true',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleAddress =(event) =>{
    this.setState({
      address: event.target.value
    })
  }
  handleCity =(event) =>{
    this.setState({
      city: event.target.value
    })
  }
  handlePin =(event) =>{
    this.setState({
      pin: event.target.value
    })
  }
  handleDate =(event) =>{
    this.setState({
      date: event.target.value
      
    })
  }
  handleMarried =(event) =>{
    this.setState({
      married: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>BASIC DETAILS</h1>
            <br></br><br></br>
            Name: <input type='text' placeholder='Name' value={this.state.username} onChange={this.handleUsername} required></input>
            <br></br><br></br>
            Email: <input type='email' placeholder='Email' value={this.state.email} onChange={this.handleEmail}  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' required></input>
            <br></br><br></br>
            Address: <input type='text' placeholder='Address' value={this.state.address} onChange={this.handleAddress} required></input>
            <br></br><br></br>
            City: <select value={this.state.city} onChange={this.handleCity} required>
            <option value=''>City</option>
              <option value='Coimbatore'>Coimbatore</option>
              <option value='Thirupur'>Thirupur</option>
              <option value='Erode'>Erode</option>
              <option value='Madurai'>Madurai</option>
              <option value='Bangalore'>Bangalore</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Pune'>Pune</option>
              <option value='Kerala'>Kerala</option>
              <option value='salem'>salem</option>
              <option value='Chennai'>Chennai</option>
            </select>
            <br></br><br></br>
            Pin: <input type='text' placeholder='Pin' value={this.state.pin} onChange={this.handlePin} pattern="[0-9]+" required></input>
            <br></br><br></br>
            Date: <input type='date' value={this.state.date} onChange={this.handleDate} max='2020-09-23' required></input>
            <br></br><br></br>
            Married(yes/No): <input type="checkbox" onChange={this.handleMarried} defaultChecked={this.state.married}/>
            <label>No</label>
            <br></br><br></br>           
            <button type='submit' class='btn btn-primary' value='Submit'>submit</button> &nbsp; 
            <button type='button' class='btn btn-primary'>cancel</button> &nbsp;
            <button type='button' class='btn btn-primary'>Print</button> &nbsp;  
          </div>
        </form>
      )
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
