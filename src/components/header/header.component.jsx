import React from "react";
import {Link, Route, HashRouter} from "react-router-dom";
import "./header.styles.scss";
import {ReactComponent as Logo } from "../../assets/shoppingLogo.svg";
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                    (
                    <div className="option" onClick={()=>auth.signOut()}>IESI <i className="far fa-user"></i></div>
                    ):(
                    <Link className="option" to="/signin">INTRA <i className="far fa-user"></i></Link>
                        )
            }

            {/*<Link className="option" to="/signin">
                CONT
            </Link>*/}
        </div>
    </div>

);

export default Header;