import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    inquiryType: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold text-primary-600 mb-4">Inquiry Form</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Please Enter Your Name'
            value={formData.name}
            onChange={handleChange}
            className="mt-1  block w-full rounded-md  shadow-sm  focus:border-primary-500 border-gray-300 border-2 focus:outline-none hover:border-primary-500 p-1"
            required
          />
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">Inquiry Type</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border-2 focus:outline-none hover:border-primary-500 p-1"
            required
          >
            <option className='text-gray-100' value="" disabled hidden>Please Select Inquiry Type</option>
            <option value="mechanical">Mechanical Pump</option>
            <option value="hydraulic">Hydraulic Pump</option>
            <option value="fabrication">Fabrication</option>
            <option value="machining">Machining Works</option>
            <option value="die">Die and Mould Parts</option>
            <option value="forged">Forged and Machine Parts</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder='Please Enter Your City'
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border-2 focus:outline-none hover:border-primary-500 p-1"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Please Enter Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border-2 focus:outline-none hover:border-primary-500 p-1"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Please Enter Your Email'
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border-2 focus:outline-none hover:border-primary-500 p-1"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Write Your Message Here'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border-2 focus:outline-none hover:border-primary-500 p-1"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200"
        >
          Submit Inquiry
        </button>
      </form>
    </motion.div>
  );
};

export default InquiryForm;