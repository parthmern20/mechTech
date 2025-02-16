import React from 'react';
          import Slider from 'react-slick';
          import { motion } from 'framer-motion';
          import "slick-carousel/slick/slick.css";
          import "slick-carousel/slick/slick-theme.css";
          import logo1 from '../images/logo/logo1.png';
          import logo2 from '../images/logo/logo2.png';          
          import logo3 from '../images/logo/logo3.png';          
          import logo4 from '../images/logo/logo4.jpg';  
          import logo5 from '../images/logo/logo5.png';
          import logo6 from '../images/logo/logo6.jpg';
          import logo7 from '../images/logo/logo7.png';
          
          
          const logos = [
            {
              id: 1,
              name: 'Client 1',
              image: logo1,
            },  
            {
              id: 2,
              name: 'Client 2',
              image: logo2,
            },
            {
              id: 3,
              name: 'Client 3',
              image: logo3,
            },
            {
              id: 4,
              name: 'Client 4',
              image: logo4,
            },
            {
              id: 5,
              name: 'Client 5',
              image: logo5,
            },
            {
              id: 6,
              name: 'Client 6',
              image: logo6,
            },
            {
              id: 7,
              name: 'Client 7',
              image: logo7,
            }
            // Add more products as needed
          ];
     
          
          
          
          
            
          const ClientsCarousel = () => {
            const settings = {
              dots: true,
              infinite: true,
              speed: 3000,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: 'linear',
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]
            };
          
            return (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                 <h2 className="text-3xl font-bold text-primary-600 mb-6">Our Clients</h2>
                <Slider {...settings}>
                  {logos.map((logo: any) => (
                    <motion.div
                      key={logo.id}
                      whileHover={{ scale: 1.05 }}
                      className="px-4"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2">
                        <img
                          src={logo.image}
                          alt={logo.name}
                          className="w-full h-40 object-center"
                        />
                        {/* <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        </div> */}
                      </div>
                    </motion.div>
                  ))}
                </Slider>
              </div>
            );
          };
          
          export default ClientsCarousel;
       