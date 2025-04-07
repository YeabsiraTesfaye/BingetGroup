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
  { id: 1, name: 'Gelan', descriptinon: 'near to Addis Ababa warehouse assembly plant designed to reassemble imported disassembled parts, optimizing cost-efficiency', location: { lat: 8.9986, lng: 38.7870 } },
  { id: 2, name: 'Haile Garment', descriptinon: 'Addis Ababa warehouse for efficient inventory management', location: { lat: 9.0032, lng: 38.7681 } },
  { id: 3, name: 'Kality', descriptinon: 'Addis Ababa  warehouse for high volume of vehiclesThrough innovation and customer focus, Binget Automotive is revolutionizing transportation in Ethiopia.', location: { lat: 9.0084, lng: 38.7472 } },
];


const sections = {
  hero: {
    title: "Welcome to BINGET Tech",
    subtitle: "Empowering industries, transforming lives.",
    image: "/bg.jpg",
  },
  about: {
    title: "Our Company",
    content:
      "Binget Tech is a technology powerhouse, developing cutting edge financial solutions tailored for emerging markets. Our software products empower financial institutions with costeffective, scalable, and highly secure digital solutions that drive economic inclusion.",
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
      {name:'IT Consulting', description:'Expert guidance on IT strategy, digital transformation, and system integration. Optimizing business processes with the latest technology solutions.'},
      {name:'Financial System', description:'Core Banking Solutions Secure, scalable banking and microfinance systems for seamless financial operations. Mobile Money Solutions – Digital payments, mobile wallets, and financial inclusion services.'},
      {name:'Infrastructure Service', description:'Robust IT infrastructure, including cloud computing, networking, and data center solutions. High-performance, secure, and scalable enterprise IT support.'},
      {name:'SMS and USSD Gateway', description:'Reliable messaging solutions for businesses, enabling customer engagement via SMS & USSD. Seamless integration with telecom operators for secure and fast communication.'},
      {name:'Enterprise Resource Planing(ERP)', description:'Streamlined business operations with custom ERP solutions. Integration of finance, HR, supply chain, and other core processes.'},
      {name:'Software Development', description:'Custom software solutions tailored to meet business needs. Agile development, cloud-based applications, and enterprise software.'},
      
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
  const [center, setCenter] = useState({ lat: 9.03, lng: 38.74, });
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
      <section className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${sections.hero.image})` }}>
        <div className="absolute inset-0 bg-white/80 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-black text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {sections.hero.title}
          </motion.h1>
          <motion.p
            className="text-black text-lg max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {sections.hero.subtitle}
          </motion.p>
          
          <motion.p
            className="text-black text-lg max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
             <button
                      onClick={() => router.push('https://binget-tech-website-walletbirr1.vercel.app')}
                      className="text-white cursor-pointer bg-blue-900 rounded-sm p-4"
                    >
                      Visit Website
                    </button>
          </motion.p>
        </div>
      </section>
      <section className=" px-4 bg-white">
        <AnimatedSection title={sections.about.title}>
          <p className="max-w-3xl mx-auto text-center text-lg">{sections.about.content}</p>
        </AnimatedSection>
      </section>
      <section className="py-16 px-4 bg-gray-100">
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
                  className="bg-white rounded-lg overflow-hidden  duration-300"
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
