import React from 'react';
import { motion } from 'framer-motion';
import { Factory, PenTool as Tool, Cpu, Wrench, Database, Cog } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Infrastructure = () => {
  const facilities = [
    {
      icon: Factory,
      title: 'Manufacturing Unit',
      description: 'State-of-the-art manufacturing facility spanning 50,000 sq ft with modern machinery and equipment.'
    },
    {
      icon: Tool,
      title: 'Tool Room',
      description: 'Precision tool room equipped with advanced CNC machines and measuring instruments.'
    },
    {
      icon: Cpu,
      title: 'R&D Center',
      description: 'Dedicated research and development center for product innovation and process improvement.'
    },
    {
      icon: Wrench,
      title: 'Assembly Line',
      description: 'Automated assembly lines with quality control checkpoints at every stage.'
    },
    {
      icon: Database,
      title: 'Storage Facility',
      description: 'Temperature-controlled warehousing facility for raw materials and finished products.'
    },
    {
      icon: Cog,
      title: 'Testing Lab',
      description: 'Advanced testing laboratory for product validation and quality assurance.'
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Infrastructure</h1>
            <p className="text-xl md:text-2xl">World-Class Manufacturing Facilities</p>
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

          {/* Right Column - Infrastructure Details */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Manufacturing Excellence</h2>
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art infrastructure is designed to deliver precision engineering solutions 
                with the highest quality standards. We have invested in cutting-edge technology and 
                equipment to ensure superior product quality and efficient manufacturing processes.
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <facility.icon className="w-8 h-8 text-primary-500 mb-4" />
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quality Standards */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Quality Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">ISO 9001:2015</h3>
                  <p className="text-gray-600">Certified quality management system ensuring consistent quality.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">Industry 4.0</h3>
                  <p className="text-gray-600">Smart manufacturing with IoT integration and real-time monitoring.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;