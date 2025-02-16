import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-gradient-to-r from-primary-900 to-primary-700 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${products[3].image})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
            <p className="text-xl md:text-2xl">Precision Engineered Solutions</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <InquiryForm />
            
            {/* Quick Navigation */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              {...fadeIn}
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Quick Navigation</h3>
              <div className="space-y-2">
                {products.map((product: any) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-3 bg-primary-50 rounded-lg cursor-pointer hover:bg-primary-100 transition-colors flex items-center justify-between"
                    >
                      <span className="text-primary-700">{product.name}</span>
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Products Grid */}
          <motion.div
            className="lg:col-span-2"
            {...fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product: any) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="block"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary-600 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                      <div className="mt-4 flex items-center text-primary-500 text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;