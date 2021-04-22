import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import HomePage from './pages/homePage/homepage';
import ShopPAge from './pages/shop/shop.component';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up-component.jsx'
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
   
    constructor(){

         super();

         this.state={
           currentUser :null
         }

    }
     
    unsubcribeFromAuth = null;
    componentDidMount(){

          this.unsubcribeFromAuth= auth.onAuthStateChanged(user =>
            {
          this.setState({currentUser:user});
          console.log(user);
        })
    }
     
    componentWillMount(){
     // this.unsubcribeFromAuth();
    }

  render(){
    return (
      <div >
       <Header currentUser={this.state.currentUser} />
    
       <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route exact path ='/shop' component={ShopPAge}/>
          <Route exact path ='/signin' component={SignInAndSignUpPage}/>
       </Switch>
     
      </div>
    );

  }

}
  



export default App;
