import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Providers from './components/providers/providers.js';
import Bill from './components/bill/bill';
import Overview from './components/overview/overview';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import HamburgerIcon from '../src/assets/hamburger_menu.png';
import { useEffect, useState } from 'react';

function App() {

  const [getData, setData] = useState({
    show: true
  })

var hideNavbar = ()=>{
  if(getData.show === true){
    setData({
      ...getData,
      show : false
    })
  }else{
    setData({
      ...getData,
      show : true
    })
  }
}


  return (
    <BrowserRouter>
      <div className="App">

          <Navbar hide={getData.show}/>
          <div className="window">
            <div className="show-hide">
              <button className="btn hamburger" onClick={() => hideNavbar()}><img src={HamburgerIcon} height="30px" width="30px" alt=""></img></button><input className="input-search" placeholder="Search" width="100%"></input>
            </div>
            
            <Route component={Profile} exact path="/profile" />
            <Route component={Providers} exact path="/providers" />
            <Route component={Bill} exact path = "/bill"/>
            <Route component={Overview} exact path='/'/>
          </div>
          
        </div>
          
    
    </BrowserRouter>
    
  );
}

export default App;
