import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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

            cartProducts: [],
        };

    }

    componentDidMount() {
                // Get current cart by id
                axios.get('/api/cart/' + localStorage.getItem('currentCartId'))
                    .then(res => {
                        this.setState({ cartProducts: res.data.products });
                        this.state.cartProducts.map(product => console.log(product.name));
                    })
                    .catch(err => { console.log(err) });
    }

    render(){
        return(
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    <h1>produs</h1>
                    {this.state.cartProducts.map(product => <p>{product.name}</p>)}

                    {/*{*/}
                    {/*this.state.cartProducts.map((product, index) =>*/}
                    {/*    <div style={{marginTop: "100px"}}>*/}

                    {/*    <div className="collection-item">*/}
                    {/*    <div*/}
                    {/*        className="image"*/}
                    {/*        style={{*/}
                    {/*            backgroundImage: `url(${product.photo})`*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <div className="description">*/}
                    {/*        <p className="description-text">*/}
                    {/*            <strong>Descriere:</strong> <br/><br/>{product.description}*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="collection-footer">*/}
                    {/*        <span className="name">{product.name}</span>*/}
                    {/*        <span className="price">{product.price} lei</span>*/}
                    {/*    </div>*/}
                    {/*    <CustomButton onClick={() => this.addToCart(index)}>ADAUGA IN COS</CustomButton>*/}
                    {/*    </div>*/}


                    {/*    </div>*/}
                    {/*    )*/}
                    
                    {/*}*/}

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
