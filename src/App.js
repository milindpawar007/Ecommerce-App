import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import HomePage from './pages/homePage/homepage';
import ShopPAge from './pages/shop/shop.component';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up-component.jsx'
import {auth ,createUSerProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
   
    constructor(){

         super();

         this.state={
           currentUser :null
         }

    }
     
    unsubcribeFromAuth = null;
    componentDidMount(){

          this.unsubcribeFromAuth= auth.onAuthStateChanged(async userAuth =>
        {
         
          if(userAuth)
          {
              const userRef = await createUSerProfileDocument(  userAuth)    ;
              
              userRef.onSnapshot(snapShot=>{
                this.setState({ 
                  currentUser:{
                    id: snapShot.id,
                    ...snapShot.data()
                  }
                }   );

                console.log(this.state)
                    
              });
              
          }
           this.setState({currentUser : userAuth})
        })

    }
     
    // componentWillMount(){
    //  // this.unsubcribeFromAuth();
    // }

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
