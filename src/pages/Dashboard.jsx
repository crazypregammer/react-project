import List from "../components/List";

function Dashboard({ products, onDelete }) {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to our shop.</p>
      <List products={products} onDelete={onDelete} />
    </>
  );
}

export default Dashboard;
