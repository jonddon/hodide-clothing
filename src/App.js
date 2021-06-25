import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth } from './firebase/firebase';


class App extends Component {
   constructor() {
        super();
        this.state = { currentUser: null}
        
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        //The subscription is always open
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user)
        });   

    }

    UNSAFE_componentWillMount() {
        //To close subscription
        this.unsubscribeFromAuth = null;
    }
  
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={'/shop'} component={Shop} />
          <Route exact path={'/signin'} component={SignInAndSignUp}/>

        </Switch>
        
      </div>
    );
  }
  
}

export default App;
