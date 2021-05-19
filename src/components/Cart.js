import React,{useContext} from "react"
import {CartContext} from "../Golbal/CartContext"
const Cart = () =>
{
    const {shoppingCart,totalprice,qty,dispatch}= useContext(CartContext);
    
    return(
        
        <div className="cart-container">
        
            <div className="cart-details" style={{marginTop:'100px'}}>

            {shoppingCart.length > 0 ?
            shoppingCart.map(cart =>(
                <div className="cart" key={cart.id}>
                   <span className="cart-imag"><img src={cart.Image} alt="not found" /> </span>
                   <span className="cart-product-name">{cart.name}</span>
                   <span className="cart-product-price">{cart.price}</span>
                   <span className="inc"><i className="fas fa-plus"></i></span>
                   <span className="product-quantity">{cart.qty}</span>
                   <span className="dec"><i className="fas fa-minus"></i></span>
                   <span className="product-total-price">500:00</span>
                   <span className="delete-product"><i className="far fa-trash-alt"></i></span>
                </div>
            ))
            :'your cart is empty'}

            </div>

        </div>
    )

}

export default Cart;