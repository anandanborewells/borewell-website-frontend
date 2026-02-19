import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Anandan Borewells, a trusted name in Chennai for over 15 years. We specialize in reliable and affordable borewell drilling and maintenance solutions.",
};

export default function About() {
    return <AboutContent />;
}
