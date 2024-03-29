import React from 'react';
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage.jsx'
import ShopPage from './pages/shop/shop.jsx'
import SignInAndSignUpPage from './pages/signIn/signInAndSignUp.jsx'
import Header from './components/header/header.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }  
      this.setState({currentUser:userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }

  render(){
    return (
      <div>
        <Router basename = '/crwn_clothing'>

        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  path='/shop'  >
            <ShopPage />
            </Route>
          <Route  path='/signIn'>
            <SignInAndSignUpPage />
            </Route>
          <Route   path='/' >
            <LandingPage />
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
