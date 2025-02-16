import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Infrastructure from './pages/Infrastructure';
import Achievement from './pages/Achievement';
import Inquiry from './pages/Inquiry';
import Contact from './pages/Contact';
import ClientsCarousel from './components/ClientCarousel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <ClientsCarousel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;