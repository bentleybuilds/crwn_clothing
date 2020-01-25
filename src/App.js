import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage.jsx'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={LandingPage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
    );
}

export default App;
