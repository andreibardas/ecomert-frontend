import React from "react";
import axios from 'axios';

// import SHOP_DATA from "./shop.data";
import "../../components/collection-preview/collection-preview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { compose } from "redux";
// import product from "../../../../Backend/validation/product";





class AdminPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // collections: SHOP_DATA,
            products: []
        };
    }

    componentDidMount(){
        // Get all products
        axios.get('/api/products')
            .then(res => {
                this.setState({ products: res.data });
                this.state.products.map(product => console.log(product));
            })
            .catch(err => {console.log(err)})
    }

    render(){
                return (
                <div className="admin-page">
                    <h1>Welcome to Admin Page</h1>

                </div>
                );

        }
    }

export default AdminPage;