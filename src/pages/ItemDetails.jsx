import { useParams } from "react-router-dom";

function ItemDetails(props) {
  const { productId } = useParams();


  // Find product inside props.products
  const foundProduct = props.products.find((oneProduct) => {
    return oneProduct.id === Number(productId);
  });

  if (!foundProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="ItemDetails">
      <h1>{foundProduct.title}</h1>
      <img src={foundProduct.thumbnail} alt={foundProduct.title} />
      <p>Price: {foundProduct.price} €</p>
      <p>Stock: {foundProduct.stock}</p>
      <p>Description: {foundProduct.description}</p>
    </div>
  );
}

export default ItemDetails;
