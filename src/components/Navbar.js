import React from "react"



const Navbar = () =>{

    return(

    <nav>
        <ul className="left"> 
            <li><a href="">IndiaExpress </a></li>
        </ul>
        <ul className="right">
            <li><a href="">
                <span className="showppingCard"><i class="fas fa-cart-arrow-down"></i>
                <span className="cardCount">0 </span></span>
                </a></li>
        </ul>
        <div>
            <h1>altamas</h1>
        </div>
    </nav>
    )
}

export default Navbar;