"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  ArrowRight,
  Search,
  MapPin,
  Drill,
  CheckCircle,
  Clock,
  Settings,
  IndianRupee,
  ShieldCheck,
  Heart,
  FileCheck,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { ServiceCard } from "../components/ui/ServiceCard";
import { FeatureCard } from "../components/ui/FeatureCard";
import Link from "next/link";
import Image from "next/image";

// Stats Component (Local)
function Stats() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "1500+", label: "Projects Done" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/30">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-2"
            >
              <span className="block text-3xl md:text-5xl font-extrabold text-[#FFC107] mb-1">
                {stat.value}
              </span>
              <span className="text-white text-sm md:text-lg font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hero Component (Local)
const heroImages = [
  "/assets/images/hero/hero-1.webp",
  "/assets/images/hero/hero-2.webp",
  "/assets/images/hero/hero-3.webp",
  "/assets/images/hero/hero-4.webp",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen lg:max-h-screen flex items-center pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              width={1440}
              height={250}
              priority
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[rgba(3,64,120,0.55)] z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 mt-13 text-white flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col justify-center items-center md:mt-5 ">
            <div className="flex w-60 items-center gap-2 bg-[#005f99]/60 px-4 py-1.5 rounded-full mb-4 border border-white/20 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC107] inline-block" />
              <span className="text-white/90 text-center text-sm font-medium tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] flex flex-col">
                Trusted Borewell Service
              </span>
            </div>
            <div className="flex w-90 items-center gap-2 bg-[#005f99]/60 px-4 py-1.5 rounded-full mb-4 border border-white/20 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC107] inline-block" />
              <span className="text-white/90 text-sm font-medium tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] flex flex-col">
                Chennai,Chengalpattu, kancheepuram
              </span>
            </div>
          </div>
          <h1
            className="text-[28px] md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight 
text-shine drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
          >
            Anandan Borewells
          </h1>

          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold mb-5 text-[#FFC107] drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
            Your Trusted partner for Borewell Solutions
          </h2>

          <p className="text-sm md:text-base text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Our modern equipment and skilled professionals ensure precise
            drilling, strong water yield, and dependable results every time.
          </p>

          <div className="flex gap-4 mb-16 justify-center flex-wrap">
            <a href="tel:9840105134">
              <Button
                size="lg"
                className="rounded-xl bg-[#FFC107] hover:bg-[#FFB300] text-slate-900 border-none font-bold px-10 py-4 text-lg shadow-xl btn-custom-hover"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/+918610688964"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-xl bg-[#39b968] hover:bg-[#20bd5a] text-white border-none font-bold px-10 py-4 text-lg shadow-xl btn-custom-hover"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}

// About Component (Local)
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Us
          </h2>
          <div className="max-w-6xl mx-auto space-y-4 text-slate-600 leading-relaxed text-center">
            <p>
              Anandan Borewell Drilling has been a trusted name in Chennai for
              over 25 years. Founded with a commitment to provide reliable and
              affordable borewell solutions, we have grown to become one of the
              most respected drilling service providers in the region.
            </p>
            <p>
              Our journey began with a simple mission: to help homes, farms, and
              businesses access clean groundwater efficiently and affordably.
              Today, we have successfully completed over 1500+ projects across
              Chennai and surrounding areas.
            </p>
            <p>
              We take pride in our team of experienced professionals who bring
              expertise, dedication, and modern equipment to every project. Our
              commitment to customer satisfaction has earned us the trust of
              homeowners, farmers, builders, and apartment associations alike.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
            <Image
              fill
              src="/assets/images/about/About-img-1.webp"
              alt="Borewell Truck Front"
              className="object-cover"
            />
            {/* Fill Box Effect Layers */}
            <div className="absolute inset-0 bg-[#222222]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-in-out origin-center pointer-events-none" />
            <div className="absolute inset-0 bg-[#222222]/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out origin-center pointer-events-none" />
          </div>

          {/* Card 2 */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
            <Image
              fill
              src="/assets/images/about/About-img-2.webp"
              alt="Drilling Site"
              className=" object-cover"
            />
            {/* Fill Box Effect Layers */}
            <div className="absolute inset-0 bg-[#222222]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-in-out origin-center pointer-events-none" />
            <div className="absolute inset-0 bg-[#222222]/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out origin-center pointer-events-none" />
          </div>

          {/* Card 3 */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
            <Image
              fill
              src="/assets/images/about/About-img-3.webp"
              alt="Business Card"
              className="object-cover"
            />
            {/* Fill Box Effect Layers */}
            <div className="absolute inset-0 bg-[#222222]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-in-out origin-center pointer-events-none" />
            <div className="absolute inset-0 bg-[#222222]/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out origin-center pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Component (Local)
function Services() {
  const services = [
    {
      title: "Borewell Drilling",
      description: [
        "Borewell drilling to get safe and steady water supply.",
        "Borewell drilling to meet daily water needs easily.",
      ],
      imageUrl: "/assets/images/services/borewell-drilling.webp",
      href: "/services/borewell-drilling",
    },
    {
      title: "Borewell Recovery and Stucked Motor Recovery",
      description: [
        "Safe recovery of stuck motors inside the borewell.",
        "Removal of damaged or stuck pipes without borewell damage.",
      ],
      imageUrl: "/assets/images/services/borewell-recovery.webp",
      href: "/services/borewell-recovery",
    },
    {
      title: "Motor Setup and Plumbing Works",
      description: [
        "Power Connection: Connect electricity to the motor to make it run.",
        "Pump Connection: Attach the motor to the borewell pump.",
      ],
      imageUrl: "/assets/images/services/motor-setup.webp",
      href: "/services/motor-setup",
    },
    {
      title: "Borewell Cleaning and Flushing upto 1200 Feet",
      description: [
        "Removes sand, mud, and waste from the borewell.",
        "Improves water flow and water quality.",
      ],
      imageUrl: "/assets/images/services/cleaning-services.webp",
      href: "/services/borewell-cleaning",
    },
  ];

  return (
    <section id="services" className="lg:py-20 py-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#E8F1F8] px-10 py-2.5 rounded-full text-[#334E6F] text-lg font-bold mb-5 tracking-wide shadow-sm">
            Our Services
          </div>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm md:text-[15px] font-medium leading-relaxed opacity-80">
            We repair damaged borewells and provide regular maintenance to
            ensure smooth and long-term performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="h-full">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/services">
            <Button
              variant="outline"
              className="bg-white border-[#005f99]/30 text-[#005f99] hover:bg-[#005f99] hover:text-white px-12 py-3.5 rounded-xl font-bold text-lg transition-all shadow-md group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Process Component (Local)
function Process() {
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: "01",
      title: "Site Survey",
      description:
        "Site inspection is done to identify the best drilling location and water availability.",
      icon: Search,
    },
    {
      id: "02",
      title: "Location Marking",
      description:
        "The exact drilling point is marked to ensure safe and accurate drilling.",
      icon: MapPin,
    },
    {
      id: "03",
      title: "Drilling Work",
      description:
        "Professional drilling is carried out using advanced machines and experienced operators.",
      icon: Drill,
    },
    {
      id: "04",
      title: "Completion",
      description:
        "Final setup and testing are completed before handing over the borewell for use.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto text-sm">
          Our step-by-step drilling process ensures quality results and customer
          satisfaction.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-8 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col md:flex-row items-center relative w-full md:w-auto"
            >
              {/* Step Container (Circle + Text) */}
              <div className="flex flex-col items-center relative z-10 w-full md:w-auto">
                {/* Circle */}
                <div
                  className={`
                                        relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center
                                        transition-all duration-500 shadow-xl
                                        bg-gradient-to-b from-[#0B4F9A] to-[#003366] text-white
                                        ${index + 1 === currentStep ? "scale-110 ring-4 ring-[#FFC107]/30" : "scale-100"}
                                    `}
                >
                  {/* Badge */}
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FFC107] text-[#000e17] font-bold flex items-center justify-center text-sm md:text-base shadow-md z-20">
                    {step.id}
                  </div>

                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Text Content */}
                <div
                  className={`mt-6 text-center max-w-[240px] md:max-w-[200px] transition-opacity duration-300 ${index + 1 === currentStep ? "opacity-100" : "opacity-80"}`}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-xs text-slate-700 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block w-16 lg:w-28 h-[2.5px] bg-slate-100 mx-[-10px] relative z-0 self-start mt-[40px] md:mt-[48px]">
                  {/* Active Line (Yellow) */}
                  <div
                    key={`line-desktop-${index}`}
                    className={`absolute left-0 top-0 h-full bg-[#FFC107] shadow-[0_0_8px_rgba(255,193,7,0.6)] transition-all duration-500
                                            ${index + 1 < currentStep ? "w-full" : index + 1 === currentStep ? "w-full animate-progress" : "w-0"}
                                        `}
                  />
                </div>
              )}

              {/* Connecting Line (Mobile) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden h-12 w-[2.5px] bg-slate-100 my-2 relative z-0">
                  <div
                    key={`line-mobile-${index}`}
                    className={`absolute top-0 left-0 w-full bg-[#FFC107] shadow-[0_0_8px_rgba(255,193,7,0.6)] transition-all duration-[2000ms] ease-linear z-0
                                            ${index + 1 < currentStep ? "h-full opacity-100" : index + 1 === currentStep ? "h-full animate-progress-vertical opacity-100" : "h-0 opacity-0"}
                                        `}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Component (Local)
function Features() {
  const features = [
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Trusted Services many year in chennai region",
    },
    {
      icon: Settings,
      title: "Modern Machine",
      description: "Latest drilling equipment for efficient work",
    },
    {
      icon: IndianRupee,
      title: "Affordable price",
      description: "Competitive rates with no hidden charges",
    },
    {
      icon: ShieldCheck,
      title: "Quality Guarantee",
      description: "We stand behind our work with warranty",
    },
    {
      icon: Heart,
      title: "Local & Trusted",
      description: "Chennai-based with strong local reputation",
    },
    {
      icon: FileCheck,
      title: "Licensed Service",
      description: "Fully licensed and insured professionals",
    },
  ];

  return (
    <section className="py-24 bg-[#1E82BC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Why Choose US
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-base font-medium">
            We are committed to providing the best borewell drilling services
            with honest pricing and reliable workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component (Local)
function Testimonials() {
  const reviews = [
    {
      name: "R. Senthil – Pallavaram",
      rating: 5,
      text: "Enga farm ku pudhu borewell podanum nu contact pannom. 680 feet la strong water kidaichathu. Team soil condition explain pannitu drilling pannanga. Machine modern ah irundhudhu. Borewell Drilling service romba satisfied.",
    },
    {
      name: "K. Manikandan – T.Nagar ",
      rating: 5,
      text: "Enga borewell la motor stuck aagiduchu. Vera company mudiyala nu sonnanga. Anandan Borewells team vandhu safe ah motor recover pannanga without damage. Borewell Recovery service super ah irundhudhu.",
    },
    {
      name: "S. Revathi – Kanchipuram",
      rating: 5,
      text: "Submersible motor installation clean ah pannanga. Wiring and starter setup correct ah pannitu test pannitu dhan poittanga. Motor Setup service professional ah irundhudhu.",
    },
    {
      name: "M. Prabakaran – Chengalpattu",
      rating: 5,
      text: "Old borewell la water flow kammi aayiduchu. Cleaning flushing pannitu water output improve aagiduchu. Borewell Cleaning service romba helpful ah irundhudhu.",
    },
    {
      name: "S. Lakshmi – Padappai",
      image: "/images/reviewers/lakshmi.webp",
      rating: 5,
      text: "Enga veetuku bore podanum nu urgent ah contact pannom. Next day vandhu work start pannanga. Clear explanation kuduthanga. Water yield nalla irukku. Service romba satisfied.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Service That Speaks Through Customers
        </h2>
        <p className="text-slate-500 text-sm">
          Our services are defined by happy customers and proven results, built
          on trust, quality, and real customer experiences.
        </p>
      </div>

      {/* Scrolling Wrapper */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
        {/* Inner Container implementing the animation */}
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll">
          {/* Duplicate list for seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow w-[300px] sm:w-[450px] md:h-[200px]  h-[280px]  flex-shrink-0 mx-4"
            >
              {/* Card Header: Avatar + Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-lg">
                      {review?.name}
                    </h4>
                    <div className="flex gap-1">
                      {[...Array(review?.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#FFC107] fill-[#FFC107]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <hr className="border-slate-100 mb-4" />

              {/* Review Text */}
              <p className="text-slate-500 text-sm leading-relaxed text-left">
                {review?.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Stars (Sparkles) */}
      <div className="absolute top-1/4 left-10 text-blue-200 opacity-50">
        <Star className="w-8 h-8 rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 text-blue-200 opacity-50">
        <Star className="w-10 h-10 -rotate-12" />
      </div>
    </section>
  );
}

export function HomeContent() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Process />
      <Features />
      <div className="bg-white">
        <Image
          width={1440}
          height={250}
          src="/assets/images/home-check-banner.webp"
          alt="Home Check Banner"
          className="w-full h-40 lg:h-auto block"
        />
      </div>
      <Testimonials />
    </>
  );
}
