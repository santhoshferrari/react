import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class AddUser extends Component{
    static contextType = AppContext;   
    
    insertUser = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-user.php',{
            name:this.username.value,
            email:this.useremail.value,
            address:this.useraddress.value,
            city:this.usercity.value,
            pin:this.userpin.value,
            date:this.userdate.value,
            married:this.usermarried.value,
        })
        .then(function ({data}) {
            if(data.success === 1){
                
                this.context.addNewUser(data.id,this.username.value,this.useremail.value,this.useraddress.value,this.usercity.value,this.userpin.value,this.userdate.value,this.usermarried.value);
                event.target.reset();
                // alert(data.msg);
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){

        return(
            <form onSubmit={this.insertUser}>
            <div><center>
                <h1>React CRUD</h1><br></br>
                    <label>Name :</label>
                    <input type="text" name="username" ref={(val) => this.username = val} placeholder="Name" required/><br></br><br></br>
                    <label>Email :</label>
                    <input type="email" name="useremail" ref={(val) => this.useremail = val} placeholder="Email" required/><br></br><br></br>
                    <label>Address :</label>
                    <input type="text" name="useraddress" ref={(val) => this.useraddress = val} placeholder="Address" required/><br></br><br></br>
                    <label>City :</label>
                    <select name="usercity" ref={(val) => this.usercity = val} required>
                    <option value="">City</option>
                    <option value='Chennai'>Chennai</option>
                    <option value='Coimbatore'>Coimbatore</option>
                    <option value='Madurai'>Madurai</option>
                    <option value='Tiruchirappalli'>Tiruchirappalli</option>
                    <option value='Tiruppur'>Tiruppur</option>
                    <option value='Salem'>Salem</option>
                    <option value='Erode'>Erode</option>
                    <option value='Tirunelveli'>Tirunelveli</option>
                    <option value='Vellore'>Vellore</option>
                    <option value='Thoothukkudi'>Thoothukkudi</option>
                    <option value='Dindigul'>Dindigul</option>
                    <option value='Thanjavur'>Thanjavur</option>
                    </select><br></br><br></br>
                    <label>PIN :</label>
                    <input type="number" name="userpin" ref={(val) => this.userpin = val} placeholder="PIN" required/><br></br><br></br>
                    <label>Date :</label>
                    <input type="date" name="userdate" ref={(val) => this.userdate = val} placeholder="Date" onChange={this.handleChange} max={moment().format("YYYY-MM-DD")} required/>
                    <br></br><br></br>
                    <label>Married (Yes/No) :</label>
                    <input type='checkbox' name="usermarried" value='no' ref={(val) => this.usermarried = val} defaultChecked={true}></input>No<br></br>
                    <button type="submit" className="btn btn-primary">Submit</button></center>
            </div>
        </form>        
        );
    }
}