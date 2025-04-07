import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function ContactUs() {
    const router = useRouter()
  return (
    <div className="font-sans text-gray-800">
      <section style={{backgroundColor:'oklch(0.16 0.05 139.95)'}} className="text-white py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to partner with BINGET Group?
        </motion.h2>
        <motion.button
          className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          onClick={()=>router.push('/contact')}
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}