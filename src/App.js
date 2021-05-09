import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" 
 import Navbar from "./components/Navbar"
import NotFound from './components/NotFound';
import ProductContextProvider from "./Golbal/ProductContext"
import Products from "./components/Products"
import Cart from './components/Cart';
function App() {
  return (
    <div>
       < ProductContextProvider>
       <Router>
       <Navbar/>
       
         <Switch>
           <Route path="/" exact component={Products}/>
           <Route path="/cart" exact component={Cart}/>
           <Route component={NotFound}/>
         </Switch>
       </Router>
       </ProductContextProvider>
    </div>
  );
}

export default App;
