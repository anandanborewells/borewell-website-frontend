"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear existing timeout when scrolling
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Direction sensing
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Inactivity timer: hide after 3s if not at top
      if (currentScrollY > 100) {
        hideTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Close menu/dropdown automatically on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsVisible(true); // Ensure visible on page change
  }, [pathname]);

  // Close dropdown on click outside (Desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth >= 768 &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Borewell Drilling", href: "/services/borewell-drilling" },
        { name: "Borewell Recovery", href: "/services/borewell-recovery" },
        { name: "Motor Setup", href: "/services/motor-setup" },
        { name: "Borewell Cleaning", href: "/services/borewell-cleaning" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-700 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav
        className={cn(
          "w-full transition-all duration-300 bg-[#005f99]/60 lg:h-30",
          scrolled ? "py-4 shadow-lg" : "py-5",
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 mr-4">
            <Image
              width={100}
              height={100}
              src="/assets/images/logo.png"
              alt="Anandan Borewells"
              className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base md:text-lg tracking-wide uppercase">
                Anandan
              </span>
              <span className="text-white/90 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                Borewells
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-15 lg:gap-20">
            <div className="flex items-center gap-12 lg:gap-16">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  ref={link.dropdown ? dropdownRef : null}
                >
                  {link.dropdown ? (
                    <div
                      className="flex items-center gap-1 text-white hover:text-[#FFC107] font-semibold transition-colors text-sm uppercase tracking-wide cursor-pointer py-2"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                    >
                      <Link href={link.href}>{link.name}</Link>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          isDropdownOpen && "rotate-180",
                        )}
                      />

                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          "absolute top-full left-0 w-64 bg-white shadow-xl rounded-md py-2 mt-0 z-[60] border-t-2 border-[#FFC107] transition-all duration-300 origin-top",
                          isDropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                            : "opacity-0 translate-y-2 pointer-events-none scale-95",
                        )}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-slate-800 hover:bg-[#005f99] hover:text-white transition-colors text-sm font-medium"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : link.href.startsWith("#") || link.href.includes("#") ? (
                    <a
                      href={link.href}
                      className="text-white hover:text-[#FFC107] font-semibold transition-colors text-sm uppercase tracking-wide py-2 block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "font-semibold transition-colors text-sm uppercase tracking-wide py-2 block",
                        pathname === link.href
                          ? "text-[#FFC107]"
                          : "text-white hover:text-[#FFC107]",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <a href="tel:9840105134">
              <Button
                size="sm"
                className="gap-2 bg-[#0D59A5] text-white border-2 border-transparent hover:border-white hover:bg-gradient-to-r hover:from-[#0D59A5] hover:to-[#002b45] rounded-md px-6 font-bold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#005f99] p-4 flex flex-col gap-2 border-t border-white/10 max-h-[80vh] overflow-y-auto shadow-2xl">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.dropdown ? (
                  <>
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={link.href}
                        className={cn(
                          "font-medium transition-colors",
                          pathname === link.href
                            ? "text-[#FFC107]"
                            : "text-white hover:text-[#FFC107]",
                        )}
                      >
                        {link.name}
                      </Link>
                      <button
                        className="p-2 -mr-2 text-white/70 hover:text-[#FFC107] transition-colors"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform duration-300",
                            isDropdownOpen && "rotate-180",
                          )}
                        />
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className="flex flex-col pl-4 border-l-2 border-white/20 mb-2 space-y-2 pb-2">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "font-medium py-1.5 transition-colors text-sm",
                              pathname === sub.href
                                ? "text-[#FFC107]"
                                : "text-white/80 hover:text-[#FFC107]",
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.href.startsWith("#") || link.href.includes("#") ? (
                  <a
                    href={link.href}
                    className="text-white font-medium py-3 hover:text-[#FFC107] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "font-medium py-3 transition-colors",
                      pathname === link.href
                        ? "text-[#FFC107]"
                        : "text-white hover:text-[#FFC107]",
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a href="tel:9840105134" className="w-full">
              <Button className="w-full mt-4 gap-2 bg-[#FFC107] text-slate-900 border-none hover:bg-[#FFB300] rounded-md font-bold transition-all duration-300 py-6">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
