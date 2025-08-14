"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
// import { cn } from "@/lib/utils";
import { FaRegSun, FaMoon } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
type NavItem = {
  name: string;
  link: string;
  icon?: React.JSX.Element;
};
export const FloatingNav = ({ navItems }: { navItems: NavItem[] }) => {
  const { scrollYProgress } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  const [activeTheme, setActiveTheme] = useState("light");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleThemeChange = () => {
    if (activeTheme === "dark") {
      setActiveTheme("light");
    } else {
      setActiveTheme("dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const htmlElement = document.documentElement;
      if (activeTheme === "dark" && !htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("light");
        htmlElement.classList.add("dark");
      } else if (
        activeTheme === "light" &&
        !htmlElement.classList.contains("light")
      ) {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
      }
    }
  }, [activeTheme]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex dark:border-white/[0.2] dark:bg-[#111928bf] bg-white border-transparent max-w-fit min-w-[300px] md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 text-lg"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <nav className="hidden md:flex space-x-4 items-center justify-center ">
          {navItems.map((navItem: NavItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block">{navItem.icon}</span>
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </nav>
        <nav className="flex flex-col w-full">
          <div className="flex justify-around">
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
            <div className="flex items-center space-x-2">
              <span
                className="text-lg !cursor-pointer dark:text-neutral-50  text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                onClick={handleThemeChange}
              >
                {activeTheme === "dark" ? <FaMoon /> : <FaRegSun />}
              </span>
            </div>
          </div>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((navItem: NavItem, idx: number) => (
                  <motion.div
                    key={navItem.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={navItem.link}
                     className="relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors py-2 "
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                         <span className="block mr-2">{navItem.icon}</span>
                      {navItem.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
