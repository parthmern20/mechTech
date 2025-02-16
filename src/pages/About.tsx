import React from 'react';
import { motion } from 'framer-motion';
import InquiryForm from '../components/InquiryForm';
import ProductCarousel from '../components/ProductCarousel';
import { PenTool as Tool, Users, Target, Award } from 'lucide-react';

const About = () => {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl">Excellence in Engineering Since 1990</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <InquiryForm />
            
            {/* Product Quick Links */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              {...fadeIn}
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Our Products</h3>
              <div className="space-y-2">
                {['Mechanical Pump', 'Hydraulic Pump', 'Fabrication', 'Machining Works', 'Die and Mould Parts', 'Forged Parts'].map((product) => (
                  <motion.div
                    key={product}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-primary-50 rounded-lg cursor-pointer hover:bg-primary-100 transition-colors"
                  >
                    <span className="text-primary-700">{product}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - About Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            {...fadeIn}
          >
            {/* Company Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Company Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                MechTech Industries has been at the forefront of manufacturing excellence for over three decades. 
                We specialize in precision engineering solutions, providing high-quality mechanical and hydraulic 
                components to industries worldwide. <br /> <br />

                We MechTech Industries pleased to introduce ourselves as a professional designer and maker of various machinery parts since 1999, The company has earned its reputation for both quality and expertise and is happy to extend its cutting-edge technology and services to the valued customers for better products and competitiveness. <br /> <br />


<strong>Product Details:</strong> <br /> 
1. Hydraulic cylinder and Power pack <br />
2. Hydraulic press <br />
3. Special purpose machines as per customer requirement<br />
4. Food process equipments<br />
5. Railway parts<br />
6. Windmill parts<br />
7. Press machine parts<br />
8. Hydraulic injection molding machine parts<br />
9. Process equipments as per customer requirement<br />
10. Structural fabrication with & without machining<br />
11. Die and mould parts<br />
12. Project work<br />
13. Extruder machine parts<br />
14. Hydraulic machine parts<br />
15. Hydraulic power pack parts<br />
16. Die forged / open forged with machined parts<br />
17. Import substitute precision components development<br /><br />

For most efficient services, <strong>MechTech Industries</strong> offers ‘One Stop Solution’ to its customers and is able to present all kinds machinery parts desired by the customers according to the drawing(s) / sample provided.<br /><br />

<strong>MechTech Industries</strong> is able to provide ‘Total Solution’ to both Original Equipment manufacturers and End users with experienced and professional assistance. <br /><br />

 

» Capital: INR 900 lac<br />
» Factory area: 1000 m<br />
» Employee: 50<br /><br />

 

<strong>History</strong><br />
1999 Established in Ahmedabad, Gujarat, India.<br /><br />


Expanded into the Engineering Division and undertook all responsibilities of developing molds, fixtures, inspection jigs and processing machinery needed for all Engineering industries for Machining & Assembly Department, Fabrication / Design & Assembly Department, Production Control Department and Processing Department.<br /><br />

<strong>2006 ISO 9001: 2008</strong> certification was awarded.<br /><br />

 

<strong>Company Philosophy</strong><br />
» Specialization- To keep transcending and strengthening our core competence<br />
» Integrity- To be trustworthy to our customers<br />
» Innovation- To enliven our positive and innovative spirit<br />
» Customer Satisfaction- To increase our customers’ competitiveness via value-added products of excellence.<br /><br />

 

<strong>List of Activities</strong><br />
» Machine Component as per customer requirement<br />
» Manufacture of special and general-purpose machinery to suit various applications.<br />
» Structural Fabrication with post welds heat Treatment & Radiography, Vessels & Receivers with 100% radiography, Skids &

    Packages under third party inspections.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-primary-50 rounded-lg"
                >
                  <Tool className="text-primary-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">State-of-the-art machinery and precision tools</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-primary-50 rounded-lg"
                >
                  <Users className="text-primary-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Highly skilled engineers and technicians</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-primary-50 rounded-lg"
                >
                  <Target className="text-primary-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Quality Focus</h3>
                  <p className="text-gray-600">Rigorous quality control standards</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-primary-50 rounded-lg"
                >
                  <Award className="text-primary-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Certified Excellence</h3>
                  <p className="text-gray-600">International quality certifications</p>
                </motion.div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Vision & Mission</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global leader in precision engineering solutions, driving innovation 
                    and excellence in manufacturing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver superior quality products and services that exceed customer expectations, 
                    while maintaining the highest standards of innovation, efficiency, and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">Our Trusted Clients</h2>
          <ProductCarousel />
        </motion.div>
      </div>
    </div>
  );
};

export default About;