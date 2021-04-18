import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom'


import HomePage from './pages/homePage/homepage';

const HatsPAge=() => (
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
)
function App() {
 
  return (
    <div >
    {/* <HomePage/> */}
     <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route exact path ='/hats' component={HatsPAge}/>
     </Switch>
   
    </div>
  );

}

export default App;
