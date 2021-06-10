import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Hats from './pages/Hats';
import Homepage from './pages/homepage/homepage.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/shop/hats'} component={Hats} />
      </Switch>
      
    </div>
  );
}

export default App;
