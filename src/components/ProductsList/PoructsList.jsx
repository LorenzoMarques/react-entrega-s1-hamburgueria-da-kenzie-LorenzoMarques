import Product from "../Product/Product";
import "./style.css";

const ProductList = ({ products, HandleClick }) => {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <Product
          product={product}
          HandleClick={HandleClick}
          Children={"Adicionar"}
          key={product.id}
          classname={"product-list"}
        />
      ))}
    </div>
  );
};

export default ProductList;
