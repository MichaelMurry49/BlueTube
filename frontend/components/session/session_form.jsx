import React from "react";
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = this.props.user;
        window.fillOut = { username: "", password: "" }
        // if() <Redirect to="/"/>
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    render(){
        const formType = this.props.formType;
        return(
            <section className="session">
                <form className="session" onSubmit={e => this.handleSubmit(e)}>
                    {/* Bloogle logo */}
                    <div className="bloogle">
                        <div className="one">B</div><div className="four">l</div><div className="two">o</div>
                        <div className="three">o</div><div className="one">g</div>
                        <div className="four">l</div><div className="two">e</div>
                    </div>
                    {/* Session message */}
                    <h1>{formType}</h1>
                    <p>to continue to BlueTube</p>
                    {/* Username input */}
                    <label>
                        <input className="session" type="text" value={this.state.username}
                            onChange={this.update("username")} placeholder="Enter your username"/>
                    </label>
                    {/* Email input */}
                    <label>
                        {/* {formType === "Sign in" ? "" : "Email: "*/} <input className="session"
                            type={formType === "Sign in" ? "hidden" : "text" }
                            onChange={this.update("email")} value={this.state.email}
                            placeholder="Enter your email"/>
                    </label>
                    {/* Password input */}
                    <label>
                        <input className="session" type="password" value={this.state.password} 
                            onChange={this.update("password")} placeholder="Enter your password"/>
                    </label>
                    {/* Submit button and toggle link */}
                    <div className="session-buttons">
                        <Link to={formType === "Sign in" ? "/signup" : "/signin"}>
                            {formType === "Sign in" ? "Create account" : "Sign in instead"}</Link>
                        <button type="submit" className="next">Next</button>
                    </div>
                </form>
            </section>
        )
    }


}

export default SessionForm;