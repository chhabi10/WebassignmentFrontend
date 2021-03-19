
import axios from "axios";
import {Component} from "react";

class User extends Component{


    state={
        User:[]
    }
    componentDidMount(){//surumaai aaune
        axios.get("http://localhost:90/user/showall")
        .then((alldata)=>{
            this.setState({
                User: alldata.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                   {
                        this.state.User.map((user)=>{
                            return(
                         <  div className="col-md-3">user.username</div>
                            )
                        })

                   }
                    
                    
                    
                </div>
            </div>
        )
    }

}
export default User;