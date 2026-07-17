import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Navbar  from './components/Navbar';
import List from './components/List';
import productsData from './resources/products.json';
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="content">
          <h1>Home</h1>
          <p>Welcome to our shop.</p>

          <List products={products} onDelete={handleDelete} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
