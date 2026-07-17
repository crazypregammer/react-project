import ListItems from "./ListItems";

function List({ products, onDelete }) {
  return (
    <ul>
      {products.map((product) => (
        <ListItems
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default List;
