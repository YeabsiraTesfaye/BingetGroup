import React, { useRef, useState } from 'react';
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
    title: "BINGET Microfinance",
    subtitle: " Binget Microfinance Institution is a pioneering fintech-driven financial service provider dedicated to offering accessible, efficient, and secure banking solutions.",
    image: "/b_m.jpeg",
  },
  about: {
    title: "Company Profile",
    contents: [
      "Binget Microfinance Institutions S.C, established in 2018, works towards empowering individuals and businesses with digital financial solutions, fostering financial inclusion and supporting Ethiopia's digital economy.",
      "We launched Bingetbirr mobile banking in 2020 after a NBE directive. Licensed in 2023, it offers a digital wallet for deposits, withdrawals, transfers, remittances, top-ups, and bill payments."
    ]
  },
  savingProducts: {
    title: "Saving Products",
    items: [
      { image: "/fixed_time.webp", title: "Fixed Time Saving", description: "Our cutting-edge fintech platform empowers businesses with a no-code environment and an API-first approach, ensuring seamless integration and customization. Whether you're an individual, a business, or an enterprise, our platform provides dedicated portals tailored to your needs.", redirect: '/projects/mobileMoney' },
      { image: "/personal_saving.webp", title: "Personal Saving", description: "Transform your transportation business with our powerful ride-hailing app. Seamlessly connect passengers and drivers, offer real-time tracking, and enable secure payments—all in one user-friendly platform.", redirect: '/projects/rideHailing' },
      { image: "/muday.webp", title: "Muday Saving", description: "A robust core banking system tailored for microfinances, enabling seamless transactions, loan management, and financial operations with high security and efficiency.", redirect: '/projects/coreBanking' },
      { image: "/cildren_saving.webp", title: "Children`s Saving", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/saving.png", title: "Enterprise Saving", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/student_saving.avif", title: "Students Saving", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/interest_free.png", title: "Interest Free Saving", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
    ]
  },

  loanProducts: {
    title: "Loan Products",
    items: [
      { image: "/merchant.png", title: "Loan For Merchants", description: "Our cutting-edge fintech platform empowers businesses with a no-code environment and an API-first approach, ensuring seamless integration and customization. Whether you're an individual, a business, or an enterprise, our platform provides dedicated portals tailored to your needs.", redirect: '/projects/mobileMoney' },
      { image: "/loan.png", title: "Salary Loan", description: "Transform your transportation business with our powerful ride-hailing app. Seamlessly connect passengers and drivers, offer real-time tracking, and enable secure payments—all in one user-friendly platform.", redirect: '/projects/rideHailing' },
      { image: "/purchansing.webp", title: "Purchasing Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/employee.png", title: "Employees Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/house.webp", title: "House Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/loan.png", title: "Enterprise Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/student_loan.png", title: "Student Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/agriculture.png", title: "Agriculture Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/car_loan.webp", title: "Car Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/threewheeler.png", title: "Three Wheeler Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/loan.png", title: "Short Term Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
      { image: "/loan.png", title: "Enterprise Customers Loan", description: "Streamline your business operations with our powerful ERP system—integrating finance, HR, sales, and more for efficiency and growth. Simplify, automate, and scale seamlessly", redirect: '/projects/erp' },
    ]
  },
  services: {
    title: "What We Offer",
    items: [
      { name: 'Reasonable Interese', description: 'Expert guidance on IT strategy, digital transformation, and system integration. Optimizing business processes with the latest technology solutions.' },
      { name: 'Great Cuatomer Service', description: 'Core Banking Solutions Secure, scalable banking and microfinance systems for seamless financial operations. Mobile Money Solutions – Digital payments, mobile wallets, and financial inclusion services.' },
      { name: 'Trustworthiness', description: 'Robust IT infrastructure, including cloud computing, networking, and data center solutions. High-performance, secure, and scalable enterprise IT support.' },
      { name: 'Convinience', description: 'Robust IT infrastructure, including cloud computing, networking, and data center solutions. High-performance, secure, and scalable enterprise IT support.' },
      
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
    const ref = useRef()

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
                            onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
                        >
                            Get Started
                        </button>
          </motion.div>
        </div>
      </section>
      <section ref={ref} className=" px-4 bg-gray-100">
        <AnimatedSection title={sections.about.title}>
          {sections.about.contents.map(x => (
            <p className="max-w-3xl mx-auto text-justify text-lg mb-2">{x}</p>

          ))}
        </AnimatedSection>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{sections.savingProducts.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.savingProducts.items.map((product, index) => (
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
                  {/* <div className="px-4 py-2">
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

                  )} */}

                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{sections.loanProducts.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.loanProducts.items.map((product, index) => (
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
                  {/* <div className="px-4 py-2">
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

                  )} */}

                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-100">
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
