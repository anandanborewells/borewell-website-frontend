import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Borewell Services in Chennai",
    description: "Explore our wide range of borewell services in Chennai, including drilling, cleaning, compressor work, and motor setup. We serve Alwarpet, Velachery, T Nagar, and more.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
