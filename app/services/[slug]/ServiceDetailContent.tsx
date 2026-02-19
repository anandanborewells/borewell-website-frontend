"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { SubHero } from "@/components/layout/SubHero";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  CheckCircle,
  Zap,
  Droplet,
  Gauge,
  Clock,
  Target,
  Shield,
  Wrench,
  Layers,
  MapPin,
  Factory,
  Home,
  Sprout,
  Search,
  Drill,
} from "lucide-react";
import { ServiceFeatureCard } from "@/components/ui/ServiceFeatureCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { MotorOption } from "@/components/ui/MotorOption";

import { servicesData } from "@/lib/services-data";

// Icon mapping for client-side rendering
const iconMap: Record<string, any> = {
  CheckCircle: CheckCircle,
  Zap: Zap,
  Shield: Shield,
  Target: Target,
  Wrench: Wrench,
  Layers: Layers,
  Gauge: Gauge,
  MapPin: MapPin,
  Clock: Clock,
  Home: Home,
  Sprout: Sprout,
  Factory: Factory,
  Droplet: Droplet,
};

function getIcon(name: string) {
  return iconMap[name] || CheckCircle;
}

// Transform shared data to include icons for the UI
const getServiceWithIcons = (slug: string) => {
  const data = servicesData[slug];
  if (!data) return null;

  return {
    ...data,
    whatsIncluded: data.whatsIncluded?.map((item: { text: string }) => ({
      ...item,
      icon: CheckCircle,
    })),
    features: data.features?.map((item) => ({
      ...item,
      icon: getIcon(
        item.title.includes("Pressure")
          ? "Gauge"
          : item.title.includes("Yield")
            ? "Droplet"
            : item.title.includes("Quick")
              ? "Clock"
              : item.title.includes("Expert Handling")
                ? "Wrench"
                : item.title.includes("Safety")
                  ? "Shield"
                  : item.title.includes("Efficient")
                    ? "Zap"
                    : item.title.includes("After-Sales")
                      ? "Wrench"
                      : item.title.includes("Safe")
                        ? "Shield"
                        : item.title.includes("Modern")
                          ? "Cpu" // or Settings
                          : item.title.includes("Quick")
                            ? "Clock"
                            : item.title.includes("Expert")
                              ? "UserCheck" // or Wrench
                              : "Target",
      ),
    })),
    // features: data.features?.map((item: { title: string; description: string }) => ({ ...item, icon: getIcon(item.title.includes('Safety') ? 'Shield' : item.title.includes('Efficient') ? 'Zap' : item.title.includes('After-Sales') ? 'Wrench' : 'Target') })),
    capabilities: data.capabilities?.map(
      (item: { title: string; description: string }) => ({
        ...item,
        icon: getIcon(
          item.title.includes("Diameter")
            ? "Layers"
            : item.title.includes("Deep")
              ? "Gauge"
              : item.title.includes("Soil")
                ? "MapPin"
                : "Clock",
        ),
      }),
    ),
    applications: data.applications?.map(
      (item: { title: string; description: string }) => ({
        ...item,
        icon: getIcon(
          item.title.includes("Res")
            ? "Home"
            : item.title.includes("Agri")
              ? "Sprout"
              : "Factory",
        ),
      }),
    ),
    benefits: data.benefits?.map(
      (item: { title: string; description: string }) => ({
        ...item,
        icon: getIcon(
          item.title.includes("Deep")
            ? "Droplet"
            : item.title.includes("Flow")
              ? "Gauge"
              : item.title.includes("Quality")
                ? "Shield"
                : "Wrench",
        ),
      }),
    ),
    whenNeeded: data.whenNeeded?.map(
      (item: { title: string; description: string }) => ({
        ...item,
        icon: CheckCircle,
      }),
    ),
    methods: data.methods?.map((item: { text: string }) => ({
      ...item,
      icon: CheckCircle,
    })),
  };
};

// How We Work Section Component with Animation
function HowWeWorkSection({
  steps,
}: {
  steps: Array<{ number: string; title: string; description: string }>;
}) {
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= steps.length ? 1 : prev + 1));
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(timer);
  }, [steps.length]);

  // Map step icons
  const stepIcons = [Search, MapPin, Drill, CheckCircle];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto text-sm">
          Our step-by-step processing ensures professional service and reliable
          results.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-8 md:gap-0">
          {steps.map((step, index) => {
            const Icon = stepIcons[index] || CheckCircle;
            return (
              <div
                key={step.number}
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
                      {step.number}
                    </div>

                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>

                  {/* Text Content */}
                  <div
                    className={`mt-6 text-center max-w-[240px] md:max-w-[200px] transition-opacity duration-300 ${index + 1 === currentStep ? "opacity-100" : "opacity-80"}`}
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[13px] md:text-xs text-slate-500 leading-relaxed font-medium">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailContent({ slug }: { slug: string }) {
  const service = getServiceWithIcons(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <SubHero
        title={service.title}
        subheading={service.subheading}
        backgroundImage={service.imageUrl}
      />

      {/* Main Service Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 items-start">
            {/* Left Column: Image + Description */}
            <div className="space-y-5 max-w-lg">
              {/* Small Square Image */}
              <div className="">
                <div className="rounded-lg overflow-hidden border-[3px] border-slate-200 w-full h-[300px] lg:max-w-[350px]">
                  <img
                    src={service.mainImage}
                    alt={service.mainTitle}
                    className="w-full aspect-[4/5] object-cover h-full"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[22px] md:text-[26px] font-bold text-slate-900 leading-tight">
                {service.mainTitle}
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                {service.mainDescription
                  .split("\n\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Right Column: What's Included Box */}
            <div>
              {service.whatsIncluded && (
                <div className="bg-slate-50 rounded-lg p-7">
                  <h3 className="text-[21px] font-bold text-slate-900 mb-5">
                    What's Included
                  </h3>
                  <div className="space-y-3.5">
                    {service.whatsIncluded.map((item: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <item.icon
                          className="w-5 h-5 text-[#005f99] flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span className="text-slate-700 text-[16px] leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.methods && (
                <div className="bg-slate-50 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-5">
                    Our Cleaning Methods
                  </h3>
                  <div className="space-y-3">
                    {service.methods.map((item: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <item.icon
                            className="w-5 h-5 text-[#005f99]"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-[15px] text-slate-800">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features / Capabilities / Benefits Section */}
      {(service.features || service.capabilities || service.benefits) && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
              {service.features && `Why Choose Our ${service.title}`}
              {service.capabilities && "Drilling Capabilities"}
              {service.benefits && "Benefits of Professional Cleaning"}
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              {service.capabilities &&
                "Our modern equipment and skilled team can handle any drilling requirement"}
              {service.benefits && ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {(
                service.features ||
                service.capabilities ||
                service.benefits
              )?.map((item: any, index: number) => (
                <ServiceFeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps Section - Animated */}
      {service.processSteps && (
        <HowWeWorkSection steps={service.processSteps} />
      )}

      {/* Motor Options Section */}
      {service.motorOptions && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-slate-900 mb-4 font-outfit">
              Motor Options Available
            </h2>
            <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto text-base">
              We install various capacities based on your borewell depth and
              water needs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {service.motorOptions.map(
                (option: { hp: string; type: string }, index: number) => (
                  <MotorOption key={index} hp={option.hp} type={option.type} />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* Applications Section */}
      {service.applications && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              Applications
            </h2>
            <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto text-base">
              Our borewell drilling services cater to various needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.applications.map(
                (
                  app: { title: string; description: string },
                  index: number,
                ) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 text-left border border-slate-100 shadow-sm"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {app.title}
                    </h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                      {app.description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* When Needed Section */}
      {service.whenNeeded && (
        <section className="py-20 bg-[#F4F7FA]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              When Do You Need Borewell Recovery and Stucked Motor Recovery?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.whenNeeded.map(
                (
                  item: { title: string; description: string },
                  index: number,
                ) => (
                  <div
                    key={index}
                    className="group bg-white rounded-[20px] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,59,115,0.12)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[220px]"
                  >
                    {/* Decorative Arcs - Reusing from ServiceCard aesthetic */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 border-[10px] border-[#D1DBE5] rounded-full z-0 pointer-events-none opacity-50 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute -bottom-16 right-[15%] w-28 h-28 border-[10px] border-[#D1DBE5] rounded-full z-0 pointer-events-none opacity-50 transition-transform duration-700 group-hover:scale-110" />

                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle
                          className="w-8 h-8 text-[#003B73]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#003B73] mb-3 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-[15px] md:text-16px font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* Cleaning Schedule Section */}
      {service.schedule && (
        <section className="py-20 bg-gradient-to-b from-[#005f99] to-[#004e8d]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-outfit">
              Recommended Cleaning Schedule
            </h2>
            <p className="text-white/90 mb-12 max-w-3xl mx-auto text-[17px] leading-relaxed">
              We recommend professional borewell cleaning every 2-3 years, or
              annually for
              <br className="hidden md:block" /> borewells with heavy usage or
              poor water quality areas.
            </p>

            <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 px-10 shadow-xl">
              <div className="text-1xl md:text-2xl font-bold text-[#FFC107] mb-2 font-outfit">
                Every 2-3 Years
              </div>
              <div className="text-[13px] font-medium text-white/90">
                For optimal performance
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Signs Section */}
      {service.signs && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-[34px] font-bold text-center text-[#0F172A] mb-4 font-outfit">
              Signs Your Borewell Needs Cleaning
            </h2>
            <p className="text-center text-slate-500 mb-20 max-w-2xl mx-auto text-[16px]">
              Watch for these warning signs that indicate it's time for
              professional cleaning
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-14 max-w-6xl mx-auto">
              {service.signs.map(
                (
                  sign: { number: string; title: string; description: string },
                  index: number,
                ) => (
                  <div
                    key={index}
                    className={`relative group bg-[#F8FAFC] rounded-r-xl px-10 py-6 border-l-[6px] border-[#FFC107] overflow-hidden transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl ${index % 2 !== 0 ? "md:translate-y-16" : ""}`}
                  >
                    {/* Color Fill Hover Effect (Yellow) */}
                    <div className="absolute inset-0 bg-[#FFC107] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0" />

                    <div className="relative z-10 flex items-center gap-10">
                      <div className="flex-shrink-0 relative w-14 h-14 flex items-center justify-center">
                        {/* Number Circle on Hover */}
                        <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 text-2xl font-bold text-[#FFC107] group-hover:text-slate-900 transition-colors duration-500 font-outfit">
                          {sign.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A] mb-1 font-outfit">
                          {sign.title}
                        </h3>
                        <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                          {sign.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e5a96] via-[#0066b3] to-[#1e8db3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {service.ctaTitle}
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            {service.ctaDescription}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
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
                className="rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white border-none font-bold px-10 py-4 text-lg shadow-xl btn-custom-hover"
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
      </section>
    </main>
  );
}
