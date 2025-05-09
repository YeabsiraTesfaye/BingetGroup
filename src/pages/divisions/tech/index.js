import React, { useState } from 'react';
import ContactUs from "@/components/contactUs";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useRouter } from 'next/router';

const containerStyle = {
  width: '100%',
  height: '400px',
};


const branches = [
  { id: 1, name: 'Head Office', descriptinon: 'Bole Road, around Japan embassy, Rang building, 11th floor', location: { lat: 8.991741, lng: 38.780423 } },
];


const sections = {
  hero: {
    title: "BINGET Tech",
    subtitle: "Binget Tech is a technology powerhouse, developing cuttingedge financial solutions tailored for emerging markets. Our software products empower financial institutions with costeffective, scalable, and highly secure digital solutions that drive economic inclusion",
    image: "/tech.png",
  },
  about: {
    title: "Company Profile",
    contents: [
      "Binget Tech is the technology division of Binget Group, a diversified private limited company established in 2018 in Ethiopia. Initially focused on import and export activities, Binget Group expanded into the fintech sector following the National Bank of Ethiopia's directive in April 2020, which permitted non-bank entities to offer e-payment services. This strategic move led to the creation of Binget Tech, aiming to provide innovative digital financial solutions to enhance financial inclusion in Ethiopia",
      "Binget Tech's commitment to technological innovation and financial inclusion is evident in its efforts to provide secure, efficient, and user-friendly digital financial services. By leveraging advanced technology and strategic partnerships, Binget Tech aims to play a pivotal role in transforming Ethiopia's financial landscape and promoting economic growth."
    ]
  },
  products: {
    title: "Our Products",
    items: [
      { image: "/two.png", title: "Fin-tech", description: "Our cutting-edge fintech platform empowers businesses with a no-code environment and an API-first approach, ensuring seamless integration and customization. Whether you're an individual, a business, or an enterprise, our platform provides dedicated portals tailored to your needs.", redirect: '/projects/mobileMoney' },
      { image: "/ridePlatform.png", title: "Ride Hailing", description: "Transform your transportation business with our powerful ride-hailing app. Seamlessly connect passengers and drivers, offer real-time tracking, and enable secure payments—all in one user-friendly platform.", redirect: '/projects/rideHailing' },
      { image: "/core.png", title: "Core banking for Microfinances", description: "A robust core banking system tailored for microfinances, enabling seamless transactions, loan management, and financial operations with high security and efficiency.", redirect: '/projects/coreBanking' },
      { image: "/erp-front.png", title: "ERP", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
    ]
  },
  services: {
    title: "What We Offer",
    items: [
      { name: 'IT Consulting', description: 'Expert guidance on IT strategy, digital transformation, and system integration. Optimizing business processes with the latest technology solutions.' },
      { name: 'Financial System', description: 'Core Banking Solutions Secure, scalable banking and microfinance systems for seamless financial operations. Mobile Money Solutions – Digital payments, mobile wallets, and financial inclusion services.' },
      { name: 'Infrastructure Service', description: 'Robust IT infrastructure, including cloud computing, networking, and data center solutions. High-performance, secure, and scalable enterprise IT support.' },
      { name: 'SMS and USSD Gateway', description: 'Reliable messaging solutions for businesses, enabling customer engagement via SMS & USSD. Seamless integration with telecom operators for secure and fast communication.' },
      { name: 'Enterprise Resource Planing(ERP)', description: 'Streamlined business operations with custom ERP solutions. Integration of finance, HR, supply chain, and other core processes.' },
      { name: 'Software Development', description: 'Custom software solutions tailored to meet business needs. Agile development, cloud-based applications, and enterprise software.' },

    ],
  },
  unique: {
    title: "Why Choose BINGET Group?",
    points: [
      "Customer-first approach",
      "Cutting-edge innovation",
      "Trusted by thousands",
      "Diverse portfolio",
    ],
  },
  testimonials: [
    {
      name: "Sarah K.",
      text: "BINGET is a powerhouse! Their tech division helped us scale in no time.",
    },
    {
      name: "Abdi Y.",
      text: "Professionalism and reliability like no other company we've worked with.",
    },
  ],
};


export default function CompanyProfilePage() {
  const router = useRouter()

  const [expandedProduct, setExpandedProduct] = useState(null);
  const [center, setCenter] = useState({ lat: 8.991741, lng: 38.780423 });
  const [zoom, setZoom] = useState(13);
  const toggleDescription = (index) => {
    setExpandedProduct(prev => (prev === index ? null : index));
  };
  const listItemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggered effect
        duration: 0.6,
      },
    }),
  };
  return (
    <div className="font-sans text-gray-800">
      <section style={{ alignContent: 'center' }} className="keen-slider bg-white w-full min-h-screen bg-['/bg2.jpg']">
        <div className="keen-slider__slide flex flex-col md:flex-row items-center justify-center p-10 gap-8">
          <motion.img
            src={sections.hero.image}
            alt={sections.hero.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-2">{sections.hero.title}</h2>
            <p className="mb-4 text-lg text-gray-600">{sections.hero.subtitle}</p>
            <button
              onClick={() => window.open('https://bingettech.bingetgroup.com', '_blank', 'noopener,noreferrer')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Visit Website
            </button>
          </motion.div>
        </div>
      </section>
      <section className=" px-4 bg-gray-100">
        <AnimatedSection title={sections.about.title}>
          {sections.about.contents.map(x => (
            <p className="max-w-3xl mx-auto text-justify text-lg mb-2">{x}</p>

          ))}
        </AnimatedSection>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.products.items.map((product, index) => (
              <motion.div
                key={product.name}
                className="relative pl-8 text-lg font-medium"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
              >
                <div
                  key={product.name}
                  className="bg-gray-100 shadow-lg rounded-lg overflow-hidden  duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 object-cover justify-self-center"
                  />
                  <div className="px-4">
                    <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  </div>
                  <div className="px-4 py-2">
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-blue-700 cursor-pointer"
                    >
                      {expandedProduct === index ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                  {expandedProduct === index && (
                    <div className="overflow-hidden max-w-4xl mx-auto p-2 ">
                      {product.description}
                    </div>

                  )}

                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        {/* Services */}
        <AnimatedSection title={sections.services.title}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {sections.services.items.map((item, i) => (
              <motion.li
                key={i}
                className="bg-blue-100 text-blue-900 p-6 rounded-xl shadow hover:bg-blue-200 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </AnimatedSection>
      </section>
      <section className="bg-white">

        <h2 className="text-3xl font-bold text-center text-gray-900 py-10">Location</h2>

        <div className="flex flex-col lg:flex-row overflow-hidden shadow-lg bg-gray-400">

          <div className="w-full lg:w-1/2">

            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
              {branches.map(branch => (
                <Marker key={branch.id} position={branch.location} title={branch.name} />
              ))}
            </GoogleMap>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <table className="min-w-full divide-y divide-gray-700">

              <tbody className="divide-y divide-gray-700">
                {branches.map((div, index) => (
                  <motion.tr
                    key={div.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-gray-500 transition-colors duration-300 cursor-pointer"
                    onClick={() => {
                      setCenter(div.location)
                      setZoom(20)
                    }
                    }
                  >
                    <td className="px-6 py-4 text-white font-medium">{div.name}</td>
                    <td className="px-6 py-4 text-white">{div.descriptinon}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedSection({ title, children }) {
  return (
    <section className="py-16 px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}
