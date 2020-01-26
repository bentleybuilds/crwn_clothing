import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage.jsx'
import ShopPage from './pages/shop/shop.jsx'
import Header from './components/header/header.jsx'



function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route  exact path='/' component={LandingPage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
    );
}

export default App;
