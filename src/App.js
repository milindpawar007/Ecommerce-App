import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'


import HomePage from './pages/homePage/homepage';
import ShopPAge from './pages/shop/shop.component'
import Header from './component/header/header.component.jsx'


function App() {
 
  return (
    <div >
     <Header/>
     <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route exact path ='/shop' component={ShopPAge}/>
     </Switch>
   
    </div>
  );

}

export default App;
