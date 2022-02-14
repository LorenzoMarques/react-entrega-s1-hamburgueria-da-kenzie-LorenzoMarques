import Product from "../Product/Product";
import "./style.css";

const Cart = ({ currentSale, remove }) => {
  if (currentSale[0] !== undefined) {
    return (
      <div>
        <div className="cart-flex">
          <div className="cart-container">
            <div className="carrinho-de-compras">
              <h3>Carrinho de Compras</h3>
            </div>
            {currentSale.map((element) => {
              return (
                <Product
                  product={element}
                  Children={"Remover"}
                  HandleClick={remove}
                  key={element.id}
                  classname="cart-product"
                />
              );
            })}
            <div className="total">
              <h3>Total</h3>
              <p>
                R$:{" "}
                {currentSale
                  .reduce((acc, cur) => acc + cur.price, 0)
                  .toString()
                  .split("")
                  .slice(0, 5)
                  .join("")}
              </p>
            </div>

            <button
              className="button-romove-all"
              onClick={() => {
                remove(0);
              }}
            >
              Remover Tudo
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="cart-flex-empy">
          <div className="cart-container-empty">
            <div className="carrinho-de-compras">
              <h3>Carrinho de Compras</h3>
            </div>
            <h3 className="empty-cart-h3">Sua sacola está vazia</h3>
            <span className="empty-cart-span">Adicione itens</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
