import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Target, Medal, Crown } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Achievement = () => {
  const achievements = [
    {
      icon: Trophy,
      year: '2023',
      title: 'Excellence in Manufacturing',
      description: 'Recognized for outstanding contribution to the manufacturing sector.'
    },
    {
      icon: Star,
      year: '2022',
      title: 'Quality Leadership Award',
      description: 'Awarded for maintaining exceptional quality standards in production.'
    },
    {
      icon: Medal,
      year: '2021',
      title: 'Innovation Excellence',
      description: 'Honored for innovative solutions in hydraulic systems.'
    },
    {
      icon: Crown,
      year: '2020',
      title: 'Best Manufacturer',
      description: 'Awarded as the best manufacturer in precision engineering category.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      achievement: 'Expanded manufacturing capacity by 200%'
    },
    {
      year: '2022',
      achievement: 'Launched new R&D center'
    },
    {
      year: '2021',
      achievement: 'Achieved ISO 9001:2015 certification'
    },
    {
      year: '2020',
      achievement: 'Completed 1000+ successful projects'
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Achievements</h1>
            <p className="text-xl md:text-2xl">A Legacy of Excellence</p>
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

          {/* Right Column - Achievements */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Awards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <achievement.icon className="w-8 h-8 text-primary-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-primary-600 font-medium">{achievement.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1">{achievement.title}</h3>
                      <p className="text-gray-600 mt-2">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-6">Growth Timeline</h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 pb-8 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute left-0 top-0 w-2 h-full">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary-500"></div>
                      {index !== milestones.length - 1 && (
                        <div className="absolute left-[3px] top-2 w-[2px] h-full bg-primary-200"></div>
                      )}
                    </div>
                    <div className="text-sm font-medium text-primary-600">{milestone.year}</div>
                    <div className="mt-1 text-gray-800">{milestone.achievement}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Projects Completed', value: '1000+' },
                { label: 'Happy Clients', value: '500+' },
                { label: 'Years of Excellence', value: '30+' },
                { label: 'Team Members', value: '200+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;