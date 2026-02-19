import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "Anandan Borewells | Best Borewell Drilling Services in Chennai",
        template: "%s | Anandan Borewells",
    },
    description: "Anandan Borewells offers expert 4-12 inch borewell drilling, compressor work, motor setup, and borewell cleaning services in Chennai. 15+ years of experience. Call now!",
    keywords: ["Borewell Drilling Chennai", "Borewell Cleaning Chennai", "Submersible Pump installation", "Compressor Borewell Cleaning", "Borewell Services Chennai", "Anandan Borewells"],
    authors: [{ name: "Anandan Borewells" }],
    creator: "Anandan Borewells",
    publisher: "Anandan Borewells",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://anandanborewells.com",
        siteName: "Anandan Borewells",
        title: "Anandan Borewells | Professional Borewell Drilling in Chennai",
        description: "Leading borewell drilling and maintenance service provider in Chennai with over 15 years of excellence.",
        images: [
            {
                url: "/assets/images/hero/hero-3.png",
                width: 1200,
                height: 630,
                alt: "Anandan Borewells Drilling Service",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Anandan Borewells | Professional Borewell Drilling in Chennai",
        description: "Expert borewell drilling and maintenance services in Chennai. 15+ years experience.",
        images: ["/assets/images/hero/hero-3.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans text-slate-800 bg-white min-h-screen`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Anandan Borewells",
                            "image": "https://anandanborewells.com/assets/images/hero/hero-3.png",
                            "@id": "https://anandanborewells.com",
                            "url": "https://anandanborewells.com",
                            "telephone": "+91 98765 43210",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "T.T.K. Road, Alandanpura Colony, Alwarpet",
                                "addressLocality": "Chennai",
                                "postalCode": "600018",
                                "addressRegion": "Tamil Nadu",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 13.04184,
                                "longitude": 80.24584
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday"
                                ],
                                "opens": "07:00",
                                "closes": "19:30"
                            },
                            "sameAs": []
                        })
                    }}
                />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
