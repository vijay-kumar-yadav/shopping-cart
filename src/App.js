import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Checkout from './Pages/Checkout';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Landing from './Pages/Landing';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/Category">
          <Category />
        </Route>
        <Route path="/Checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
