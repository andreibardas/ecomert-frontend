import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { Route, withRouter } from "react-router-dom";
import './cart-dropdown.styles.scss';




class CartDropdown extends React.Component {
    myToken = "";

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loggedIn: null,
            token: "",
        };

    }


    render(){
        return(
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    <h1>produs</h1>
                </div>
                <CustomButton>FINALIZEAZA CUMPARATURILE</CustomButton>
            </div>

        )
    }

}


export default withRouter(CartDropdown);




/*

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>FINALIZEAZA CUMPARATURILE</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);
*/