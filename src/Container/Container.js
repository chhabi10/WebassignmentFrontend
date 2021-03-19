import { Component } from "react"
import Register from "./Register";
import {Route} from 'react-router-dom'
import Login from "./Login";
import User from './User'


class Container extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Route path='/register22' component={Register}/>
                       <Route path='/login'component={Login}/>
                       <Route path='/User' component={User}/>
                        
                    </div>
                </div>
            </div>


        )
    }
}

export default Container;