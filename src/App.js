import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/shop'} component={Shop} />
      </Switch>
      
    </div>
  );
}

export default App;
