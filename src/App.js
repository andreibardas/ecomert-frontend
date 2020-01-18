import React from 'react';
import {Switch, HashRouter, Route} from "react-router-dom";



import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SHOP_DATA from "./pages/shop/shop.data";
import Header from "./components/header/header.component";

function App() {
  return (
      <HashRouter basename="/">
    <div>
      <Header/>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + '/shop'} component={ShopPage}/>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
