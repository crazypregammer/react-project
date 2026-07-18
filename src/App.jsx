import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import productsData from "./resources/products.json";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";

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
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard products={products} onDelete={handleDelete} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/products/:productId" element={<ItemDetails products={productsData} />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
