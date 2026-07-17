function ListItems({ product, onDelete }) {
  return (
    <li className="list-item">
      <img className="list-item-image" src={product.thumbnail} alt={product.title} />

      <div className="list-item-info">
        <h3>{product.title}</h3>
        <p className="price">{product.price} €</p>
        <p className="stock">Stock: {product.stock}</p>
      </div>

      <button className="delete-btn" onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </li>
  );
}

export default ListItems;
