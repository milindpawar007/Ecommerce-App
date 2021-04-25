import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import HomePage from './pages/homePage/homepage';
import ShopPAge from './pages/shop/shop.component';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up-component.jsx'
import {auth ,createUSerProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
class App extends React.Component {
   
  
     
    unsubcribeFromAuth = null;
    componentDidMount(){
           const {setCurrentUser}= this.props;
          this.unsubcribeFromAuth= auth.onAuthStateChanged(async userAuth =>
        {
         
          if(userAuth)
          {
              const userRef = await createUSerProfileDocument(  userAuth)    ;
              
              userRef.onSnapshot(snapShot=>{
                 setCurrentUser ({
                    id: snapShot.id,
                    ...snapShot.data()
                  })
                               
                    
              });
              
          }
          setCurrentUser( userAuth)
        })

    }
     
    // componentWillMount(){
    //  // this.unsubcribeFromAuth();
    // }

  render(){
    return (
      <div >
       <Header  />
    
       <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route exact path ='/shop' component={ShopPAge}/>
          <Route exact path ='/signin' component={SignInAndSignUpPage}/>
       </Switch>
     
      </div>
    );

  }

}
  
const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)( App);
