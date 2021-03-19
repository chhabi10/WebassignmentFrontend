
import { Component } from "react";

class Adduser extends Component{
state= {
    name:'',
    amount:'',
    desc:''

}


    render(){
        return(
            <div>
                <form>
                    <p>
                        Username
                        <input type="text" name="name" value={this.state.name}
                        OnChange={this.change}/>

                    </p>
                     
                    <p>
                        Addamount
                        <input type="text" name="amount" value={this.state.amount}
                         OnChange={this.change}
                         />

                    </p>

                    <p>
                        description
                        <input type="text" name="desc" value={this.state.desc}
                         OnChange={this.change}
                         />

                    </p>

                </form>
            </div>
        )
    }

}
