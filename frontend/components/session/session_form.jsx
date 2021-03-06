import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.state.confirm = "";
        this.demo = false;
        window.fillOut = { username: "", password: "" }
        this.setUser = this.setUser.bind(this)
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.password !== this.state.confirm && this.props.formType !== "Sign in"){
            this.setState({errors: "Passwords must match"});
            this.state.errors = "Passwords must match";
            this.setState({ password: "", username: "", confirm: "", email: "" })
        } else {
            
            delete this.state.errors;
            this.props.action(this.state);
            this.setState({errors: ""});
            this.setState({password: "", username: "", confirm: "", email: ""})
        }
        
    }

    setUser(){
        this.state.setState({username: "Demo", password: "password"})
    }

    render(){
        const formType = this.props.formType;
        return(
            <section className="session">
                <form className={formType === "Sign in" ? "sessionSignIn" : "sessionSignUp"} onSubmit={e => this.handleSubmit(e)}>
                    {/* Bloogle logo */}
                    <div className="bloogle">
                        <div className="one">B</div><div className="four">l</div><div className="two">o</div>
                        <div className="three">o</div><div className="one">g</div>
                        <div className="four">l</div><div className="two">e</div>
                    </div>
                    {/* Session message */}
                    <h1>{formType}</h1>
                    <p>to continue to BlueTube</p>
                    <br/>
                    {/* Session errors */}
                    <p>{this.props.errors.concat(this.state.errors).map(error => <div>{error}<br/></div>)}</p>
                    {/* Username input */}
                    <label>
                        <input className="session" type="text" value={this.state.username}
                            onChange={this.update("username")} placeholder="Enter your username"/>
                    </label>
                    {/* Email input */}
                    <label>
                       <input className="session"
                            type={formType === "Sign in" ? "hidden" : "text" }
                            onChange={this.update("email")} value={this.state.email}
                            placeholder="Enter your email"/>
                    </label>
                    {/* Password input */}
                    <label>
                        <input className="session" type="password" value={this.state.password} 
                            onChange={this.update("password")} placeholder="Enter your password"/>
                    </label>
                    {/* Confirm Password input */}
                    <label>
                        <input className="session"
                            type={formType === "Sign in" ? "hidden" : "password"}
                            onChange={this.update("confirm")} value={this.state.confirm}
                            placeholder="Confirm password" />
                    </label>
                    {/* Submit buttons and toggle link */}
                    <div className="session-buttons">
                        <Link className="toggle" onClick={this.props.clearErrors} 
                        to={formType === "Sign in" ? "/signup" : "/signin"}>
                                {formType === "Sign in" ? "Create account" : "Sign in instead"}
                        </Link>
                        <button type="submit" className="next">Next</button> 
                    </div>
                </form>
            </section>
        )
    }


}

export default SessionForm;