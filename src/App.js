import React, { useState } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Checkout from './Pages/Checkout';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/Home" component={Home}>
          <Home />
        </Route>
        <Route path="/Category" component={Category}>
          <Category />
        </Route>
        <Route path="/Checkout" component={Checkout}>
          <Checkout />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
