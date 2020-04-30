import React from "react";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
    }

    componentDidMount(){
        this.props.action(this.state);
    }

    update(field){
        e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault;
        this.state.value = e.currentTarget.value;
    }

    render(){
        const formType = this.props.formType;
        return(
            <section className="session">
                <form className="session">
                    <div className="bloogle"><div className="one">Bl</div><div className="two">o</div><div className="three">o</div><div className="one">g</div><div className="four">l</div><div className="two">e</div></div>
                    <h1>{formType}</h1>
                    <p>to continue to BlueTube</p>
                    <label>Username: <input className="session" type="text"
                        onChange={this.update("username")}/></label>
                    <label>{formType === "Sign in" ? "" : "Email: "} <input className="session" type={formType === "Sign in" ? "hidden" : "text" }
                        onChange={this.update("email")}/></label>
                    <label>Password: <input className="session" type="password" label="Enter your password"
                        onChange={this.update("password")}/></label>
                    <div className="session-buttons">
                         <button className="Sign Up">Create account</button>
                         <button className="next">Next</button>    
                    </div>
                </form>
            </section>
        )
    }


}

export default SessionForm;