export interface ServiceData {
  title: string;
  subheading: string;
  imageUrl: string;
  mainImage: string;
  mainTitle: string;
  mainDescription: string;
  whatsIncluded?: Array<{ text: string }>;
  features?: Array<{ title: string; description: string }>;
  capabilities?: Array<{ title: string; description: string }>;
  processSteps?: Array<{ number: string; title: string; description: string }>;
  motorOptions?: Array<{ hp: string; type: string }>;
  benefits?: Array<{ title: string; description: string }>;
  schedule?: { title: string; subtitle: string; description: string };
  signs?: Array<{ number: string; title: string; description: string }>;
  applications?: Array<{ title: string; description: string }>;
  whenNeeded?: Array<{ title: string; description: string }>;
  methods?: Array<{ text: string }>;
  ctaTitle: string;
  ctaDescription: string;
}

export const servicesData: Record<string, ServiceData> = {
  "motor-setup": {
    title: "Motor Setup",
    subheading:
      "Professional Submersible pump motor installation and setup for efficient water extraction from your borewell.",
    imageUrl: "/assets/images/hero/hero-1.webp",
    mainImage: "/assets/images/services/motor-setup.webp",
    mainTitle: "Complete Motor Installation Service",
    mainDescription:
      "A complete motor installation service includes all the essential components and professional labor that are required for a reliable and efficient water supply system.\n\nOur expert team handles every aspect of installation, from selecting the right motor to final testing and commissioning. We ensure proper wiring, safety checks, and efficient plumbing connections to give you a hassle-free water supply system.",
    whatsIncluded: [
      { text: "Submersible pump selection and supply" },
      { text: "Complete electrical wiring" },
      { text: "Motor installation at proper depth" },
      { text: "Control panel installation" },
      { text: "Starter panel installation" },
      { text: "Voltage stabilizer installation" },
      { text: "Dry run protection setup" },
      { text: "Testing and commissioning" },
    ],
    features: [
      {
        title: "Efficient Motors",
        description:
          "High-quality submersible pumps for reliable water extraction",
      },
      {
        title: "Complete Setup",
        description: "Professional wiring including wiring and starter setup",
      },
      {
        title: "Safety First",
        description:
          "Proper electrical protection and grounding for safe operation",
      },
      {
        title: "After-Sales Support",
        description:
          "Ongoing maintenance and support for trouble-free operation",
      },
    ],
    motorOptions: [
      { hp: "1 HP", type: "Submersible Pump" },
      { hp: "1.5 HP", type: "Submersible Pump" },
      { hp: "2 HP", type: "Submersible Pump" },
      { hp: "3 HP", type: "Submersible Pump" },
      { hp: "5 HP", type: "Submersible Pump" },
      { hp: "7.5 HP", type: "Submersible Pump" },
      { hp: "10 HP", type: "Submersible Pump" },
      { hp: "15 HP", type: "Submersible Pump" },
    ],
    ctaTitle: "Need a Motor Installed?",
    ctaDescription:
      "Contact us for professional motor setup that ensures reliable water supply for years.",
  },
  "borewell-drilling": {
    title: "Borewell Drilling",
    subheading:
      "Professional borewell drilling services for residential, commercial, and agricultural needs using modern equipment.",
    imageUrl: "/assets/images/hero/hero-2.webp",
    mainImage: "/assets/images/services/borewell-drilling.webp",
    mainTitle: "Complete Borewell Drilling Solution",
    mainDescription:
      "Our borewell drilling service provides a complete solution for accessing groundwater. Whether you need water for your home, farm, or commercial building, we have the expertise and equipment to deliver.\n\nWe use modern rotary drilling machines that can efficiently drill through all types of soil and rock formations found in Chennai and surrounding areas. Our experienced team ensures the job is done right the first time.\n\nFrom initial site survey to final water testing, we handle every aspect of the drilling process professionally and efficiently.",
    whatsIncluded: [
      { text: "Free site survey and consultation" },
      { text: "Geological assessment" },
      { text: "Experienced drilling operators" },
      { text: "PVC casing pipe installation" },
      { text: "Gravel packing" },
      { text: "Water quality testing" },
      { text: "Competitive pricing" },
      { text: "All-Chennai service" },
    ],
    capabilities: [
      {
        title: "Multiple Diameters",
        description:
          "We offer borewells in 4.5 to 22 inch diameters to meet your needs",
      },
      {
        title: "Deep Drilling",
        description:
          "Capable of drilling up to 2000 feet deep to reach water sources",
      },
      {
        title: "All Soil Types",
        description:
          "Experienced in drilling through hard rock, clay, sand, and mixed formations",
      },
      {
        title: "Quick Completion",
        description:
          "Efficient drilling process with minimal disruption to your property",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Site Survey",
        description:
          "Assessing the location and determining the best drilling spot",
      },
      {
        number: "02",
        title: "Location Marking",
        description:
          "Marking the exact drilling point based on geological data",
      },
      {
        number: "03",
        title: "Drilling Work",
        description:
          "Using modern rigs to drill to the required depth efficiently",
      },
      {
        number: "04",
        title: "Completion",
        description:
          "Installing casing, testing water yield, and handing over the borewell",
      },
    ],
    applications: [
      {
        title: "Residential",
        description:
          "Individual homes and apartment complexes requiring reliable water supply",
      },
      {
        title: "Agricultural",
        description:
          "Farms and agricultural lands needing irrigation and livestock water",
      },
      {
        title: "Commercial",
        description:
          "Industries, offices, and commercial buildings with high water demand",
      },
    ],
    ctaTitle: "Need a Borewell Drilled?",
    ctaDescription:
      "Contact us for a free site survey and get a quote for your drilling project.",
  },
  "borewell-recovery": {
    title: "Borewell Recovery and Stucked Motor Recovery",
    subheading:
      "Professional recovery services for stuck motors, pipes, and materials inside borewells using safe and advanced techniques.",
    imageUrl: "/assets/images/hero/hero-3.webp",
    mainImage: "/assets/images/services/borewell-recovery.webp",
    mainTitle: "Professional Borewell Recovery Services",
    mainDescription:
      "We provide expert borewell recovery and stuck motor recovery services for residential, agricultural, and commercial borewells. Motors and pipes may get stuck due to sand accumulation, pipe damage, or mechanical issues.\n\nOur experienced team uses modern recovery equipment to safely remove stuck motors and materials without damaging the borewell structure, restoring normal operation quickly and efficiently.",

    whatsIncluded: [
      { text: "Stuck motor recovery" },
      { text: "Removal of damaged or stuck pipes" },
      { text: "Safe borewell material recovery" },
      { text: "Inspection before recovery process" },
      { text: "Careful handling to avoid borewell damage" },
      { text: "Restoration of borewell operation" },
    ],

    features: [
      {
        title: "Safe Recovery",
        description:
          "Careful recovery process without damaging the borewell walls",
      },
      {
        title: "Modern Equipment",
        description: "Advanced tools for efficient motor and pipe recovery",
      },
      {
        title: "Quick Response",
        description: "Fast recovery service to reduce downtime",
      },
      {
        title: "Expert Technicians",
        description: "Experienced team specialized in borewell recovery work",
      },
    ],

    whenNeeded: [
      {
        title: "Motor Stuck Inside Borewell",
        description:
          "Recommended when the submersible motor becomes stuck due to sand accumulation, misalignment, or mechanical issues.",
      },
      {
        title: "Damaged or Jammed Pipes",
        description:
          "Required when pipes are broken, collapsed, or stuck inside the borewell, preventing normal operation.",
      },
      {
        title: "Failure of Normal Retrieval Methods",
        description:
          "When conventional removal methods are unsuccessful and professional recovery techniques are necessary.",
      },
      {
        title: "Urgent Water Supply Restoration",
        description:
          "Ideal in emergency situations where quick recovery is needed to restore water supply and avoid downtime.",
      },
    ],

    ctaTitle: "Need Borewell or Motor Recovery?",
    ctaDescription:
      "Contact us for safe and professional borewell recovery and stuck motor recovery services.",
  },

  "borewell-cleaning": {
    title: " Borewell Cleaning and Flushing upto 1200 Feet",
    subheading:
      "Professional deep cleaning service to restore your borewell's performance and improve water quality.",
    imageUrl: "/assets/images/hero/hero-4.webp",
    mainImage: "/assets/images/services/cleaning-services.webp",
    mainTitle: "Restore Your Borewell's Performance",
    mainDescription:
      "Over time, borewells accumulate silt, sand, and mineral deposits that reduce water flow and quality. Regular cleaning is vital to prevent borewell failure.\n\nOur professional cleaning is essential to maintain optimal performance. We use specialized equipment and techniques to thoroughly clean your borewell, remove blockages, and restore it to like-new condition.\n\nProper cleaning can significantly improve the water yield and quality while extending the life of your pump.",
    methods: [
      { text: "High-pressure air jetting" },
      { text: "Chemical treatment for scale removal" },
      { text: "Mechanical brushing" },
      { text: "Sump and pipeline cleaning" },
      { text: "Algae and chlorine" },
      { text: "Post-cleaning flushing" },
    ],
    benefits: [
      {
        title: "Deep Cleaning",
        description:
          "Thorough removal of deposits and debris to restore water flow",
      },
      {
        title: "Improved Flow",
        description:
          "Significantly increases water yield after professional cleaning",
      },
      {
        title: "Better Quality",
        description: "Cleaner water with reduced sediment and improved taste",
      },
      {
        title: "Regular Maintenance",
        description:
          "Prevents long-term damage and extends the life of your borewell",
      },
    ],
    schedule: {
      title: "Every 2-3 Years",
      subtitle: "Ideal for most borewells",
      description:
        "We recommend professional borewell cleaning every 2-3 years, or annually for borewells with heavy usage or poor water quality areas.",
    },
    signs: [
      {
        number: "1",
        title: "Reduced Water Flow",
        description: "Gradual decrease in water output from the borewell",
      },
      {
        number: "2",
        title: "Muddy or Discolored Water",
        description: "Water appears cloudy or contains visible sediment",
      },
      {
        number: "3",
        title: "Pump Running Longer",
        description: "Motor runs longer to fill the same amount of water",
      },
      {
        number: "4",
        title: "Unusual Sounds",
        description: "Gurgling or other sounds from the borewell",
      },
    ],
    ctaTitle: "Is Your Borewell Underperforming?",
    ctaDescription:
      "Contact us for professional cleaning service and restore your borewell to peak performance.",
  },
};
