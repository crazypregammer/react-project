function ListItems ({product, onDelete}) {

    return(
        <li className="ListItems">
            <img className="listIemsImage" src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="listItemsPrice">{product.price} €</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => onDelete(product.id)}>Delete</button>
        </li>
    );
}



export default ListItems;