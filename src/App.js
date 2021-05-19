import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" 
 import Navbar from "./components/Navbar"
import NotFound from './components/NotFound';
import ProductContextProvider from "./Golbal/ProductContext"
import Products from "./components/Products"
import Cart from './components/Cart';
import CartContextProvider from "./Golbal/CartContext"

function App() {
  return (
    <div>
       < ProductContextProvider>
       <CartContextProvider>
       <Router>
       <Navbar/>
       
         <Switch>
           <Route path="/" exact component={Products}/>
           <Route path="/cart" exact component={Cart}/>
           <Route component={NotFound}/>
         </Switch>
       </Router>
       </CartContextProvider>
       </ProductContextProvider>
    </div>
  );
}

export default App;
