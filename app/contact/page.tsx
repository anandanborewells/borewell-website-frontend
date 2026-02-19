import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Anandan Borewells for professional borewell drilling and services in Chennai. Call us at +91 98765 43210 for a free consultation.",
};

export default function ContactPage() {
    return <ContactContent />;
}
