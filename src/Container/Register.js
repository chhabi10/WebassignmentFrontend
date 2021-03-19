import { error, event } from "jquery";
import { Component } from "react"
import axios from 'axios'
class Register extends Component{

    state={
        username:"",
        password:"",
        age:""
    }

    sendUserData=(e)=>{
        e.preventDefault();
        const data={username:this.state.username,password:this.state.password,age:this.state.age}
        axios.post("http://localhost:90/user/register" ,data)
        .then(response=>{
            console.log(response)

        })
            
        .catch(error=>{
            console.log(error)

        })
    }
    render(){
        return(
            <div>
                <h1>Register</h1>
                <form>
                    <p> Name<input type="text" value={this.state.name}
                    onChange={(event)=>{this.setState({username:event.target.value})}}
                    />
                   


                    <p>password <input type="password" value={this.state.password}
                    onChange={(event)=>{this.setState({password:event.target.value})}} />

                    <p>Age <input type="text"  value={this.state.agge}
                    onChange={(event)=>{this.setState({age:event.target.value})}}
                    /></p>
                    <p><button onClick={this.sendUserData}>Submit</button></p>
                    </p>
                    </p>
                </form>
                
            </div>


        )
    }
}

export default Register;