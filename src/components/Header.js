import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Divisions" },
  { name: "Contact", path: "/contact" },
];

const divisions = [
  { name: "BINGET Automotive", path: "/divisions/automotive" },
  { name: "GY Real Estate", path: "/divisions/realestate" },
  { name: "BINGET Tech", path: "/divisions/tech" },
  { name: "Import/Export", path: "/divisions/importExport" },
  { name: "Cement", path: "/divisions/cement" },
  { name: "BINGET Mining", path: "/divisions/mining" },
  { name: "YER Security", path: "/divisions/security" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false); // for mobile
  const router = useRouter();

  return (
    <header className="bg-white/70 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 onClick={()=>{
          setActive('Home')
          router.push('/')
        }
         } className="text-2xl font-bold text-gray-900 flex cursor-pointer"><img src="/bingetGroupLogo.png" width={50} />BINGET Group</h1>
        <nav className="hidden md:flex space-x-6 relative">
          {navItems.map((item) =>
            item.name === "Divisions" ? (
              <div
                key={item.name}
                className="relative group"
              >
                <button
                  className={clsx(
                    "text-gray-600 hover:text-blue-600 font-medium transition flex items-center gap-1",
                    active === item.name && "text-blue-600 border-b-2 border-blue-600 pb-1"
                  )}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200">
                  <ul className="w-56 py-2">
                    {divisions.map((div) => (
                      <li key={div.name}>
                        <button
                          onClick={() => {
                            setActive("Divisions");
                            router.push(div.path);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700"
                        >
                          {div.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  item.path && router.push(item.path);
                }}
                className={clsx(
                  "text-gray-900 hover:text-blue-600 font-medium transition",
                  active === item.name && "text-blue-600 border-b-2 border-blue-600 pb-1"
                )}
              >
                {item.name}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden overflow-hidden bg-white shadow-inner"
        >
          <div className="px-4 pb-4 flex flex-col space-y-3">
            {navItems.map((item) =>
              item.name === "Divisions" ? (
                <div key={item.name}>
                  <button
                    onClick={() => setDivisionsOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 font-medium transition"
                  >
                    {item.name}
                    <ChevronDown
                      className={clsx("w-4 h-4 transition-transform", {
                        "rotate-180": divisionsOpen,
                      })}
                    />
                  </button>
                  <AnimatePresence>
                    {divisionsOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-2 overflow-hidden"
                      >
                        {divisions.map((div) => (
                          <li key={div.name}>
                            <button
                              onClick={() => {
                                setActive("Divisions");
                                router.push(div.path);
                                setMenuOpen(false);
                              }}
                              className="text-gray-700 hover:text-blue-600 text-left w-full"
                            >
                              {div.name}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    router.push(item.path);
                    setMenuOpen(false);
                  }}
                  className={clsx(
                    "text-gray-600 hover:text-blue-600 font-medium transition",
                    active === item.name && "text-blue-600 border-b-2 border-blue-600 pb-1"
                  )}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
