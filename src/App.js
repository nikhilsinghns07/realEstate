import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Aboutus from './pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      
      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/aboutus'>
          <Aboutus />
        </Route>

        <Route path ='*'>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>

      
      </React.Fragment>
    

  );
}

export default App;



