import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAboutClick: () => void;
  onCreativesClick: () => void;
  onProjectsClick: () => void;
  handleLogoClick: () => void;
  isAboutClicked: boolean;
  isCreativesClicked: boolean;
  isProjectsClicked: boolean;
}

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  isOpen,
  onClose,
  onAboutClick,
  onCreativesClick,
  onProjectsClick,
  handleLogoClick,
  isAboutClicked,
  isCreativesClicked,
  isProjectsClicked,
}) => {
  const handleItemClick = (handler: () => void) => {
    onClose();
    setTimeout(() => {
      handler();
    }, 100);
  };

  const textShadowStyle = {
    textShadow:
      "0px 0px 4px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(50px) brightness(2)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px) brightness(1)",
          }}
          exit={{ opacity: 0, filter: "blur(10px) brightness(2)" }}
          transition={{ duration: 0.7 }}
          className={`fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center`}
        >
          <div className="absolute inset-0">
            <Image
              src="/congus.jpeg"
              alt="Background"
              fill
              className="object-cover filter"
            />
          </div>

          <div className="absolute top-2 left-2 z-20">
            <Image
              src="/logo.svg"
              alt="Seventyfour logo"
              width={16}
              height={16}
              className="object-contain cursor-pointer "
              onClick={handleLogoClick}
              style={{
                filter:
                  "drop-shadow(0px 0px 1px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 1))",
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-2 md:px-12">
            <div className="flex flex-row justify-between items-start ">
              <nav className="text-white flex flex-col space-y-8">
                <AnimatePresence>
                  <motion.button
                    initial={{
                      opacity: 0,
                      filter:
                        "blur(30px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                    }}
                    animate={{
                      opacity: 1,
                      filter:
                        "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
                    }}
                    exit={{
                      opacity: 0,
                      filter:
                        "blur(100px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                    }}
                    transition={{ duration: 0.7 }}
                    className={`text-[10px] uppercase tracking-tight text-left cursor-pointer ${
                      isAboutClicked ? "font-black" : "font-normal"
                    }`}
                    style={textShadowStyle}
                    onClick={() => handleItemClick(onAboutClick)}
                  >
                    About
                  </motion.button>
                </AnimatePresence>

                <AnimatePresence>
                  <motion.button
                    initial={{
                      opacity: 0,
                      filter:
                        "blur(30px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                    }}
                    animate={{
                      opacity: 1,
                      filter:
                        "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
                    }}
                    exit={{
                      opacity: 0,
                      filter:
                        "blur(100px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                    }}
                    transition={{ duration: 0.7 }}
                    className={`text-[10px] uppercase tracking-tight text-left cursor-pointer ${
                      isCreativesClicked ? "font-black" : "font-normal"
                    }`}
                    style={textShadowStyle}
                    onClick={() => handleItemClick(onCreativesClick)}
                  >
                    Creatives
                  </motion.button>
                </AnimatePresence>

                <AnimatePresence>
                  <motion.button
                    initial={{
                      opacity: 0,
                      filter:
                        "blur(30px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                    }}
                    animate={{
                      opacity: 1,
                      filter:
                        "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
                    }}
                    exit={{
                      opacity: 0,
                      filter:
                        "blur(100px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                    }}
                    transition={{ duration: 0.7 }}
                    className={`text-[10px] uppercase tracking-tight text-left cursor-pointer ${
                      isProjectsClicked ? "font-black" : "font-normal"
                    }`}
                    style={textShadowStyle}
                    onClick={() => handleItemClick(onProjectsClick)}
                  >
                    Projects
                  </motion.button>
                </AnimatePresence>
              </nav>

              <AnimatePresence>
                <motion.button
                  initial={{
                    opacity: 0,
                    filter:
                      "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                  }}
                  animate={{
                    opacity: 1,
                    filter:
                      "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
                  }}
                  exit={{
                    opacity: 0,
                    filter:
                      "blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
                  }}
                  transition={{ duration: 0.7 }}
                  className="text-white text-[10px] uppercase tracking-tight cursor-pointer mt-[46px]"
                  style={textShadowStyle}
                  onClick={onClose}
                >
                  Close
                </motion.button>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobileMenu;
