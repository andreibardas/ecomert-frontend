import React from "react";
import axios from 'axios';

// import SHOP_DATA from "./shop.data";
import "../../components/collection-preview/collection-preview.component";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { compose } from "redux";
// import product from "../../../../Backend/validation/product";
import CustomButton from "../../components/custom-button/custom-button.component";
import Spinner from "../../components/spinner/spinner.component";

import "./sweets.styles.scss";




class Sweets extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // collections: SHOP_DATA,
            products: [],
            quantity: [],
            currentUserId: '',
            token: '',
            currentCartId: ''
        };
    }


    componentDidMount(){
        this.setState({ loading: true })
        axios.get('/api/products')
            .then(res => {
                this.setState({ products: res.data });
                this.state.products.map(product => console.log(product));
                this.setState({loading: false});
            })
            .catch(err => {console.log(err)})
        this.setState({token: localStorage.getItem('access_token')}) 
        
        // Get current user id
        axios.get('/api/users/current', {  
            headers: {
            'Authorization': localStorage.getItem('access_token')
          }
        })
            .then(res => {
                this.setState({currentUserId: res.data.id})
                localStorage.setItem('currentUserId', res.data.id);
            })
            .catch(err => { console.log(err) })


        // Get current cart id
        axios.get('/api/cart')
            .then(res => {
               res.data.map(element => {

                   console.log(element.userId);
                   console.log("current user id (local storage)" +localStorage.getItem('currentUserId'));

                   if(element.userId === localStorage.getItem('currentUserId')){
                       this.setState({ currentCartId: element._id });
                       console.log("current cart id (state)" +this.state.currentCartId);
                       localStorage.setItem('currentCartId', element._id);
                       console.log("current cart id (local storage)" +localStorage.getItem('currentCartId'));
                   }
               });
            })
            .catch(err => { console.log(err) })

    }

    



    //add to cart button functionality
    addToCart = (index) => {
        // event.preventDefault();

/*
        axios.get('/api/cart/')
        .then(res => {
            this.setState({ cart: res.data });
            this.state.products.map(product => console.log(product));
            this.setState({loading: false});
        })
        .catch(err => {console.log(err)})
    
*/





        // Get Current user cart and quantity of the products 
        





    
        // Add a product to cart and if products exists already, quantity = quantity + 1
       axios.post('/api/cart/cart',
        {
        productId: this.state.products[index]._id,
        quantity: 1,
        name: this.state.products[index].name,
        price: this.state.products[index].price
        },
      {
          headers: {'Authorization': this.state.token}
      })
      .then(response => {

        console.log(response);
        
      })
      .catch(err => {
          console.log(err);
      })

      // this.setState({token: this.myToken});

    };








    render(){
                // const {collections} = this.state.collections;
                return (

                    this.state.loading 
                    
                    ? 
                    
                    <div>
                    <h1 className="page-title">Dulciuri</h1>
                    <Spinner/>
                    </div>
                    
                    :

                    <div>
                        <h1 className="page-title">Dulciuri</h1>
                <div className="shop-page">
                    {
                    this.state.products.map((product, index) => 
                        <div style={{marginTop: "100px"}}>
                        
                        <div className="collection-item">
                        <div
                            className="image"
                            style={{
                                backgroundImage: `url(${product.photo})`
                            }}
                        />
                        <div className="description">
                            <p className="description-text">
                                <strong>Descriere:</strong> <br/><br/>{product.description}
                            </p>
                        </div>
                        <div className="collection-footer">
                            <span className="name">{product.name}</span>
                            <span className="price">{product.price} lei</span>
                        </div>
                        <CustomButton onClick={() => this.addToCart(index)}>ADAUGA IN COS</CustomButton>
                        </div>


                        </div>
                        )    
                    
                    }

                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>

                </div>
                </div>
                );

        }
    }

export default Sweets;