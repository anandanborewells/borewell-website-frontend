"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { SubHero } from "@/components/layout/SubHero";
import { ContactInfoCard } from "@/components/ui/ContactInfoCard";
import { AreasWeServe } from "@/components/ui/AreasWeServe";
import { InfoBanner } from "@/components/ui/InfoBanner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    subtitle: "Call us anytime for booking",
    details: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Send message for quick response",
    details: "+91 86106 88964",
    href: "https://wa.me/918610688964",
  },
  {
    icon: MapPin,
    title: "Address",
    subtitle: "No 21/7 th St, Vinobaji Nagar",
    details: "Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600064.",
  },
  {
    icon: Clock,
    title: "Working Hours",
    subtitle: "Monday – Sunday: 7:00 AM – 7:00 PM",
  },
];

export function ContactContent() {
  return (
    <main>
      <SubHero
        title="Contact Us"
        subheading="Get in touch for a free consultation. We're here to help with your borewell needs."
        backgroundImage="/assets/images/hero/hero-1.webp"
      />

      {/* Contact Details & Map Section */}
      <section className="lg:py-20 py-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info Cards Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} />
              ))}
            </div>

            {/* Map Column */}
            <div
              className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]
rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11017.37644325397!2d80.15333072849397!3d12.940650794351695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f005a39919f%3A0x8ff8fe6f939c19b4!2sANANDAN%20BOREWELL%20SERVICE!5e0!3m2!1sen!2sin!4v1771665170858!5m2!1sen!2sin"
                height="100%"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <AreasWeServe />

      <InfoBanner
        title="Want to see our work in person? Get in touch with us today."
        subtitle="Visit our borewell site to see our drilling work, machinery, and water results firsthand."
      />
    </main>
  );
}
