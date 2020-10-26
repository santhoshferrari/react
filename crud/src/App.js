import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'React Application',
      act: 0,
      index: '',
      datas: [

        
      ],
    }
  } 

  fSubmit = (e) =>{
    e.preventDefault();

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let address = this.refs.address.value;
    let city = this.refs.city.value;
    let pin = this.refs.pin.value;
    let date = this.refs.date.value;
    let cb = this.refs.cb.value;
    

    if(this.state.act === 0){   
      let data = {
        name, email, address, city, pin, date, cb
      }
      datas.push(data);
    }else{                      
      let index = this.state.index;
      datas[index].name = name;
      datas[index].email = email;
      datas[index].address = address;
      datas[index].city = city;
      datas[index].pin = pin;
      datas[index].date = date;
      datas[index].cb = cb;
    }    

    this.setState({
      datas: datas,
      act: 0
    });
    this.refs.myForm.reset();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });
    this.refs.myForm.reset();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.email.value = data.email;
    this.refs.address.value = data.address;
    this.refs.city.value = data.city;
    this.refs.pin.value = data.pin;
    this.refs.date.value = data.date;
    this.refs.cb.value = data.cb;

    this.setState({
      act: 1,
      index: i
    });
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2><br></br><br></br>
        <form ref="myForm" className="myForm">
          Name: <input type="text" ref="name" placeholder="your name" className="formField" required/><br></br><br></br>
          Email: <input type="email" ref="email" placeholder="your email" className="formField" required/><br></br><br></br>
          Address: <input type="text" ref="address" placeholder="your address" className="formField" required/><br></br><br></br>
          City: <select name='city' ref='city' className="formField" required>
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
            Pin : <input type="text" placeholder="Your Pin" ref="pin" pattern="[0-9]+" required/><br></br><br></br>
            Date: <input type="date" ref="date" max="2020-10-03" required/><br></br><br></br>
            Married(yes/No): <input type="checkbox" ref="cb" defaultChecked={true}/>No
            <br></br><br></br>
          <button type='submit' onClick ={(e)=>this.fSubmit(e)} className="btn btn-primary">submit </button>
        </form><br></br><br></br>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.email}, {data.address}, {data.city}, {data.pin}, {data.date}, {data.cb} &nbsp;
              <button onClick={()=>this.fRemove(i)} className="btn btn-danger">remove </button> &nbsp;
              <button onClick={()=>this.fEdit(i)} className="btn btn-success">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;
