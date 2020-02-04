import React from "react";
import {connect} from "react-redux";
import {Link, Route, HashRouter} from "react-router-dom";
import "./header.styles.scss";
import {ReactComponent as Logo } from "../../assets/shoppingLogo.svg";
import {auth} from "../../firebase/firebase.utils";
import firebase from "firebase";
import CartIcon from "../cart-icon/cart-icon.component";
import "../../assets/bx-cart.svg";

const Header = ({currentUser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <box-icon name='home-heart' size="lg"></box-icon>
            {/*<img src="https://img.icons8.com/carbon-copy/50/000000/shop.png"/>*/}
            {/*<i className="fas fa-store fa-2x"></i>*/}
            {/*<Logo className="logo"/>*/}
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                <box-icon name='cart' size="lg"></box-icon>
                {/*<img src="https://img.icons8.com/wired/32/000000/click-and-collect.png"/>*/}
                {/*<i className="fas fa-cart-plus fa-2x"></i>*/}
                {/*<i className="fas fa-shopping-basket fa-2x"></i>*/}
            </Link>
            {
                currentUser ?
                    (
                    <div className="option" onClick={()=>auth.signOut()}><box-icon name='log-out' size="lg"></box-icon></div>
                    ):(
                    <Link className="option" to="/signin"><i className="far fa-user fa-2x"></i></Link>
                        )

            }
            <CartIcon/>
            {/*<Link className="option" to="/signin">
                CONT
            </Link>*/}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);