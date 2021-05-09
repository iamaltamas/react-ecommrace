import React,{useContext} from "react"
import{ProductsContext} from "../Golbal/ProductContext"
import Banner from "./Banner"
const Products = () =>{
const {Products} = useContext (ProductsContext);
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
        <div className="add-to-cart">add to cart</div>
        {product.status==='hot' ?<div className="hot">Hot</div>:''}
        {product.status==='new' ?<div className="new">New</div>:''}
      </div>
    ))}
    </div>
  </div>
)
}

export default Products;