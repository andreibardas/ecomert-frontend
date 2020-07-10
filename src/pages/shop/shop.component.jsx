import React from "react";
import axios from 'axios';

import SHOP_DATA from "./shop.data";
import "../../components/collection-preview/collection-preview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { compose } from "redux";
// import product from "../../../../Backend/validation/product";





class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
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
                const {collections} = this.state.collections;
                return (
                <div className="shop-page">


                    {
                    this.state.products.map(product => 
                        <div style={{marginTop: "100px"}}>
                        {
                            <h1 style={{textDecoration: "underline"}}>{product.name}</h1>
                        }
                        {
                            <h2>Pret: {product.price} lei</h2>
                        }
                        {
                            <h2>Descriere: {product.description}</h2>
                        }
                        {
                            <h2>Categorie: {product.category}</h2>
                        }
                        </div>
                        )    
                    
                    }




                    {/* {
                        collections.map(({id, title, routeName, items}) => (
                            <CollectionPreview key={id} title={title} routeName={routeName} items={items}/>
                        ))
                    } */}
                </div>
                );

        }
    }

export default ShopPage;