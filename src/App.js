import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={LandingPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
