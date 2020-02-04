import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton style={{ minWidth: "50px" }}>FINALIZEAZA COMANDA</CustomButton>
        </div>
    </div>
);

export default CartDropdown;