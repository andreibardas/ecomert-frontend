import React from "react";

import FormInput from "../form-input-sign-in/form-input-sign-in.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password != confirmPassword){
            alert("passwords don't match");
            return;
        }
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
            }
            catch (error) {
                console.error(error);
            }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    render() {
        const {displayName, email, password, confirmPassowrd} = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">Nu am cont</h2>
                <span>Creeaza un cont nou</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Numele ce va fi afisat"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Parola"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassowrd}
                        onChange={this.handleChange}
                        label="Confirma parola"
                        required
                    />
                    <div className="centeredButton">
                    <CustomButton type="submit">CREEAZA CONT</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;