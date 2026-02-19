import { Metadata } from "next";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
    title: "Gallery | Our Borewell Drilling Works",
    description: "View photos of our completed borewell drilling projects and modern equipment in action across Chennai. We use rotary drilling rigs and high-capacity compressors.",
};

export default function GalleryPage() {
    return <GalleryContent />;
}
