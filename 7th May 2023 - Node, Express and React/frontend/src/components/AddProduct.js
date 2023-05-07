import axios from "axios";
import { useEffect, useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState();
  const [message, setMessage] = useState();
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/addProduct")
      .then((response) => setAllProducts(response.data.products));
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3000/addProduct", { name: product })
            .then((response) => setMessage(response.data.message));
        }}
      >
        <input
          placeholder="Product Name"
          type="text"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        />
        <input type="submit" value="Add Product" />
      </form>
      <p>{message}</p>
      <hr />
      <button
        onClick={() => {
          axios
            .delete("http://localhost:3000/addProduct", {
              name: allProducts[0].name,
            })
            .then((response) => setMessage(response.data.message));
        }}
      >
        Delete
      </button>
      <hr />
      <ul>
        {allProducts && allProducts.map((product) => <li>{product.name}</li>)}
      </ul>
    </>
  );
};

export default AddProduct;
