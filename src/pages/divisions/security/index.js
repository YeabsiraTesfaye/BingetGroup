import ContactUs from "@/components/contactUs";
import { motion } from "framer-motion";

const sections = {
  hero: {
    title: "Welcome to NEON Security",
    subtitle: "Empowering industries, transforming lives.",
    image: "/bg.jpg",
  },
  about: {
    title: "Our Story",
    content:
      "Founded in 1995, BINGET Group has grown into a diversified enterprise with interests in automotive, technology, real estate, mining, and more. Our vision is to innovate for a better tomorrow.",
  },
  products: {
    title: "Our Products",
    items: ["Electric Vehicles", "Smart Homes", "Cement & Construction Materials", "Security Systems"],
  },
  services: {
    title: "What We Offer",
    items: ["Import & Export", "Real Estate Development", "IT Consulting", "Industrial Mining"],
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
        </div>
      </section>

      <AnimatedSection title={sections.about.title}>
        <p className="max-w-3xl mx-auto text-center text-lg">{sections.about.content}</p>
      </AnimatedSection>

      {/* Products */}
      <AnimatedSection title={sections.products.title}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {sections.products.items.map((item, i) => (
            <motion.li
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
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
              {item}
            </motion.li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection title={sections.unique.title}>
        <ul className="max-w-3xl mx-auto space-y-4">
          {sections.unique.points.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection title="What Our Clients Say">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white border-l-4 border-blue-500 p-6 rounded-xl shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="italic">“{t.text}”</p>
              <div className="mt-4 font-semibold text-right">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

function AnimatedSection({ title, children }) {
  return (
    <section className="py-16 px-4 bg-white">
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
