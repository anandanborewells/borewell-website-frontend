import { Metadata } from "next";
import { servicesData } from "@/lib/services-data";
import { ServiceDetailContent } from "./ServiceDetailContent";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Anandan Borewells`,
        description: service.subheading,
        openGraph: {
            title: `${service.title} | Anandan Borewells`,
            description: service.subheading,
            images: [service.imageUrl],
        },
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ServiceDetailContent slug={slug} />;
}
