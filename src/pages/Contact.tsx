import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import contact from '../images/contact.jpg';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Industrial Area, Manufacturing Hub, City - 123456'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 234 567 8900'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@mechtech.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.mechtech.com'
    }
  ];

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
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in Touch with Our Team</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <InquiryForm />
          </div>

          {/* Right Column - Contact Information */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-600">{info.title}</h3>
                      <p className="text-gray-600 mt-1">{info.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-6">Our Location</h2>
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

            {/* Business Hours */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-6">Business Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Monday: 9:00 AM - 6:00 PM',
                  'Tuesday: 9:00 AM - 6:00 PM',
                  'Wednesday: 9:00 AM - 6:00 PM',
                  'Thursday: 9:00 AM - 6:00 PM',
                  'Friday: 9:00 AM - 6:00 PM',
                  'Saturday: 9:00 AM - 2:00 PM',
                  'Sunday: Closed'
                ].map((hours, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-gray-700">{hours}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;