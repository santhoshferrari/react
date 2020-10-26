import React,{Component} from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import {Provider} from './Context';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
class App extends Component {
    state = {
        post_found:true,
        new_user:false
    }
    addNewUser = (id,name,email,address,city,pin,date,married) => {
        if(this.state.post_found){
            this.setState({
                new_user:{id:id,name:name,email:email,address:address,city:city,pin:pin,date:date,married:married}
            });
        }
        else{
            this.setState({
                post_found:true
            });
        }
        
    }

    postShow = (show) => {
        this.setState({
            post_found:show
        })
    }
    
    render(){
        const contextValue = {
            new_user:this.state.new_user,
            addNewUser:this.addNewUser,
            post_show:this.postShow
        }

        let showUsers;
        if(this.state.post_found){
            showUsers = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>PIN</th>
                            <th>Date</th>
                            <th>Married</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UsersList/>
                    </tbody>
                </table>
            );
        }
        else{
            showUsers = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr/>
                    <p>Please Insert Some Users.</p>
                </div>
            );
        }
        return (
            <Provider value={contextValue}>
                        <div>
                            <div>
                                <AddUser/><br></br>
                            </div>

                            <div>
                                {showUsers}
                            </div>
                        </div>       
        </Provider>
        );
    }
}
export default App;