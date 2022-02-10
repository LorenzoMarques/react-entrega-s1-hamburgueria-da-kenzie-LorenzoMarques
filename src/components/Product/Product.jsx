const Product = ({ product, HandleClick, Children, classname }) => {
  return (
    <div className={classname}>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
      </div>
      <p>R$: {product.price}</p>
      <button onClick={() => HandleClick(product.id)}>{Children}</button>
    </div>
  );
};

export default Product;
