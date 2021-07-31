import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Category">
          <Category />
        </Route>
        <Route exact path="/Checkout">
          <Checkout />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
