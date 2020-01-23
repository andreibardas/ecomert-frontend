import React from "react";

import FormInputSignIn from "../form-input-sign-in/form-input-sign-in.component";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: "", password: ""});
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    render() {
        return(
            <div className="sign-in">
                <h2>Am deja un cont</h2>
                <span>Intra in cont folosind email-ul si parola</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputSignIn name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInputSignIn name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Parola" required />

                    <CustomButton type="submit">Intra in cont</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;