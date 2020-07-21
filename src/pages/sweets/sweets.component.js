import React from "react";
import axios from 'axios';

// import SHOP_DATA from "./shop.data";
import "../../components/collection-preview/collection-preview.component";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { compose } from "redux";
// import product from "../../../../Backend/validation/product";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./sweets.styles.scss";





class Sweets extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // collections: SHOP_DATA,
            products: []
        };
    }

    componentDidMount(){
        axios.get('/api/products')
            .then(res => {
                this.setState({ products: res.data });
                this.state.products.map(product => console.log(product));
            })
            .catch(err => {console.log(err)})
    }

    render(){
                // const {collections} = this.state.collections;
                return (
                    <div>
                        <h1 className="page-title">Dulciuri</h1>
                <div className="shop-page">
                    {
                    this.state.products.map(product => 
                        <div style={{marginTop: "100px"}}>
                        
                        <div className="collection-item">
                        <div
                            className="image"
                            style={{
                                backgroundImage: `url(${product.photo})`
                            }}
                        />
                        <div className="collection-footer">
                            <span className="name">{product.name}</span>
                            <span className="price">{product.price} lei</span>
                        </div>
                        <CustomButton >ADAUGA IN COS</CustomButton>
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