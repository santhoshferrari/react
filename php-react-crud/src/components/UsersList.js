import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
import moment from 'moment';
class UsersList extends Component{
    static contextType = AppContext;   
    
    state = {
        users:[]
    }
    
    fetchUsers = () => {
        fetch('http://localhost/php-react/all-users.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        users:data.users.reverse()
                    });
                } 
                else{
                    this.context.post_show(false);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchUsers();
    }

    handleUpdate = (id) => {
        Axios.post('http://localhost/php-react/update-user.php',
        {
            id:id,
            name:this.name.value,
            email:this.email.value,
            address:this.address.value,
            city:this.city.value,
            pin:this.pin.value,
            date:this.date.value,
            married:this.married.value,
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id === id){
                        user.name = this.name.value;
                        user.email = this.email.value;
                        user.address = this.address.value;
                        user.city = this.city.value;
                        user.pin = this.pin.value;
                        user.date = this.date.value;
                        user.married = this.married.value;
                        user.isEditing = false;
                        return user;
                    }
                    return user; 
                });
                this.setState({
                    users
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    editMode = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = true;
                return user;
            }
            user.isEditing = false;
            return user;
            
        });

        this.setState({
            users
        });
       
    }

    cancleEdit = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = false;
                return user;
            }
            return user
            
        });
        this.setState({
            users
        });
    }

    handleDelete = (id) => {
        if(window.confirm('Are you sure?')){
        let deleteUser = this.state.users.filter(user => {
            return user.id !== id;
        });
        
        Axios.post('http://localhost/php-react/delete-user.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    }


    componentDidUpdate(){
        let newUser = this.context.new_user;
        if(newUser){ 
            this.setState({
                users:[
                    newUser,
                    ...this.state.users
                    
                ]
            });          
            this.context.new_user = false;
        }        
    }

    render(){

        let allUsers = this.state.users.map(({id,name,email,address,city,pin,date,married,isEditing}, index) => {
            
            return isEditing === true ? (   
            <tr key={id}>
                <td><input className="form-control" type="text" ref={(item) => this.name = item} defaultValue={name}/></td>
                <td><input className="form-control" type="email" ref={(item) => this.email = item} defaultValue={email}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.address = item} defaultValue={address}/></td>
                <td><select ref={(item) => this.city = item} defaultValue={city}>
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
                    </select></td>
                    <td><input className="form-control" type="number" ref={(item) => this.pin = item} defaultValue={pin}/></td>
                    <td><input className="form-control" type="date" ref={(item) => this.date = item} defaultValue={date} onChange={this.handleChange} max={moment().format("YYYY-MM-DD")} /></td>
                    <td>Married (Yes/No) :<input type='checkbox' ref={(item) => this.married = item} defaultValue={married} defaultChecked={true}></input>No</td>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
                    <button onClick={() => this.cancleEdit(id)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ):
            (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{city}</td>
                    <td>{pin}</td>
                    <td>{date}</td>
                    <td>{married}</td>
                    <td>
                        <button className="btn btn-dark mr-2" onClick={() => this.editMode(id)}>Edit</button>
                        <button onClick={() => this.handleDelete(id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });

        

        return(
            <>
            {allUsers}
            </>
        );
        
    }
}

export default UsersList;