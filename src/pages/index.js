import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaCheckCircle, FaCode, FaHeadset, FaMoneyBill, FaUsers } from "react-icons/fa";
import { BsAirplane, BsBoxSeamFill, BsBuilding, BsCarFront, BsCodeSlash, BsMinecart, BsPerson } from "react-icons/bs";
import { RiBuilding4Fill, RiEmotionHappyLine, RiUserStarFill } from "react-icons/ri";
import { GrMultiple, GrTechnology } from "react-icons/gr";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useRouter } from 'next/router';
import { Award } from 'lucide-react';
const divisions = [
  {
    id: 'automotive',
    title: 'BINGET Manufacturing and Assembly',
    description: ' Binget Manufacturing and Assembly is a leading force in Ethiopia’s automotive sector, setting new standards in vehicle imports, sales, andassembly. We provide customers with access to world-class brands while ensuring affordability and reliability.',
    image: '/automotive.png',
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
    title: 'BINGET Realestate',
    description: ' BINGET Realestate is committed to shaping Ethiopia’s urban landscape by developing iconic, high-value properties in prime locations. Our properties cater to high-end residential, commercial, and mixed-use developments that reflect modern architectural excellence',
    image: '/gy.jpg',
    bgColor: 'oklch(0.46 0.09 78.42)',
    features: [
      { title: 'Strategic Locations', description: ' Our developments are located in Addis Ababa’s most sought-after areas, including Bole, 22 Golagul, and other emerging commercial hubs' },
      { title: ' Expanding Portfolio', description: 'We continue to acquire and develop properties that elevate the city’s Realestate standards' },
      { title: '  Sustainable & Modern Designs', description: 'Our projects are designed to meet global standards in luxury, efficiency, and sustainability' },
    ],
    path: '#'
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
    title: 'Export',
    description: 'Binget Export is a key player in Ethiopia’s export market, focusing on premium coffee and high-quality oil products. Our business is built on the principles of sustainability, ethical sourcing, and global market expansion.',
    image: '/export.jpg',
    bgColor: 'oklch(0.46 0.09 78.42)',
    features: [
      { title: 'High volume of USD Annual Exports', description: ' A significant contributor to Ethiopia’s foreign exchange earnings.' },
      { title: 'High-Quality Ethiopian Coffee', description: ' Exporting specialty-grade coffee that competes in global markets' },
      { title: 'Oil Product Exports', description: 'Providing high-quality agricultural oil products with strict quality control standards' },
    ],
    path: '#'
  },
  {
    id: 'microfinance',
    title: 'BINGET Microfinance Institution',
    description: ' Binget Microfinance Institution is a pioneering fintech-driven financial service provider dedicated to offering accessible, efficient, and secure banking solutions.',
    image: '/b_m.jpeg',
    bgColor: 'oklch(0.16 0.05 139.95)',
    features: [
      { title: 'High volume of USD Annual Exports', description: ' A significant contributor to Ethiopia’s foreign exchange earnings.' },
      { title: 'High-Quality Ethiopian Coffee', description: ' Exporting specialty-grade coffee that competes in global markets' },
      { title: 'Oil Product Exports', description: 'Providing high-quality agricultural oil products with strict quality control standards' },
    ],
    path: '/divisions/microfinance'
  },
  {
    id: 'bingetBirr',
    title: 'BingetBirr Digital Platform',
    description: ' BingetBirr is a next-generation digital financial services platform, providing a seamless and secure ecosystem for businesses, agents, and individual users.',
    image: '/binget_birr.png',
    bgColor: 'oklch(0.46 0.09 78.42)',
    features: [
      { title: 'High volume of USD Annual Exports', description: ' A significant contributor to Ethiopia’s foreign exchange earnings.' },
      { title: 'High-Quality Ethiopian Coffee', description: ' Exporting specialty-grade coffee that competes in global markets' },
      { title: 'Oil Product Exports', description: 'Providing high-quality agricultural oil products with strict quality control standards' },
    ],
    path: '/divisions/fintech'
  },
  // {
  //   id: 'cement',
  //   title: 'BINGET Cement',
  //   description: 'Binget cement is a major upcoming investment, set to revolutionaize Ethiopia`s construction sector and will play a vital role in Ethiopia`s construction boom and economic growth',
  //   image: '/cement.webp',
  //   bgColor: 'oklch(0.16 0.05 139.95)',
  //   features: [
  //     { title: 'High capacity cement production', description: 'Addressing Ethiopia`s growing demand for building materials' },
  //     { title: 'Strategic Investment', description: 'Strengethning infrastructure and urban development' },
  //     { title: 'State-of-the-art manufatcuring', description: 'Ensuring quality and efficiency' },
  //   ],
  //   path: '#'
  // },
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
    path: '#'
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
  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-[url(/bg.jpg)] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 z-0" />

        {/* Logo and Title */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 pt-20 pb-5 px-4">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="max-w-[150px] h-auto"
          />
          <h1
            style={{ color: 'oklch(0.16 0.05 139.95)' }}
            className="hidden md:block text-xl md:text-3xl font-bold drop-shadow-md text-right"
          >
            <div className="text-4xl md:text-[60px] leading-tight">BINGET</div>
            Group
          </h1>
        </div>

        {/* Subtitle */}
        <div className="relative z-10 flex justify-center px-4 mb-4">
          <h2
            style={{ color: 'oklch(0.16 0.05 139.95)' }}
            className="text-center font-semibold drop-shadow-md text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl"
          >
            GOLDEN LEVEL TAXPAYER | MULTI-INDUSTRY INVESTMENT | DEVELOPER OF MULTIPLE HIGHRISE BUILDINGS
          </h2>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full flex-1 z-10 overflow-y-auto">
          {divisions.map((div) => (
            <div
              key={div.id}
              className="keen-slider__slide flex flex-col md:flex-row items-center justify-center px-6 md:px-10 gap-6 py-6"
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
                <h2 className="md:text-4xl font-bold mb-2">{div.title}</h2>
                <p className="mb-4 text-lg text-gray-600">{div.description}</p>
                <button
                  onClick={() => router.push(div.path)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          ))}
        </div>
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
              growth in Ethiopia. With a strong presence in automotive, Realestate, technology, finance, and
              exports, we are committed to delivering high-quality, technology-driven solutions that enhance
              businesses and communities.
            </p>
            <p className="text-lg text-gray-700 ">
              Binget Group is a diversified, innovation-driven conglomerate shaping Ethiopia’s future. Our
              strategic investments, customer-focused approach, and technology-driven solutions
              position us as a leader in automotive, Realestate, technology, finance, security, cement,
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
        <h2 className="text-4xl md:text-5xl font-bold text-[#baa452] pb-5 justify-self-center">
          <span className="text-[#212c62]">Our Divisions</span>
          <br />
        </h2>
        <div className="flex flex-wrap md:px-30">
          {divisions.map((div, index) => (
            <div
              key={div.id}
              id={div.id}
              ref={(el) => (sectionRefs.current[div.id] = el)}
              className={`p-2 lg:${(index+1) % 3 !== 1 ? 'w-1/2' : 'w-full'} sm:w-full`}
            >
              <motion.div
                transition={{ duration: 0.8 }}
                initial={{ scale: 0.7, opacity: 0, x: index % 3 !== 2 ? index % 3 == 1 ? 50 : -50 : 0 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
              >
                <div
                  style={{ backgroundColor: div.bgColor }}
                  className="sm:h-full md:h-100 w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="w-full lg:w-1/2 p-6">
                    <h3 className="text-lg font-bold mb-2 text-white">{div.title}</h3>
                    <p className="text-sm text-white mb-4">{div.description}</p>
                    <button
                      className="px-4 py-2 rounded shadow hover:bg-gray-300 float-right text-white"
                      style={{ backgroundColor: index % 2 != 0 ? 'oklch(0.16 0.05 139.95)' : 'oklch(0.46 0.09 78.42)' }}
                      onClick={() => router.push(div.path)}
                    >
                      Read more
                    </button>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <img
                      src={div.image}
                      alt="Android App"
                      className="h-full object-cover w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-[#87cdea] to-white">
        <div className="max-w-6xl mx-auto text-center px-10">

          <motion.div
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4 ">Major Investments</h2>
          </motion.div>


          <div className="grid md:grid-cols-3 gap-6">
            {/* White-Labeled Solution */}
            <motion.div
              initial={{ opacity: 0, y: -50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="bg-white p-6 rounded-2xl">
                <BsCarFront className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Manufatcuring and Assembly</h3>
                <p className="text-gray-700 ">
                  Imports premium vehicles like Land Rover and Toyota, and offers cost-effective two- and three-wheelers through TVS and its own brand.
                </p>
              </div>
            </motion.div>


            {/* Client-Centric Approach */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg ">
                <BsBuilding className="w-14 h-14 mx-auto mb-4" />

                <h3 className="text-xl font-bold mb-2">Realestate</h3>
                <p className="text-gray-700 ">
                  We specialize in upscale residential, commercial, and mixed-use developments with modern architectural design.
                </p>
              </div>
            </motion.div>


            {/* Agile Development */}
            <motion.div
              initial={{ opacity: 0, y: -50, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg ">
                <BsCodeSlash className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Technology</h3>
                <p className="text-gray-700 ">
                  Delivers cutting-edge digital solutions including core banking, mobile money , and ERP systems.
                </p>
              </div>
            </motion.div>


            {/* Technology */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg ">
                <BsAirplane className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Export</h3>
                <p className="text-gray-700 ">
                  Leads Ethiopia’s export market with premium coffee and quality oil products, driven by sustainability, ethical sourcing, and global reach.
                </p>
              </div>
            </motion.div>
            {/* satiscaction */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg ">
                <BsBuilding className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Cement Production</h3>
                <p className="text-gray-700 ">
                  Upcoming investment poised to transform Ethiopia's construction industry, contributing greatly to the country's construction boom and overall economic development.
                </p>
              </div>
            </motion.div>
            {/* Cost */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg ">
                <BsMinecart className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Mining</h3>
                <p className="text-gray-700 ">
                  Dedicated to shaping the future of mining through sustainability, innovation, and community growth. We deliver high-quality resources while protecting the environment and supporting local communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
