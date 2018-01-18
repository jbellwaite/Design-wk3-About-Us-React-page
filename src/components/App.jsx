import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
