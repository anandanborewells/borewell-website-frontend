"use client";

import { SubHero } from '@/components/layout/SubHero';
import { EquipmentCard } from '@/components/ui/EquipmentCard';
import { InfoBanner } from '@/components/ui/InfoBanner';

const galleryImages = [
    { src: "/assets/images/gallery/gallery-img-1.webp", alt: "Drilling Site 1" },
    { src: "/assets/images/gallery/gallery-img-2.webp", alt: "Drilling Site 2" },
    { src: "/assets/images/gallery/gallery-img-3.webp", alt: "Drilling Site 3" },
    { src: "/assets/images/gallery/gallery-img-4.webp", alt: "Drilling Site 4" },
    { src: "/assets/images/gallery/gallery-img-5.webp", alt: "Drilling Site 5" },
    { src: "/assets/images/gallery/gallery-img-6.webp", alt: "Drilling Site 6" },
    { src: "/assets/images/gallery/gallery-img-7.webp", alt: "Drilling Site 7" },
    { src: "/assets/images/gallery/gallery-img-8.webp", alt: "Drilling Site 8" },
];

const equipment = [
    {
        title: "Rotary Drilling Rig",
        description: "Modern rotary rigs capable of drilling through all soil types and rock formations."
    },
    {
        title: "Air Compressors",
        description: "High-capacity industrial compressors for borewell development and cleaning."
    },
    {
        title: "Submersible Pumps",
        description: "Quality branded motors from 1HP to 15HP for all borewell depths."
    }
];

export function GalleryContent() {
    return (
        <main>
            <SubHero
                title="Our Work"
                subheading="See our borewell drilling machines and completed projects across Chennai."
                backgroundImage="/assets/images/hero/hero-2.webp"
            />

            {/* Gallery Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {galleryImages.map((img, index) => {
                            let spanClass = "";
                            if (index === 0) spanClass = "md:col-span-1 md:row-span-2";
                            else if (index === 1) spanClass = "md:col-span-2 md:row-span-1";
                            else if (index === 2) spanClass = "md:col-span-1 md:row-span-1";
                            else if (index === 3) spanClass = "md:col-span-1 md:row-span-1";
                            else if (index === 4) spanClass = "md:col-span-1 md:row-span-1";
                            else if (index === 5) spanClass = "md:col-span-1 md:row-span-1";
                            else if (index === 6) spanClass = "md:col-span-1 md:row-span-2";
                            else if (index === 7) spanClass = "md:col-span-2 md:row-span-1";

                            return (
                                <div
                                    key={index}
                                    className={`${spanClass} relative rounded-2xl overflow-hidden shadow-md min-h-[250px]`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Our Equipment</h2>
                        <p className="text-slate-500 text-sm">We use modern, well-maintained drilling equipment for efficient and quality work.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {equipment.map((item, index) => (
                            <EquipmentCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <InfoBanner />
        </main>
    );
}
