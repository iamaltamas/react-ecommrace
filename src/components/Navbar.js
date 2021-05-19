import React, { useContext } from "react"
import { CartContext } from "../Golbal/CartContext"
import {Link} from "react-router-dom"


const Navbar = () =>{
    const {qty} = useContext(CartContext);

    return(

    <nav>
        <ul className="left"> 
            <li><Link to="/">IndiaExpress </Link></li>
        </ul>
        <ul className="right">
            <li><Link to="cart">
                <span className="showppingCard"><i className="fas fa-cart-arrow-down"></i>
                <span className="cardCount">{qty}</span></span>
                </Link></li>
        </ul>
    </nav>
    )
} 

export default Navbar;