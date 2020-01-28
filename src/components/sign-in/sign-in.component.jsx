import React from "react";

import FormInputSignIn from "../form-input-sign-in/form-input-sign-in.component";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import {Link} from "react-router-dom";

class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password:""})
        }
        catch (error) {
            console.log(error);
        }

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
                    <div className="buttons">
                        <CustomButton type="submit">Intra in cont</CustomButton>
                        <div className="spacing">
                        </div>
                        <Link className="option" to="/">
                        <CustomButton type="button" onClick={signInWithGoogle} >{" "}Intra in cont cu <span style={{fontSize: "22px"}}><span style={{color: "#4285F4"}}>G</span><span style={{color: "#DB4437"}}>o</span><span style={{color: "#F4B400"}}>o</span><span style={{color: "#4285F4"}}>g</span><span style={{color: "#0F9D58"}}>l</span><span style={{color: "#DB4437"}}>e</span></span>{" "}</CustomButton>
                        </Link>
                        </div>
                    </form>

                <h4 className="forMobileCreateAccount">Nu ai un cont? Creeaza unul <Link className="toSignUp" to="/signup">aici</Link></h4>
            </div>
        )
    }
}

export default SignIn;