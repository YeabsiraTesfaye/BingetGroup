"use client";

import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="bg-gray-100 py-8 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#212c62] ">BINGET GROUP</h2>
          <p className="mt-2 text-gray-700 text-sm ">
            BINGET Group is a multi-industry investment company. Connect with us now and lets collaburate and grow together.
          </p>
          {/* <div className="flex space-x-3 mt-4">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
            <FaLinkedin className="text-blue-700 text-2xl cursor-pointer" />
            <FaYoutube className="text-red-600 text-2xl cursor-pointer" />
          </div> */}
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 ">Divisions</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-700 ">
            <li className="cursor-pointer" onClick={()=>router.push('/divisions/automotive')}>BINGET Automotive</li>
            <li className="cursor-pointer" onClick={()=>router.push('#')}>BINGET Realestate</li>
            <li className="cursor-pointer" onClick={()=>router.push('/divisions/tech')}>BINGET Tech</li>
            <li className="cursor-pointer" onClick={()=>router.push('#')}>BINGET Export</li>
            <li className="cursor-pointer" onClick={()=>router.push('/divisions/microfinance')}>BINGET Microfinance</li>
            <li className="cursor-pointer" onClick={()=>router.push('/divisions/fintech')}>BINGETBirr</li>
            {/* <li className="cursor-pointer" onClick={()=>router.push('#')}>Cement</li> */}
            <li className="cursor-pointer" onClick={()=>router.push('#')}>BINGET Mining</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 ">Investments</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-700 ">
            <li>Manufacturing and Assembly</li>
            <li>Realestate</li>
            <li>Technology</li>
            <li>Export</li>
            <li>Microfinance</li>
            <li>FinTech</li>
            {/* <li>Cement Production</li> */}
            <li>Mining</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 ">Company</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-700 ">
            <li className="cursor-pointer" onClick={()=>router.push('/about')}>About Us</li>
            {/* <li>Privacy Policy</li> */}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-600 ">© {new Date().getFullYear()} BINGET-TECH. All rights reserved.</p>
      </div>
    </footer>
  );
}
