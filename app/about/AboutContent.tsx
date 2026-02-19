"use client";

import {
  Users,
  Zap,
  MapPin,
  Clock,
  Award,
  IndianRupee,
  Wrench,
  Heart,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SubHero } from "@/components/layout/SubHero";
import Image from "next/image";

export function AboutContent() {
  return (
    <>
      <SubHero
        title="About Us"
        subheading="Trusted Borewell Experts with Years of Proven Experience"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Story
            </h2>

            <div className="space-y-6 text-slate-700 leading-relaxed text-center">
              <p className="text-lg">
                Anandan Borewell Drilling has been a trusted name in Chennai for
                over 25 years. Founded with a commitment to provide reliable and
                affordable borewell solutions, we have grown to become one of
                the most respected drilling service providers in the region.
              </p>

              <p className="text-lg">
                Our journey began with a simple mission: to help homes, farms,
                and businesses access clean groundwater efficiently and
                affordably. Today, we have successfully completed over 1500+
                projects across Chennai and surrounding areas.
              </p>

              <p className="text-lg">
                We take pride in our team of experienced professionals who bring
                expertise, dedication, and modern equipment to every project.
                Our commitment to customer satisfaction has earned us the trust
                of homeowners, farmers, builders, and apartment associations
                alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#005f99]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#fbc02d] mb-3">
                25+
              </div>
              <p className="text-white text-[13px] md:text-base font-medium">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#fbc02d] mb-3">
                1500+
              </div>
              <p className="text-white text-[13px] md:text-base font-medium">
                Projects Completed
              </p>
            </div>
            <div className="text-center md:border-l border-white/20">
              <div className="text-3xl md:text-5xl font-bold text-[#fbc02d] mb-3">
                100%
              </div>
              <p className="text-white text-[13px] md:text-base font-medium">
                Customer Satisfaction
              </p>
            </div>
            <div className="text-center md:border-l border-white/20">
              <div className="text-3xl md:text-5xl font-bold text-[#fbc02d] mb-3">
                24/7
              </div>
              <p className="text-white text-[13px] md:text-base font-medium">
                Emergency Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why We're Different
            </h2>
            <p className="text-slate-600 text-lg">
              What sets Anandhan Borewell apart from other drilling services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expert Team */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Circular Hover Effect */}
              <div className="absolute -bottom-20 -right-20 w-0 h-0 rounded-full bg-slate-900 transition-all duration-500 ease-out group-hover:w-[500px] group-hover:h-[500px]" />

              <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6 group-hover:bg-white transition-all duration-300">
                <Users className="w-6 h-6 group-hover:text-blue-600" />
              </div>
              <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                Expert Team
              </h3>
              <p className="relative z-10 text-slate-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                Experienced professionals delivering precise, safe, and reliable
                borewell services.
              </p>
            </div>

            {/* Quality Work - Featured Card */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Circular Hover Effect */}
              <div className="absolute -bottom-20 -right-20 w-0 h-0 rounded-full bg-slate-900 transition-all duration-500 ease-out group-hover:w-[500px] group-hover:h-[500px]" />

              <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6 group-hover:bg-white transition-all duration-300">
                <Zap className="w-6 h-6 group-hover:text-blue-600" />
              </div>
              <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                Quality Work
              </h3>
              <p className="relative z-10 text-slate-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                We use modern equipment and follow best practices
              </p>
            </div>

            {/* Chennai Based */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Circular Hover Effect */}
              <div className="absolute -bottom-20 -right-20 w-0 h-0 rounded-full bg-slate-900 transition-all duration-500 ease-out group-hover:w-[500px] group-hover:h-[500px]" />

              <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6 group-hover:bg-white transition-all duration-300">
                <MapPin className="w-6 h-6 group-hover:text-blue-600" />
              </div>
              <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                Chennai Based
              </h3>
              <p className="relative z-10 text-slate-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                Serving all areas of Chennai and surrounding regions with local
                expertise.
              </p>
            </div>

            {/* On-Time Service */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Circular Hover Effect */}
              <div className="absolute -bottom-20 -right-20 w-0 h-0 rounded-full bg-slate-900 transition-all duration-500 ease-out group-hover:w-[500px] group-hover:h-[500px]" />

              <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6 group-hover:bg-white transition-all duration-300">
                <Clock className="w-6 h-6 group-hover:text-blue-600" />
              </div>
              <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                On-Time Service
              </h3>
              <p className="relative z-10 text-slate-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                We respect your time and ensure complete works as promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div>
              <Image
                width={400}
                height={400}
                src="/assets/images/about-our-value-img.webp"
                alt="Our Values"
                className="w-full rounded-xl shadow-lg object-cover h-[300px] md:h-[570px]"
              />
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Values
              </h2>
              <p className="text-slate-600 text-base mb-12">
                What sets Anandhan Borewell apart from other drilling services
              </p>

              <div className="space-y-6">
                {/* Quality Guarantee */}
                <div className="relative flex gap-4 pl-6 border-l-4 border-slate-900 overflow-hidden transition-all duration-500 py-4 group cursor-pointer rounded-r-lg">
                  {/* Color Fill Hover Effect */}
                  <div className="absolute inset-0 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0" />

                  <div className="relative z-10 flex gap-4 w-full">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-100 group-hover:bg-white transition-all duration-500 [transition:transform_0.6s_ease-in-out] group-hover:[transform:rotateY(360deg)]">
                        <Award className="h-7 w-7 text-slate-900" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                        Quality guarantee
                      </h3>
                      <p className="text-slate-600 text-sm mt-1 group-hover:text-white/90 transition-colors duration-500 leading-relaxed font-medium">
                        We stand behind our work with comprehensive warranty
                        coverage
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fair Pricing */}
                <div className="relative flex gap-4 pl-6 border-l-4 border-slate-900 overflow-hidden transition-all duration-500 py-4 group cursor-pointer rounded-r-lg">
                  {/* Color Fill Hover Effect */}
                  <div className="absolute inset-0 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0" />

                  <div className="relative z-10 flex gap-4 w-full">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-100 group-hover:bg-white transition-all duration-500 [transition:transform_0.6s_ease-in-out] group-hover:[transform:rotateY(360deg)]">
                        <IndianRupee className="h-7 w-7 text-slate-900" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                        Fair pricing
                      </h3>
                      <p className="text-slate-600 text-sm mt-1 group-hover:text-white/90 transition-colors duration-500 leading-relaxed font-medium">
                        Transparent pricing with no hidden charge or surprise
                        costs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modern Equipment */}
                <div className="relative flex gap-4 pl-6 border-l-4 border-slate-900 overflow-hidden transition-all duration-500 py-4 group cursor-pointer rounded-r-lg">
                  {/* Color Fill Hover Effect */}
                  <div className="absolute inset-0 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0" />

                  <div className="relative z-10 flex gap-4 w-full">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-100 group-hover:bg-white transition-all duration-500 [transition:transform_0.6s_ease-in-out] group-hover:[transform:rotateY(360deg)]">
                        <Wrench className="h-7 w-7 text-slate-900" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                        Modern Equipment
                      </h3>
                      <p className="text-slate-600 text-sm mt-1 group-hover:text-white/90 transition-colors duration-500 leading-relaxed font-medium">
                        Using latest drilling technology for efficient and
                        precise work
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer First */}
                <div className="relative flex gap-4 pl-6 border-l-4 border-slate-900 overflow-hidden transition-all duration-500 py-4 group cursor-pointer rounded-r-lg">
                  {/* Color Fill Hover Effect */}
                  <div className="absolute inset-0 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0" />

                  <div className="relative z-10 flex gap-4 w-full">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-100 group-hover:bg-white transition-all duration-500 [transition:transform_0.6s_ease-in-out] group-hover:[transform:rotateY(360deg)]">
                        <Heart className="h-7 w-7 text-slate-900" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                        Customer First
                      </h3>
                      <p className="text-slate-600 text-sm mt-1 group-hover:text-white/90 transition-colors duration-500 leading-relaxed font-medium">
                        your satisfaction is our top priority in every project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1e5a96] via-[#0066b3] to-[#1e8db3]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start your project?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today for a free consultation and quote. We're here to
              help with all your borewell needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:9840105134">
                <Button
                  size="lg"
                  className="rounded-lg bg-[#fbc02d] hover:bg-[#FFB300] text-slate-900 border-none font-bold px-10 py-4 text-lg shadow-lg btn-custom-hover"
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
                  className="rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none font-bold px-10 py-4 text-lg shadow-lg btn-custom-hover"
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
        </div>
      </section>
    </>
  );
}
