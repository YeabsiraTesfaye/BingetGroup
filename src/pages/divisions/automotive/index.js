import React, { useRef, useState } from 'react';
import ContactUs from "@/components/contactUs";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PhotoViewerAlbum from '@/components/photoViewer';

const containerStyle = {
    width: '100%',
    height: '400px',
};


const branches = [
    { id: 1, name: 'Gelan', descriptinon: 'Near to Addis Ababa warehouse assembly plant designed to reassemble imported disassembled parts, optimizing cost-efficiency', location: { lat: 8.9986, lng: 38.7870 } },
    { id: 2, name: 'Haile Garment', descriptinon: 'Addis Ababa warehouse for efficient inventory management', location: { lat: 9.0032, lng: 38.7681 } },
    { id: 3, name: 'Kality', descriptinon: 'Addis Ababa  warehouse for high volume of vehiclesThrough innovation and customer focus, Binget Automotive is revolutionizing transportation in Ethiopia.', location: { lat: 9.0084, lng: 38.7472 } },
];

const factory = [
    { type: 'image', src: '/warehouse1.jpg' },
    { ytpe: 'video', src: '/warehouse2.mp4' },
    { type: 'video', src: '/warehouse3.mp4' },
    { type: 'image', src: '/showroom1.jpg' },
    { type: 'image', src: '/showroom2.jpg' },
    { type: 'image', src: '/showroom3.jpg' },
    { type: 'image', src: '/showroom4.jpg' },
]


const sections = {
    hero: {
        title: "BINGET Manufacturing and Assembly",
        subtitle: "Binget Manufacture and Assembly is a leading force in Ethiopia’s automotive sector, setting new standards in vehicle imports, sales, andassembly. We provide customers with access to world-class brands while ensuring affordability and reliability.",
        image: "/automotive.jpg",
    },
    about: {
        title: "Our Company",
        content:
            " Binget Automotive is a leading force in Ethiopia’s automotive sector, setting new standards in vehicle imports, sales, and assembly. We provide customers with access to world-class brands while ensuring affordability and reliability.",
    },
    products: {
        title: "Our Products",
        items: [
            {
                name: 'BINGET Three Wheeler', image: '/threeWheeler1.jpg',
                specs: [
                    { label: "Dimensions", value: "1930 × 720 × 1065 mm" },
                    { label: "Dry Weight", value: "95 kg" },
                    { label: "Engine Type", value: "1-cylinder, air-cooled, 4-stroke" },
                    { label: "Displacement", value: "107 ml" },
                    { label: "Maximum Power", value: "6.2 kW @ 8000 rpm" },
                    { label: "Maximum Torque", value: "6.8 Nm @ 6500 rpm" },
                    { label: "Ignition", value: "Electric start / Kick start" },
                    { label: "Remote Control + Alarm", value: "Yes" },
                    { label: "Transmission", value: "4-speed" },
                    { label: "Fuel Tank Capacity", value: "4 L" },
                    { label: "Maximum Speed", value: "80 km/h" },
                    { label: "Braking System (Front/Rear)", value: "Disc / Drum" },
                    { label: "Tire Size (Front/Rear)", value: "2.50-17 / 2.75-17" },
                    { label: "Fuel Consumption", value: "2 L / 100 km (Super)" },
                ]
            },
            {
                name: 'Lifan Two Wheeler 150cc', image: '/lifan.jpg',
                specs: [
                    { label: "Motorcycle Model", value: "LF150-2C(II)" },
                    { label: "Dimension (L×W×H mm)", value: "2120×760×1060" },
                    { label: "Wheelbase (mm)", value: "1320" },
                    { label: "Net Weight (kg)", value: "126" },
                    { label: "Seat Height (mm)", value: "800" },
                    { label: "Fuel Tank Capacity (L)", value: "11" },
                    { label: "Engine Type", value: "Single-cylinder, air-cooled, four-stroke" },
                    { label: "Bore×Stroke (mm)", value: "62×52.4" },
                    { label: "Displacement (mL)", value: "158" },
                    { label: "Compression Ratio", value: "9.3:1" },
                    { label: "Max. Power (kW@rpm)", value: "9.0 @ 8500" },
                    { label: "Max. Torque (N.m@rpm)", value: "10.9 @ 6500" },
                    { label: "Start", value: "Electric / Kick Start" },
                    { label: "Transmission", value: "5 Gears, Hand-clutched" },
                    { label: "Brake (front/rear)", value: "Disk/Drum or Drum/Drum" },
                    { label: "Wheel", value: "Al-alloy" },
                    { label: "Tire (front/rear)", value: "2.75-18 / 3.0-18" },
                    { label: "Max. Speed (km/h)", value: "98" },
                    { label: "Economical Fuel Consumption (L/100km)", value: "≤2.3" },
                ]
            },
            {
                name: 'Apache Two Wheeler', image: '/apache.jpg',
                specs: [
                    // Engine Features
                    { label: "Engine Technology", value: "RTR inspired engine" },
                    { label: "Engine Layout", value: "Straight Engine" },
                    { label: "Number of Cylinders", value: "1" },
                    { label: "Transmission Type", value: "5-speed" },
                    { label: "Bore × Stroke", value: "62.5 mm × 57.8 mm" },
                    { label: "Displacement", value: "177.4 cc" },
                    { label: "Ignition System", value: "Self & Kick" },
                    { label: "Compression Ratio", value: "9.5:1" },
                    { label: "Maximum Power", value: "17.03 PS @ 8500 rpm" },
                    { label: "Maximum Torque", value: "15.5 Nm @ 6500 rpm" },
                    { label: "Clutch Type", value: "Wet, Multi-plate" },
                    { label: "Fuel Supply", value: "Carburettor" },

                    // Chassis Features
                    { label: "Frame Type", value: "Double Cradle" },
                    { label: "Suspension (Front)", value: "Telescopic" },
                    { label: "Suspension (Rear)", value: "Mono Tube Inverted Gas" },

                    // Wheel and Tire
                    { label: "Tire Type", value: "Tubeless" },
                    { label: "Wheel Type", value: "Alloy Wheel" },
                    { label: "Tire Size (Front)", value: "90/90 × 17" },
                    { label: "Tire Size (Rear)", value: "110/80 × 17" },

                    // Brake Features
                    { label: "Brake (Front)", value: "Disc" },
                    { label: "Brake (Rear)", value: "Disc" },
                    { label: "Disc Size (Front)", value: "270 mm" },
                    { label: "Disc Size (Rear)", value: "200 mm" },

                    // Fuel Tank
                    { label: "Fuel Tank Capacity", value: "16 L" },
                    { label: "Reserve Tank Capacity", value: "2.5 L" },

                    // Display / Electricals
                    { label: "Speedometer", value: "Analog + Digital" },
                    { label: "Head Lamp", value: "Halogen, LED" },
                    { label: "Battery", value: "12 V" },

                    // Dimensions
                    { label: "Length", value: "2085 mm" },
                    { label: "Width", value: "730 mm" },
                    { label: "Height", value: "1105 mm" },
                    { label: "Wheelbase", value: "1326 mm" },
                    { label: "Ground Clearance", value: "165 mm" },
                    { label: "Seat Height", value: "790 mm" },
                    { label: "Kerb Weight", value: "137 kg" },
                    { label: "Dry Weight", value: "130 kg" },

                    // General
                    { label: "Brand", value: "TVS" },
                    { label: "Model Name", value: "Apache RTR 180 Disc with ABS" },
                    { label: "Model Year", value: "2016" },
                    { label: "Brand Color", value: "Blue" },
                    { label: "Segment", value: "Sport" },
                    { label: "Color", value: "Blue" },
                    { label: "Maximum Speed", value: "124 kmph" },
                ]
            },
            {
                name: 'Lifan Two Wheeler 110cc', image: '/lifan110.png',
                specs: [
                    { label: "Motorcycle Model", value: "LF110-7A" },
                    { label: "Dimensions", value: "1930 × 720 × 1065 mm" },
                    { label: "Dry Weight", value: "95 kg" },
                    { label: "Engine Type", value: "1-cylinder, air-cooled, 4-stroke" },
                    { label: "Displacement", value: "107 ml" },
                    { label: "Maximum Power", value: "6.2 kW @ 8000 rpm" },
                    { label: "Maximum Torque", value: "6.8 Nm @ 6500 rpm" },
                    { label: "Ignition", value: "Electric start / Kick start" },
                    { label: "Remote Control + Alarm", value: "Yes" },
                    { label: "Transmission", value: "4-speed" },
                    { label: "Fuel Tank Capacity", value: "4 L" },
                    { label: "Maximum Speed", value: "80 km/h" },
                    { label: "Braking System (Front/Rear)", value: "Disc / Drum" },
                    { label: "Tire Size (Front/Rear)", value: "2.50-17 / 2.75-17" },
                    { label: "Fuel Consumption", value: "2 L / 100 km (Super)" },
                ],

            },
            {
                name: 'Bajaj Pulsar', image: '/pulsar150.webp',
                specs: [
                    { label: "Engine Type", value: "4-Stroke, 2-Valve, Twin Spark BSVI Compliant DTS-I FI Engine" },
                    { label: "Displacement", value: "149.50 cc" },
                    { label: "Max Power", value: "10.3 kW (14 PS) @ 8500 rpm" },
                    { label: "Max Torque", value: "13.25 Nm @ 6500 rpm" },
                    { label: "Fuel Tank Capacity", value: "15 L" },

                    { label: "Front Tyre (Twin Disc)", value: "90/90 17 Tubeless" },
                    { label: "Front Tyre (Single Disc)", value: "80/100 17 Tubeless" },
                    { label: "Rear Tyre (Twin Disc)", value: "120/80 17 Tubeless" },
                    { label: "Rear Tyre (Single Disc)", value: "100/90 17 Tubeless" },

                    { label: "Front Suspension (Twin Disc)", value: "Telescopic, 37 mm Conventional fork" },
                    { label: "Front Suspension (Single Disc)", value: "Telescopic, 31 mm Conventional fork" },
                    { label: "Rear Suspension", value: "Twin Shock absorber, Gas filled with Canister" },

                    { label: "Front Brake (Twin Disc)", value: "280 mm Dia. Disc" },
                    { label: "Front Brake (Single Disc)", value: "ABS, 260 mm Disc" },
                    { label: "Rear Brake (Twin Disc)", value: "230 mm Dia. Disc" },
                    { label: "Rear Brake (Single Disc)", value: "130 mm Dia. Drum" },

                    { label: "Length (Twin Disc)", value: "2035 mm" },
                    { label: "Length (Single Disc)", value: "2055 mm" },
                    { label: "Ground Clearance", value: "165 mm" },
                    { label: "Height (Twin Disc)", value: "1115 mm" },
                    { label: "Height (Single Disc)", value: "1060 mm" },
                    { label: "Width (Twin Disc)", value: "750 mm" },
                    { label: "Width (Single Disc)", value: "765 mm" },
                    { label: "Wheelbase (Twin Disc)", value: "1345 mm" },
                    { label: "Wheelbase (Single Disc)", value: "1320 mm" },
                    { label: "Kerb Weight (Twin Disc)", value: "150 kg" },
                    { label: "Kerb Weight (Single Disc)", value: "148 kg" },

                    { label: "Electrical System", value: "DC, 12V, 8Ah VRLA" },
                    { label: "Headlamp", value: "35/35 W with 2 pilot lamps, With AHO (Auto Headlamp On)" },
                    { label: "Digital Console", value: "Fully Digital Reverse Monochrome LCD Speedometer with Bluetooth connectivity, Call Accept/Reject, Missed call and message alert, Gear indicator, Clock & DTE. Available in TD and select SD variant only." },
                    { label: "USB Charging Port", value: "Standard USB charging port included" }

                ],

            },
        ],
    },
    services: {
        title: "What We Offer",
        items: ["Spare Parts", "12 Months Waranty"],
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
    const [expandedProduct, setExpandedProduct] = useState(null);
    const [center, setCenter] = useState({ lat: 9.03, lng: 38.74, });
    const [zoom, setZoom] = useState(13);
    const toggleDescription = (index) => {
        setExpandedProduct(prev => (prev === index ? null : index));
    };
    const ref = useRef()
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
                    <p className="max-w-3xl mx-auto text-center text-lg">{sections.about.content}</p>
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
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="px-4">
                                        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
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
                                        <div className="overflow-hidden max-w-4xl mx-auto ">
                                            <table className="min-w-full  divide-y divide-gray-700">
                                                <tbody className="divide-y divide-gray-700">
                                                    {product?.specs?.map((spec, index) => (
                                                        <motion.tr
                                                            key={spec.label}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.4, delay: index * 0.07 }}
                                                        >
                                                            <td className="px-6 py-4 font-semibold text-black w-1/3">{spec.label}</td>
                                                            <td className="px-6 py-4 text-black">{spec.value}</td>
                                                        </motion.tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <div className="px-4 py-2">
                                                <button
                                                    onClick={() => toggleDescription(index)}
                                                    className="text-blue-700 cursor-pointer"
                                                >
                                                    {expandedProduct === index ? 'Show Less' : 'Read More'}
                                                </button>
                                            </div>
                                        </div>

                                    )}

                                </div>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 bg-gray-100">
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
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </AnimatedSection>
            </section>
            <section className="py-16 px-4 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-900 py-10">Our Warehouses and Factories</h2>
                <PhotoViewerAlbum media={factory} />
            </section>
            <section className="bg-gray-100">

                <h2 className="text-3xl font-bold text-center text-gray-900 py-10">Location</h2>

                <div className="flex flex-col lg:flex-row overflow-hidden shadow-lg bg-gray-200">

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
                                        <td className="px-6 py-4 text-black font-medium">{div.name}</td>
                                        <td className="px-6 py-4 text-black">{div.descriptinon}</td>
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
