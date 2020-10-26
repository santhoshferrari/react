import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class Rest extends React.Component{
  state={
    dtl:[]
  }
  componentWillMount(){
    axios.get('http://localhost:3000/dtl').then((response)=>{
      this.setState({
        dtl: response.data
      })
    })
  }
  render(){
    let dtl = this.state.dtl.map((dtl)=>{
      return(
        <tr kry={dtl.id}>
            <td>{dtl.id}</td>
            <td>{dtl.name}</td>
            <td>{dtl.mail}</td>
            <td>
            <button className='btn btn-success'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
            </td>
           </tr>

      )
    })
    return(
     <div className='App container'>
       
       <table>
         <thead>
           <tr>
             <th>No.</th>
             <th>Name</th>
             <th>Mail</th>
             <th>Action</th>
           </tr>
         </thead>


         <tbody>
           {dtl}
         </tbody>
       </table>
     </div>
    )
  }

}

function App() {
  return (
    <Rest></Rest>
  );
}

export default App;
