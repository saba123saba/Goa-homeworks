import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  console.log(products)

  return(
    <div>
      <h1>Product List:</h1>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList;