import React,{createContext,useState} from "react"
import dslr from  "../assest/dslr.jpg"
import headphon from "../assest/headphon.jpg"
import iphon from "../assest/iphon.jpg"
import microphon from "../assest/microphon.jpg"
import parfeum from "../assest/parfeum.jpg"
import ring from "../assest/ring.jpg"
import shoce from "../assest/shoce.jpg"
import watch from "../assest/watch.jpg"

export  const ProductsContext = createContext();

const ProductContextProvider = (props) => {
    const [Prducts] = useState([
        {id: 1, name: 'Dslr', price: 300, Image: dslr, status:'hot'},
        {id: 2, name: 'headphon ', price: 400, Image: headphon , status:'new'},
        {id: 3, name: 'iphon', price: 800, Image: iphon, status:'hot'},
        {id: 4, name: 'microphon', price: 200, Image: microphon, status:'new'},
        {id: 5, name: 'parfeum', price: 300, Image: parfeum, status:'hot'},
        {id: 6, name: 'ring', price: 500, Image: ring, status:'new'},
        {id: 7, name: 'shoce', price: 300, Image: shoce, status:'hot'},
        {id: 8, name: 'watch', price: 400, Image: watch, status:'new'}
    ]); 
    return (
   
        <ProductsContext.Provider value= {{Products: [...Prducts]}}>
      {props.children}
        </ProductsContext.Provider>

    )
}

export default ProductContextProvider;