import React from "react";
import {connect} from "react-redux";
import {Link, Route, HashRouter} from "react-router-dom";
import "./header.styles.scss";
import {ReactComponent as Logo } from "../../assets/shoppingLogo.svg";
import {auth} from "../../firebase/firebase.utils";
import firebase from "firebase";
import CartIcon from "../cart-icon/cart-icon.component";
import "../../assets/bx-cart.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <span className="home-heart">
            <box-icon  name='home-heart' size="lg"></box-icon>
            </span>
            <h1 className="navbar-title">eComert</h1>
            {/*<img src="https://img.icons8.com/carbon-copy/50/000000/shop.png"/>*/}
            {/*<i className="fas fa-store fa-2x"></i>*/}
            {/*<Logo className="logo"/>*/}
        </Link>
        <div className="options">

            {/*<Link className="option" to="/shop">*/}
                {/*<box-icon name='cart' size="lg"></box-icon>*/}
                {/*<img src="https://img.icons8.com/wired/32/000000/click-and-collect.png"/>*/}
                {/*<i className="fas fa-cart-plus fa-2x"></i>*/}
                {/*<i className="fas fa-shopping-basket fa-2x"></i>*/}
            {/*</Link>*/}


            {
                currentUser ?
                    (
                        <Link to="/signin"><div className="option" ><box-icon name='log-out' size="lg"></box-icon></div></Link>
                    ):(
                        <Link to="/signin"><div className="option" ><box-icon name='log-in' size="lg"></box-icon></div></Link>
                        )
            }
            <CartIcon/>
            {/*<Link className="option" to="/signin">
                CONT
            </Link>*/}
        </div>
        {hidden? null : <CartDropdown/>}
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);