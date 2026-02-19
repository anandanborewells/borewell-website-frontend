import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top Banner Section */}
      <div className="w-full overflow-hidden">
        <Image
          width={1440}
          height={600}
          src="/assets/images/all-screen-banner-img.webp"
          alt="Footer Banner"
          className="w-full h-auto scale-[1.5] lg:scale-[1]"
        />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto  px-6 py-16 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/logo.webp"
                  alt="Anandan Borewells"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-wider">
                  ANANDAN
                </span>
                <span className="text-white/80 text-sm font-semibold tracking-[0.2em] uppercase">
                  BOREWELLS
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Professional borewell drilling services in chennai with over 25
              year of expriance. Trusted by homeowner, farmers, and business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/services/borewell-drilling"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Borewell Drilling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/borewell-recovery"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Borewell Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/motor-setup"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Motor Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/borewell-cleaning"
                  className="hover:text-[#FFC107] transition-colors"
                >
                  Borewell Cleaning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center text-sm text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Anandan Borewell Drilling. All
            rights reserved.
          </div>
          <span>
            Developed By{" "}
            <Link
              href="https://spicycodez.netlify.app/"
              target="_black"
              className="hover:text-[#FFC107] transition-colors"
            >
              SpicyCodeZ
            </Link>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}
