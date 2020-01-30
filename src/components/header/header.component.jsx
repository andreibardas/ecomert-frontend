import React from "react";
import {Link, Route, HashRouter} from "react-router-dom";
import "./header.styles.scss";
import {ReactComponent as Logo } from "../../assets/shoppingLogo.svg";
import {auth} from "../../firebase/firebase.utils";
import firebase from "firebase";

const Header = ({currentUser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <i className="fas fa-store fa-2x"></i>
            {/*<Logo className="logo"/>*/}
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                <i className="fas fa-shopping-basket fa-2x"></i>
            </Link>
            {
                currentUser ?
                    (
                    <div className="option" onClick={()=>auth.signOut()}><i className="fas fa-sign-out-alt fa-2x"></i></div>
                    ):(
                    <Link className="option" to="/signin"><i className="far fa-user fa-2x"></i></Link>
                        )

            }

            {/*<Link className="option" to="/signin">
                CONT
            </Link>*/}
        </div>
    </div>

);

export default Header;