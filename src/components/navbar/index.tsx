import { useState, FC } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/images/Logo.png";

const Navigation: FC = () => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [moreOpen, setMoreOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-[#E0D1BE]/30 backdrop-blur-md px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />

        <div className="hidden md:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 text-[#122620] rounded-full border border-[#122620] hover:bg-[#122620] hover:text-white transition-colors"
          >
            HOME
          </motion.button>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setMoreOpen(false);
              }}
              className="px-6 py-2.5 text-[#122620] rounded-full hover:bg-[#D0C4B4] transition-colors flex items-center gap-2"
            >
              SERVICES
              <motion.div
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 min-w-[200px] bg-[#122620] rounded-lg shadow-lg overflow-hidden z-50"
                >
                  {["Web Design", "Development", "Consulting", "Marketing"].map(
                    (item) => (
                      <motion.a
                        key={item}
                        whileHover={{ backgroundColor: "#F5F1EC" }}
                        href="#"
                        className="block px-6 py-3 text-white hover:text-white transition-colors"
                      >
                        {item}
                      </motion.a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setMoreOpen(!moreOpen);
                setServicesOpen(false);
              }}
              className="px-6 py-2.5 text-[#122620] rounded-full hover:bg-[#D0C4B4] transition-colors flex items-center gap-2"
            >
              MORE
              <motion.div
                animate={{ rotate: moreOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 min-w-[200px] bg-[#122620] rounded-lg shadow-lg overflow-hidden z-50"
                >
                  {["About Us", "Portfolio", "Careers", "Blog"].map((item) => (
                    <motion.a
                      key={item}
                      whileHover={{ backgroundColor: "#F5F1EC" }}
                      href="#"
                      className="block px-6 py-3 text-white hover:text-white transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#122620] text-[#E8DFD3] rounded-full hover:bg-[#3D5C4F] transition-colors font-medium"
          >
            CONTACT US
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 border-2 border-[#122620] rounded-full flex items-center justify-center hover:text-[#E8DFD3] transition-colors relative"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={20} className="text-[#122620]" />
            </motion.div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 min-w-[180px] bg-[#122620] rounded-lg shadow-lg overflow-hidden z-50"
                >
                  {["Settings", "Profile", "Support", "Logout"].map(
                    (item, index) => (
                      <motion.a
                        key={item}
                        whileHover={{ backgroundColor: "#F5F1EC", x: 4 }}
                        href="#"
                        className={`block px-6 py-3 text-white hover:text-white transition-colors ${
                          index === 3 ? "border-t border-[#E8DFD3]" : ""
                        }`}
                      >
                        {item}
                      </motion.a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
