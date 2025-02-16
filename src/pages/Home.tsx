import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Award } from "lucide-react";
import InquiryForm from "../components/InquiryForm";
import ProductCarousel from "../components/ProductCarousel";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.div
        className="relative h-[600px] bg-gradient-to-r from-primary-900 to-primary-700 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to MechTech Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Leading manufacturer of precision engineering solutions
            </p>
            <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Explore Our Products
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Products and Inquiry Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-1">
            <InquiryForm />
          </div>
          <motion.div
            className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-primary-600 mb-6">
              Welcome to MechTech
            </h2>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> */}
            <p className="text-gray-600 leading-relaxed">
              We, <strong>MechTech Industries</strong>, have established
              ourselves as one of the premiere manufactures and suppliers of
              qualitative range of industrial equipments. Our prominence in this
              domain of industrial equipment has been due to the unique
              qualities that we possess in terms of infrastructure, tem
              professional competencies and customer collaboration. Our services
              and products are highly valuable as we offer them with a stamp of
              quality and cordiality. We are proud that our equipment have high
              performing capabilities, a sturdy body structure and can custom
              made with dimensional accuracies. <br /> <br />
              We are progressive minded people with customers being our prime
              focus and central all our activities to satisfy them. We have
              attainted customer satisfaction to the maximum which has enabled
              us to gain a large number of clients. Customers have shown their
              appreciation and have trust and belief in our company. They are
              also pleased with the prices that we offer. <br /> <br />
              <strong>MechTech Industries</strong>, Ahmedabad, India offers wide
              range of the highly precise hydraulic cylinder parts. With modern
              and sophisticated machineries and techniques, we are able to
              provide high quality hydraulic cylinder parts.
            </p>
            {/* </div> */}
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            Our Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product: any, index: any) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="block"
              >
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-50 p-4 rounded-lg text-center cursor-pointer hover:bg-primary-100 transition-colors"
                >
                  {/* <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                  /> */}
                  <h3 className="text-primary-700 font-semibold">
                    {product.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Product Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
           <h2 className="text-3xl font-bold text-primary-600 mt-6 ml-8">Products</h2>
          <ProductCarousel />
        </motion.div>

        {/* Contact and Location Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Address */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8" {...fadeIn}>
            <h3 className="text-2xl font-semibold text-primary-600 mb-4">
              Our Address
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  123 Industrial Area, Manufacturing Hub, City - 123456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-500" />
                <p className="text-gray-600">+1 234 567 8900</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-500" />
                <p className="text-gray-600">contact@mechtech.com</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8" {...fadeIn}>
            <h3 className="text-2xl font-semibold text-primary-600 mb-4">
              Our Location
            </h3>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </motion.div>

          {/* Certificates */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8" {...fadeIn}>
            <h3 className="text-2xl font-semibold text-primary-600 mb-4">
              Our Certifications
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((cert) => (
                <motion.div
                  key={cert}
                  className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <Award className="text-primary-500" />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
