import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaCheckCircle, FaCode, FaHeadset, FaMoneyBill, FaUsers } from "react-icons/fa";
import { BsBoxSeamFill, BsCodeSlash, BsPerson } from "react-icons/bs";
import { RiEmotionHappyLine, RiUserStarFill } from "react-icons/ri";
import { GrMultiple, GrTechnology } from "react-icons/gr";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useRouter } from 'next/router';
import { Award } from 'lucide-react';
const divisions = [
  {
    id: 'automotive',
    title: 'BINGET Automotive',
    description: ' Binget Automotive is a leading force in Ethiopia’s automotive sector, setting new standards in vehicle imports, sales, andassembly. We provide customers with access to world-class brands while ensuring affordability and reliability.',
    image: '/automotive.jpg',
    bgColor: 'oklch(0.16 0.05 139.95)',
    features: [
      { title: 'Premium Car Imports', description: 'We specialize in high-demand brands such as Land Rover, Toyota, and other premium manufacturers, ensuring our clients receive top-tier vehicles with reliable after-sales service.' },
      { title: 'Two-Wheelers & Three-Wheelers', description: 'Through our partnership with TVS and our own Binget brand, we provide cost-effective mobility solutions for thousands of customers, including businesses and individuals.' },
      { title: ' 6,000+ Monthly Sales', description: 'Our sales figures demonstrate our market leadership and the trust our customers place in us.' },
    ],
    path: '/divisions/automotive'
  },
  {
    id: 'realstate',
    title: 'GY Real Estate',
    description: ' G Y Real Estate is committed to shaping Ethiopia’s urban landscape by developing iconic, high-value properties in prime locations. Our properties cater to high-end residential, commercial, and mixed-use developments that reflect modern architectural excellence',
    image: '/gy.jpg',
    bgColor: 'oklch(0.46 0.09 78.42)',
    features: [
      { title: 'Strategic Locations', description: ' Our developments are located in Addis Ababa’s most sought-after areas, including Bole, 22 Golagul, and other emerging commercial hubs' },
      { title: ' Expanding Portfolio', description: 'We continue to acquire and develop properties that elevate the city’s real estate standards' },
      { title: '  Sustainable & Modern Designs', description: 'Our projects are designed to meet global standards in luxury, efficiency, and sustainability' },
    ],
    path: '/divisions/realestate'
  },
  {
    id: 'tech',
    title: 'BINGET Tech',
    description: ' Binget Tech is a technology powerhouse, developing cuttingedge financial solutions tailored for emerging markets. Our software products empower financial institutions with costeffective, scalable, and highly secure digital solutions that drive economic inclusion',
    image: '/tech.png',
    bgColor: 'oklch(0.16 0.05 139.95)',
    features: [
      { title: 'Microfinance Core Banking System ($3M)', description: ' A comprehensive solution that empowers microfinance institutions with seamless banking operations' },
      { title: 'Digital Mobile Money (Binget Birr, $2M)', description: 'A fintech platform that enables fast, secure, and scalable mobile money transactions' },
      { title: 'Microcredit & Lending Solutions', description: ' Providing businesses and individuals with access to instant, flexible credit.' },
      { title: 'Enterprise Resource Planning (ERP)', description: 'An all-in-one business management system designed to enhance operational efficiency.' },
      { title: 'Ride-Hailing Platform (Via Ride, $1M)', description: ' A homegrown ride-sharing service that competes with global brands while catering to local market needs' },
      { title: 'Other Digital Financial Solutions', description: ' A broad suite of banking, payment, and enterprise solutions that replace and outperform existing products in the ecosystem.' },
    ],
    path: '/divisions/tech'
  },
  {
    id: 'import/export',
    title: 'BINGET Import/Export',
    description: 'Binget Export is a key player in Ethiopia’s export market, focusing on premium coffee and high-quality oil products. Our business is built on the principles of sustainability, ethical sourcing, and global market expansion.',
    image: '/export.jpg',
    bgColor: 'oklch(0.46 0.09 78.42)',
    features: [
      { title: 'High volume of USD Annual Exports', description: ' A significant contributor to Ethiopia’s foreign exchange earnings.' },
      { title: 'High-Quality Ethiopian Coffee', description: ' Exporting specialty-grade coffee that competes in global markets' },
      { title: 'Oil Product Exports', description: 'Providing high-quality agricultural oil products with strict quality control standards' },
    ],
    path: '/divisions/importExport'
  },
  {
    id: 'cement',
    title: 'BINGET Cement',
    description: 'Binget cement is a major upcoming investment, set to revolutionaize Ethiopia`s construction sector and will play a vital role in Ethiopia`s construction boom and economic growth',
    image: '/cement.webp',
    bgColor: 'oklch(0.16 0.05 139.95)',
    features: [
      { title: 'High capacity cement production', description: 'Addressing Ethiopia`s growing demand for building materials' },
      { title: 'Strategic Investment', description: 'Strengethning infrastructure and urban development' },
      { title: 'State-of-the-art manufatcuring', description: 'Ensuring quality and efficiency' },
    ],
    path: '/divisions/cement'
  },
  {
    id: 'mining',
    title: 'BINGET Mining',
    description: 'Binget Mining is committed to shaping the future of mining by focusing on sustainability, technological innovation, and community growth. As a leading player in the mining industry, we pride ourselves on delivering high-quality resources while preserving the environment and contributing to the local communities where we operate.',
    image: '/mining.jpg',
    bgColor: 'oklch(0.46 0.09 78.42)',
    features: [
      { title: 'Advanced mining technology', description: 'Utilizing modern techniques for high efficiency extraction.' },
      { title: 'Job creation and Economic growth', description: 'Contributing to Ethiopia`s mining industry development.' },
    ],
    path: '/divisions/mining'
  },
  {
    id: 'security',
    title: 'YER Security',
    description: 'YER Security is one of the leading providers of comprehensive security and cleaning solutions that ensure the safety, cleanliness, and well-being of your business, home, or organization. With years of expertise and a dedication to excellence, we offer a range of services designed to meet your unique needs and exceed your expectations.',
    image: '/security.jpg',
    bgColor: 'oklch(0.16 0.05 139.95)',
    features: [
      { title: 'Corporate and Commercial Security', description: 'Protecting businesses, banks, and corporate entities' },
      { title: 'Residential Security Solutions', description: 'Providing high-tech home security' },
      { title: 'Advanced SUrveillance and Monitoring', description: 'Using the tatest technology for 24/7 protection' },
      { title: 'Professional Security Personel', description: 'Trained security teams ensuring safety and reliability' },
    ],
    path: '/divisions/security'
  },
];

const features = [
  { icon: <FaCheckCircle size={40} className="text-[#baa452]" />, title: "Proven Track Record" },
  { icon: <Award size={40} className="text-[#baa452]" />, title: "Gold Tax Payer" },
  { icon: <GrMultiple size={40} className="text-[#baa452]" />, title: "Multi-industry Invesstment" },
  { icon: <FaMoneyBill size={40} className="text-[#baa452]" />, title: "Reasonable pricing" },
];

export default function HomePage() {
  const router = useRouter()
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggered effect
        duration: 0.6,
      },
    }),
  };
  const sectionRefs = useRef({});
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    autoplay: true,
    created(s) {
      setInterval(() => {
        s.next();
      }, 4000);
    },
  });

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="w-full h-screen  relative overflow-hidden bg-[url(/bg.jpg)] bg-cover bg-center">
        <div className="w-full h-full absolute bg-white/80" />

        <div className="mt-25 justify-items-center flex justify-self-center">
          <img src="/logo.png" alt="Company Logo" className="h-30 w-min z-[10]" />
          <h1 style={{ color: 'oklch(0.16 0.05 139.95)' }} className="hidden md:block text-2xl md:text-3xl font-bold drop-shadow-md w-min text-right">
            <div className='text-[80px]'>
              BINGET
            </div> Group
          </h1>
        </div>

        <div ref={sliderRef} className="keen-slider w-full lg:h-[50%] sm:h-[10%]">
          {divisions.map((div) => (
            <div
              key={div.id}
              className="keen-slider__slide flex flex-col md:flex-row items-center justify-center p-10 gap-8"
            >
              <motion.img
                src={div.image}
                alt={div.title}
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
                <h2 className="text-4xl font-bold mb-2">{div.title}</h2>
                <p className="mb-4 text-lg text-gray-600">{div.description}</p>
                <button
                  onClick={() => scrollToSection(div.id)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          ))}
        </div>

        {/* <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6">
          <button
            className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
            onClick={() => instanceRef.current?.prev()}
          >
            Prev
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
            onClick={() => instanceRef.current?.next()}
          >
            Next
          </button>
        </div> */}
      </div>
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#baa452] ">
              <span className="text-[#212c62] ">Our Company</span>
              <br />
            </h2>
            <p className="text-lg text-gray-700 ">
              Binget Group is a leading multi-industry investment company driving innovation and economic
              growth in Ethiopia. With a strong presence in automotive, real estate, technology, finance, and
              exports, we are committed to delivering high-quality, technology-driven solutions that enhance
              businesses and communities.
            </p>
            <p className="text-lg text-gray-700 ">
              Binget Group is a diversified, innovation-driven conglomerate shaping Ethiopia’s future. Our
              strategic investments, customer-focused approach, and technology-driven solutions
              position us as a leader in automotive, real estate, technology, finance, security, cement,
              mining, and exports.
              With a clear vision, strong leadership, and a focus on sustainable growth, Binget Group is
              transforming industries and empowering Ethiopia’s economic future
            </p>
          </motion.div>

          {/* Right Side (Feature Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md  items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 ">{feature.title}</h3>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Sections */}
      <div className='px-15 pt-5'>
        <h2 className="text-4xl md:text-5xl font-bold text-[#baa452] pb-5">
          <span className="text-[#212c62] ">Our Divisions</span>
          <br />
        </h2>
        {divisions.map((div, index) => (
          index % 2 === 0 ? (
            <div
              className="grid md:grid-cols-1 gap-6 py-5"
              key={div.id}
              id={div.id}
              ref={(el) => (sectionRefs.current[div.id] = el)}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ backgroundColor: div.bgColor }} className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full lg:w-1/2 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{div.title}</h3>
                    <p className="text-white mb-4">{div.description}</p>
                    <h1 className="text-white" style={{ fontSize: 20, fontWeight: 700 }}>Key Features</h1>
                    <ul className="list-none space-y-6 text-white">
                      {div?.features?.map(x => (
                        <motion.li
                          key={x.title}
                          className="relative pl-8 text-lg font-medium"
                          variants={listItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          custom={0}
                        >
                          <span className="absolute left-0 top-0 text-2xl text-green-500">•</span>
                          <b>{x?.title}</b><p className='text-sm'>{x?.description}</p>
                        </motion.li>
                      ))}
                    </ul>
                    <button
                      className="px-4 py-2 rounded shadow hover:bg-gray-300 float-right text-white"
                      style={{ backgroundColor: 'oklch(0.46 0.09 78.42)' }}
                      onClick={() => router.push(div.path)}
                    >
                      Read more
                    </button>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <img src={div.image} alt="Android App" className="h-full object-cover w-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div
              className="grid md:grid-cols-1 gap-6"
              key={div.id}
              id={div.id}
              ref={(el) => (sectionRefs.current[div.id] = el)}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ backgroundColor: div.bgColor }} className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full lg:w-1/2">
                    <img src={div.image} alt="Android App" className="h-full object-cover w-full" />
                  </div>
                  <div className="w-full lg:w-1/2 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{div.title}</h3>
                    <p className="text-white mb-4">{div.description}</p>
                    <h1 className="text-white" style={{ fontSize: 20, fontWeight: 700 }}>Key Features</h1>
                    <ul className="list-none space-y-6 text-white">
                      {div?.features?.map(x => (
                        <motion.li
                          key={x.title}
                          className="relative pl-8 text-lg font-medium"
                          variants={listItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          custom={0}
                        >
                          <span className="absolute left-0 top-0 text-2xl text-green-500">•</span>
                          <b>{x?.title}</b><p className='text-sm'>{x?.description}</p>

                        </motion.li>
                      ))}
                    </ul>
                    <button
                      className="px-4 py-2 rounded shadow hover:bg-gray-300 float-left text-white"
                      style={{ backgroundColor: 'oklch(0.16 0.05 139.95)' }}
                      onClick={() => router.push(div.path)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        ))}

      </div>
    </div>
  );
}
