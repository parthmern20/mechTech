import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/products/${product.slug}`}>
        <div className="relative h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
            {product.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;