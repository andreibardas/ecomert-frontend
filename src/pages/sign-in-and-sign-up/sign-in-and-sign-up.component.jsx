import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <ul className="tab-group">
            <li className="tab-active"><a href="#signup">FA-TI CONT</a></li>
            <li className="tab-inactive"><a href="#signin">INTRA IN CONT</a></li>
        </ul>
        <SignIn/>
    </div>
);

export default SignInAndSignUpPage;