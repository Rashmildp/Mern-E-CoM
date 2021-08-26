
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen  from './Screens/HomeScreen';
import ProducrScreen from './Screens/ProducrScreen';
import CartScreen from './Screens/CartScreen';
import Navbar from './Component/Navbar';
import Backdrop from './Component/backdrop';
import SideDrawer
 from './Component/sideDrawer';



function App() {
  return (
    <Router>
   
     <Navbar></Navbar>
     <SideDrawer></SideDrawer>
     <Backdrop></Backdrop>
    
 <main>
   <Switch>
     <Route exact path="/" component={HomeScreen}></Route>
     <Route exact path="/product/:id" component={ProducrScreen}></Route>
     <Route exact path="/cart" component={CartScreen}></Route>
   </Switch>
 </main>

   
    </Router>
  );
}

export default App;
