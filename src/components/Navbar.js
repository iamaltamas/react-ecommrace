import React from "react"
import {Link} from "react-router-dom"


const Navbar = () =>{

    return(

    <nav>
        <ul className="left"> 
            <li><Link to="/">IndiaExpress </Link></li>
        </ul>
        <ul className="right">
            <li><Link to="cart">
                <span className="showppingCard"><i className="fas fa-cart-arrow-down"></i>
                <span className="cardCount">0 </span></span>
                </Link></li>
        </ul>
    </nav>
    )
} 

export default Navbar;