import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component{
 
  unsubscribeFromAuth = null;  //Since we also need to close the subscription

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {  // auth.onAuthStateChanged() is an open subscription
      if ( userAuth ){
        const userRef = await createUserProfileDocument(userAuth);  

        userRef.onSnapshot( snapShot => {  //we get the user object that we saved in the database through this snapShot object
          setCurrentUser({                 //we still not got any user data until we use .data() method
              id : snapShot.id,          //since id does not comes with .data() method
              ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser( userAuth );  //here the user will be null as he has not signed-in
      }    

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  /*In ComponentDidMount we used fetch(), which is used once, but to use it again ComponentDidMount would 
  have to be recalled means the whole app component will be re-rendered( which we don't want )
  we just want to be aware that if somebaody leaves or sign-ins it renders that change only (and firebase gives us that feature)*/

  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dipsatch => ({
  setCurrentUser : user => dipsatch( setCurrentUser(user) )
})

export default connect(null, mapDispatchToProps)(App);