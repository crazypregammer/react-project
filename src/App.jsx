import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Navbar  from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="content">
          <h1>Home</h1>
          <p>Welcome to our shop.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App
