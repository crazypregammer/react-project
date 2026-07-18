import { Link } from "react-router-dom";


function ListItems({ product, onDelete }) {
  const isLowStock = product.stock < 10;

  return (
    <Link to={`/products/${product.id}`}>
    <li className="list-item">
      <img className="list-item-image" src={product.thumbnail} alt={product.title} />

      <div className="list-item-info">
        <h3>{product.title}</h3>
        <p className="price">{product.price} €</p>
        <p className={isLowStock ? "stock stock-low" : "stock"}>
          {isLowStock ? "⚠️" : "✅"} Stock: {product.stock}
        </p>
      </div>

      <button className="delete-btn" onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </li>
    </Link>
  );
}

export default ListItems;
