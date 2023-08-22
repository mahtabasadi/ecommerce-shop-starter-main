
// import react router dom 
import React , {createContext , useState , useEffect} from 'react'

// create context 
export const ProductContext = createContext()


const ProductProveder = ({children}) => {
  // products state 
const [products , setProducts] = useState([]);
// fetch products 
useEffect(()=>{
  const fetchProducts = async () => {
    const respons = await fetch('https://fakestoreapi.com/products');
    const data = await respons.json()
    setProducts(data)
  }
  fetchProducts()
},[])

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProveder;
