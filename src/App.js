import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'


import HomePage from './pages/homePage/homepage';
import ShopPAge from './pages/shop/shop.component'



function App() {
 
  return (
    <div >
    {/* <HomePage/> */}
     <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route exact path ='/shop' component={ShopPAge}/>
     </Switch>
   
    </div>
  );

}

export default App;
