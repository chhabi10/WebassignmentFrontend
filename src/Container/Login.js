import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import './Login.css'
class Login extends Component{
    state = {
        username : "",
        password : "",
        chklogin: false
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:94/user/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token', response.data.token)
            this.setState({
                chklogin: true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.chklogin== true){
            //redirect to dashboard
            return <Redirect to='/dashboard'/>
        }
        return(
            <div>
                 
                 
                <form className="form">

                    <p>Username<input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/></p>
                    <p>Password<input type="text" name="password" value={this.state.password} onChange={this.changeHandler} /></p>
                    <p><input type="submit" onClick={this.submitLogin} /></p>
                </form>  
                </div>
                
            
            
        )
    }
}
export default Login;