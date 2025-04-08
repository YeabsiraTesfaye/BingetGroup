import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const teamMembers = [
    { name: "Biniam Tefera", role: "CEO", image: "/biniam.jpg" },
    { name: "Mekbib Zewdu", role: "GM", image: "/male.jpeg" },
];
const companies = [
    {
        id: 1,
        name: "Binget Automotive",
        description: "Binget Automotive is a leading force in Ethiopia’s automotive sector, setting new standards in vehicle imports, sales, and assembly. We provide customers with access to world-class brands while ensuring affordability and reliability",
        image: "/automotive.jpg",
        path: '/divisions/automotive'
    },
    {
        id: 2,
        name: "GY Real Estate",
        description: "G Y Real Estate is committed to shaping Ethiopia’s urban landscape by developing iconic, high-value properties in prime locations. Our properties cater to high-end residential, commercial, and mixed-use developments that reflect modern architectural excellence.",
        image: "gy.jpg",
        path: '/divisions/realestate'
    },
    {
        id: 3,
        name: "Binget Tech",
        description: "Binget Tech is a technology powerhouse, developing cuttingedge financial solutions tailored for emerging markets. Our software products empower financial institutions with costeffective, scalable, and highly secure digital solutions that drive economic inclusion.",
        image: "tech.png",
        path: '/divisions/tech'
    },
    {
        id: 4,
        name: "Binget Export",
        description: " Binget Export is a key player in Ethiopia’s export market, focusing on premium coffee and high-quality oil products. Our business is built on the principles of sustainability, ethical sourcing, and global market expansion",
        image: "/export.jpg",
        path: '/divisions/importExport'
    },
    {
        id: 5,
        name: "Binget Cement",
        description: "Binget Cement is a major upcoming investment, set to revolutionizeEthiopia's construction sector and will play a vital role in Ethiopia's construction boom and economy growth.",
        image: "/cement.webp",
        path: "/divisions/cement"
    },

    {
        id: 6,
        name: "Binget Mining",
        description: "Binget Mining is committed to shaping the future of mining by focusing on sustainability, technological innovation, and community growth. As a leading player in the mining industry, we pride ourselves on delivering high-quality resources while preserving the environment and contributing to the local communities where we operate.",
        image: "/mining.jpg",
        path: '/divisions/mining'
    },

    {
        id: 7,
        name: "YER Security",
        description: "YER Security is one of the leading providers of comprehensive security and cleaning solutions that ensure the safety, cleanliness, and well-being of your business, home, or organization. With years of expertise and a dedication to excellence, we offer a range of services designed to meet your unique needs and exceed your expectations.",
        image: "/security.jpg",
        path: '/divisions/security'
    },
    // Add more companies as needed
];

const testimonials= [
    {
        name: "Mr. X",
        text: "BINGET is a powerhouse! Their tech division helped us scale in no time.",
    },
    {
        name: "Mr. Y",
        text: "Professionalism and reliability like no other company we've worked with.",
    },
]
export default function About() {
    const [expanded, setExpanded] = useState(null);
    const router = useRouter()

    const toggleDescription = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="bg-gray-100">
            <section className="relative bg-gradient-to-r from-[#B49C68] to-white text-white text-center py-20">
                <div className="relative z-10 max-w-4xl mx-auto text-black">
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">
                        Binget Group is a leading multi-industry investment company driving innovation and economic
                        growth in Ethiopia. With a strong presence in automotive, real estate, technology, finance, and
                        exports, we are committed to delivering high-quality, technology-driven solutions that enhance
                        businesses and communities.
                    </p>
                </div>
            </section>
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Business Divisions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {companies.map((company) => (
                            <div
                                onClick={() => router.push(company.path)}
                                key={company.id}
                                className="cursor-pointer bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={company.image}
                                    alt={company.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission, Vision, Values */}
            <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Our Core Principles</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-6">
                    {["Mission", "Vision", "Values"].map((title, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold text-[#B49C68]">{title}</h3>
                            <p className="mt-2 text-gray-600">
                                {title === "Mission" && " To drive sustainable economic growth by delivering innovative, high-quality, and technology-driven solutions across multiple industries, enhancing the lives of individuals and businesses while contributing to national development."}
                                {title === "Vision" && "To be a leading multi-industry investment powerhouse in Ethiopia and beyond, known for excellence, innovation, and transformative business solutions that shape the future of automotive, real estate, technology, finance, and exports"}
                                {title === "Values" && "Integrity, Excellence, and Innovation drive us forward."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="mx-auto px-6 py-16 text-center bg-white w-full">
            <h2 className="text-3xl font-bold text-gray-800 p-2">Testimonials</h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-white border-l-4 border-blue-500 p-6 rounded-xl shadow"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            // viewport={{ once: true }}
                            transition={{ delay: i * 0.3 }}
                        >
                            <p className="italic text-gray-600">“{t.text}”</p>
                            <div className="mt-4 font-semibold text-right text-gray-600">— {t.name}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Meet the Team */}
            <section className="mx-auto px-6 py-16 text-center bg-gray-200 w-full">
                <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition m-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div style={{ borderRadius: 10, overflow: "hidden" }}>
                                <img src={member.image} alt={member.name} className="" />
                                <h3 className="text-xl font-semibold mt-4 text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
