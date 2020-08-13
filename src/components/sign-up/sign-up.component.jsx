import React from "react";

import FormInput from "../form-input-sign-in/form-input-sign-in.component";
import CustomButton from "../custom-button/custom-button.component";
import firebase from "firebase";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import axios from "axios";

import "./sign-up.styles.scss";
import {Link, Redirect} from "react-router-dom";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            loggedIn: false,
            token: null,
        }
    }

/*
    handleSubmit = async event => {
        await auth.signOut();
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        
            try{

                const actionCodeSettings = {
                    // URL you want to redirect back to. The domain (www.example.com) for this
                    // URL must be whitelisted in the Firebase Console.
                    url: 'https://andreibardas.github.io/ecomert/#/',
                    // This must be true.
                    handleCodeInApp: true
                };

                firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
                    .then(function() {
                        alert("Check your mail please");
                        window.localStorage.setItem('emailForSignIn', email);

                    })
                    .catch(function(error) {
                        alert(error.code);
                    });

                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });


                firebase.auth().onAuthStateChanged(function(user) {
                    if (user.emailVerified) {
                        user.sendEmailVerification();
                        const {user} = auth.createUserWithEmailAndPassword(email, password);
                        createUserProfileDocument(user, {displayName});
                        this.setState({
                            displayName: "",
                            email: "",
                            password: "",
                            confirmPassword: ""
                        });

                    }
                    else {
                        auth.signOut();
                    }
                });




            }
                catch (error) {
                console.error(error);
                }

    };
    */


   handleSubmit = async event => {
    event.preventDefault();
    
   axios.post('/api/users/register', {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    password2: this.state.password2

  })
  .then(response => {
    
    // response.data.success === true ? this.setState({ loggedIn: true, token: response.data.token }) : this.setState({ loggedIn: false });
    axios.post('/api/users/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        
        response.data.success === true ? this.setState({ loggedIn: true, token: response.data.token }) : this.setState({ loggedIn: false });
        this.setState({loggedIn: response.data.success, token: response.data.token});
        this.state.loggedIn === true ? this.props.history.push('/sweets') : console.log("loggedin: " + this.state.loggedIn);
        console.error(this.state.token);
        localStorage.setItem('access_token', response.data.token);
        console.log(localStorage.getItem('access_token'));
        window.location.reload(false);
        
      })
      .catch(err => {
          console.log(err);
      })
    
  })
  .catch(err => {
      console.log(err);
  })








  // this.setState({token: this.myToken});
  

};


    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})

    };

    render() {
        const {name, email, password, password2} = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">Nu am cont</h2>
                <span className="subtitle">Creeaza un cont nou</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
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
                        name="password2"
                        value={password2}
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

export default withRouter(SignUp);