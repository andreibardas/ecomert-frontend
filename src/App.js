import React from 'react';
import {Switch, HashRouter, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SignUp from "./components/sign-up/sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import Sweets from './pages/sweets/sweets.component';
import AdminPage from './pages/adminpage/adminpage.component';

class App extends React.Component {
  unsubsribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
        <HashRouter basename="/">
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path= '/shop' component={ShopPage}/>
              <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>) }  />
              <Route path="/signup" component={SignUp}/>
              <Route path="/sweets" component={Sweets}/>
              <Route path="/admin" component={AdminPage}/>
            </Switch>
            <Footer/>
          </div>
        </HashRouter>
    );
  }


}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
