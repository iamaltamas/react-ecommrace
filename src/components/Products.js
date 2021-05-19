import React,{useContext} from "react"
import{ProductsContext} from "../Golbal/ProductContext"
import {CartContext} from "../Golbal/CartContext"
import Banner from "./Banner"
const Products = () =>{
const {Products} = useContext (ProductsContext);
const {dispatch} = useContext(CartContext);

return(
  <div className="container">
    <Banner/>
  <div className="products">
    {Products.map((product) =>(
      <div className="product" key={product.div}>
      <div className="product-image">
        <img src={product.Image} alt="not found"/>
        </div>
        <div className="product-details">
           <div className="product-name">
             {product.name}
             </div>
             <div className="product-price"> 
              ${product.price}.00
             </div>
        </div>
        <div className="add-to-cart" onClick={()=> dispatch({type:
          'Add_to_cart', id:product.id,product})}>add to cart</div>
        {product.status==='hot' ?<div className="hot">Hot</div>:''}
        {product.status==='new' ?<div className="new">New</div>:''}
      </div>
    ))}
    </div>
  </div>
)
}

export default Products;