import React from "react"

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:"Felipe",
            email_address: "user@email.com"
        };
    }
   
    componentDidMount(){
    
        this.setState(
            {
                username: "Felipe Gabriel",
                email_address: "felipe@email.com"
            }
        )
    }
    render(){
        return(
            <div>
               
                Olá, {this.state.username}, seu e-mail é { this.state.email_address}.

            </div>
        )
    }
}

export default Header