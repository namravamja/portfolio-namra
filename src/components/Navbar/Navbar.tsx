"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  setPosition,
  isActive,
  isMobile = false,
  onClick,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} onClick={onClick} className="block">
      <motion.li
        ref={ref}
        onMouseEnter={() => {
          if (isMobile) return;
          setIsHovered(true);
          if (!ref?.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-sm font-semibold md:px-4 md:py-2 
        ${isActive ? "font-bold" : ""}
        ${isMobile ? "w-full py-4 text-base" : ""}
        `}
        whileHover={isMobile ? { x: 5 } : undefined}
        whileTap={{ scale: 0.98 }}
      >
        <span
          className={
            isHovered && !isMobile
              ? "text-white mix-blend-difference transition-colors duration-150"
              : isMobile && isActive
              ? "text-[#6D28D9] font-bold"
              : isActive
              ? "text-[#6D28D9] font-blod transition-colors duration-150"
              : "text-black transition-colors duration-150"
          }
        >
          {children}
        </span>
        {isMobile && isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-600 rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.li>
    </Link>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.15 },
      }}
      className="absolute z-0 h-9 bg-black rounded-full"
    />
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [isTalkButtonHovered, setIsTalkButtonHovered] = useState(false);
  const [isNavbarButtonHovered, setIsNavbarButtonHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/About", label: "ABOUT" },
    { href: "/Projects", label: "PROJECTS" },
    { href: "/Experience", label: "EXPERIENCE" },
    { href: "Blog", label: "BLOG" },
  ];

  if (!mounted) {
    return null; // Return nothing during SSR
  }

  return (
    <>
      {/* Fixed navbar container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 md:h-18 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Mobile menu button and logo - only visible on small screens */}
          <div className="flex md:hidden w-full justify-between items-center">
            <Link href="/" className="flex items-center">
              <h1
                className={`${playfair.className} text-3xl font-bold tracking-tight`}
              >
                NAMRA
              </h1>
            </Link>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-between w-full">
            <Link href="/" className="mr-6">
              <h1
                className={`${playfair.className} text-4xl font-bold tracking-tight`}
              >
                NAMRA
              </h1>
            </Link>
            <div className="flex items-center gap-4">
              <ul
                onMouseLeave={() => {
                  setPosition((prev) => ({
                    ...prev,
                    opacity: 0,
                  }));
                  setIsNavbarButtonHovered(false);
                }}
                onMouseEnter={() => setIsNavbarButtonHovered(true)}
                className={`flex rounded-full justify-around border-2 border-black p-1 relative bg-white transition-all duration-500 ease-in-out
                  ${
                    isNavbarButtonHovered
                      ? "bg-[#a78bfa]/30 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(147,51,234,0.7)]"
                      : "bg-[#c4b5fd]/20 backdrop-blur-sm"
                  }`}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    setPosition={setPosition}
                    isActive={pathname === link.href}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Cursor position={position} />
              </ul>

              <Link href="/Contact">
                <button
                  onMouseEnter={() => setIsTalkButtonHovered(true)}
                  onMouseLeave={() => setIsTalkButtonHovered(false)}
                  className={`transition-all duration-300 ease-in-out rounded-full px-6 py-3 font-semibold text-sm border-2 border-black 
                    ${
                      isTalkButtonHovered
                        ? "bg-[#a78bfa]/30 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(147,51,234,0.7)]"
                        : "bg-[#c4b5fd]/20 backdrop-blur-sm"
                    }`}
                >
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu - slide from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <motion.div className="px-6 py-4">
                <ul className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        delay: mobileMenuOpen ? index * 0.05 : 0,
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                    >
                      <NavLink
                        href={link.href}
                        setPosition={setPosition}
                        isActive={pathname === link.href}
                        isMobile={true}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </ul>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: mobileMenuOpen ? 0.3 : 0,
                    type: "spring",
                  }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="w-full transition-all duration-300 ease-in-out rounded-full px-8 py-3 font-semibold text-lg border-2 border-black bg-black text-white hover:bg-black/90">
                      Let's Talk
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16 md:h-18"></div>
    </>
  );
};

export default Navbar;
