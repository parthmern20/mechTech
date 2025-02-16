import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-700 text-white px-10">
      <div className="container-custom py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Leading manufacturer of industrial pumps and machinery parts with over two decades of experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/inquiry" className="text-gray-300 hover:text-accent transition-colors">
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@manufacturepro.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Industrial Area, City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 ManufacturePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;