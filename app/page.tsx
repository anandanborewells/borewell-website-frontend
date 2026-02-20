import { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
    title: "Anandan Borewells | Professional Borewell Drilling and Cleaning in Chennai",
    description: "Looking for borewell drilling in Chennai? Anandan Borewells provides top-quality 4-12 inch drilling, compressor cleaning, and motor setup services. 25+ years of excellence.",
    alternates: {
        canonical: "https://anandanborewells.com",
    },
};

export default function Home() {
    return (
        <main>
            <HomeContent />
        </main>
    );
}
