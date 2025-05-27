import { Leaf } from 'lucide-react';
import { Sprout } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Users } from 'lucide-react';
import { HeartPulse } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import avatarMale1 from "../assets/profile-pictures/male-avatar.jpg"; // Example generic avatar
import avatarFemale1 from "../assets/profile-pictures/female-avatar.jpg"; // Example generic avatar

export const navItems = [
  { label: "Home", href: "#hero" }, // Link to Hero section
  { label: "Our Products", href: "#products" }, // Link to a new/repurposed product overview section
  { label: "Our Philosophy", href: "#philosophy" }, // Link to repurposed Workflow section
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#footer" }, // Or a dedicated contact section
];

export const testimonials = [
  {
    user: "Lakshmi R.",
    company: "Chennai Customer",
    image: avatarFemale1,
    text: "The cold-pressed sesame oil is the best I've ever tasted! So pure and authentic. Thank you, Nammalvar Eyarkaiyagam!",
  },
  {
    user: "Arun Kumar",
    company: "Local Resident, Farmville",
    image: avatarMale1, // Replace
    text: "I've switched completely to their traditional rice varieties. The taste and health benefits are noticeable. Highly recommend the Black Rice!",
  },
  {
    user: "Priya S.",
    company: "Health Conscious Consumer",
    image: avatarFemale1, // Replace
    text: "Their range of herbal products like Tulsi and Moringa powder are excellent quality. I appreciate their commitment to natural wellness.",
  },
  {
    user: "Karthik M.",
    company: "Supports Local",
    image: avatarMale1, // Replace
    text: "It's wonderful to find a store that truly follows Nammalvar's principles. Buying from them feels good, knowing I support ethical farming.",
  },
  {
    user: "Deepa V.",
    company: "Family Shopper",
    image: avatarFemale1, // Replace
    text: "The natural soaps are gentle and effective, especially the Shikakai. My whole family loves them. No more harsh chemicals!",
  },
  {
    user: "Suresh G.",
    company: "Bulk Buyer",
    image: avatarMale1, // Replace
    text: "I regularly purchase palm jaggery and spices in bulk for my sweets business. The quality is consistently high, and the service is reliable.",
  },
  {
    user: "Anitha B.",
    company: "Yoga Instructor",
    image: avatarFemale1, // Replace
    text: "Finding authentic herbal drinks and natural health products here has been a blessing. The Thalisadi is particularly good for seasonal changes.",
  },
  {
    user: "Rajesh Pillai",
    company: "Traditional Food Enthusiast",
    image: avatarMale1, // Replace
    text: "The variety of traditional millets and rice noodles is impressive. It's great to see these ancient grains being promoted and made accessible.",
  },
  {
    user: "Shanti Devi",
    company: "Elderly Customer",
    image: avatarFemale1, // Replace
    text: "I trust the purity of their ghee products. The country cow ghee reminds me of my childhood. Very good for health.",
  },
];

export const features = [
  {
    icon: <Leaf />,
    text: "100% Organic & Natural",
    description: "All our products are sourced from farms practicing agroecology, free from chemicals and pesticides.",
  },
  {
    icon: <Sprout />,
    text: "Traditional Varieties",
    description: "We champion and provide ancient, native rice, pulses, and grains, preserving our agricultural heritage.",
  },
  {
    icon: <ShieldCheck />, // Or similar for quality/trust
    text: "Nammalvar's Principles",
    description: "Cultivated with care, following the sustainable and life-affirming principles of Thiru. Nammalvar.",
  },
  {
    icon: <CircleDollarSign />, // Or a shopping bag icon
    text: "Wide Range of Products",
    description: "From cold-pressed oils and traditional rice to herbal remedies and natural soaps, find all your organic needs.",
  },
  {
    icon: <Users />, // New Feature 1: Community Focus
    text: "Community Connected",
    description: "Join a community dedicated to conscious consumption, supporting local ecosystems and traditional farming wisdom.",
  },
  {
    icon: <HeartPulse />, // New Feature 2: Health Focus
    text: "Promoting Holistic Health",
    description: "Our products are chosen for their nutritional value and traditional medicinal properties, supporting your overall well-being.",
  },
];

export const checklistItems = [
  {
    title: "Embracing Agroecology",
    description: "We practice and promote farming methods that are in harmony with nature, ensuring soil health and biodiversity.",
  },
  {
    title: "Chemical-Free Cultivation",
    description: "Our commitment is to provide food that is pure, safe, and free from harmful pesticides and synthetic fertilizers.",
  },
  {
    title: "Preserving Native Seeds",
    description: "We actively work to conserve and propagate traditional seed varieties, vital for food security and tradition.",
  },
  {
    title: "Supporting Local Farmers",
    description: "By choosing our products, you support a network of farmers dedicated to sustainable and ethical practices.",
  },
];

export const orderingOptions  = [
  {
    title: "Visit Our Store",
    price: "Find us at:", // Or remove price line
    features: [
      "270, Ranga Konar St, Kattoor Main, Kattoor",
      "Open: Mon-Sat, 9 AM - 7 PM",
      "Browse our full range of fresh products",
      "Friendly advice and service",
    ],
    actionText: "Get Directions", // Button text
    actionLink: "https://www.google.com/maps/place/270,+Ranga+Konar+St,+Kattoor+Main,+Kattoor,+Ram+Nagar,+Coimbatore,+Tamil+Nadu+641009/@11.0078195,76.9644407,19z/data=!4m6!3m5!1s0x3ba859a9fb636f15:0x20f59ebef007ac22!8m2!3d11.0077086!4d76.9646854!16s%2Fg%2F11rg64wkp4?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" // Link to Google Maps or contact section
  },
  {
    title: "Order by Phone",
    price: "Call us:", // Or remove price line
    features: [
      "Contact: +91 78459 80054 / +91 95009 10054",
      "Ask about Nattu varieties and availability",
      "Special discounts for bulk orders (2 lakhs+)",
      "Home delivery options may be available (specify if so)",
    ],
    actionText: "Call Now",
    actionLink: "tel:+917845980054"
  },
  {
    title: "Community Farming Initiatives", // New Option
    price: "Connect & Participate:",
    features: [
      "Learn about our farm partnerships",
      "Enquire about Community Supported Agriculture (CSA)",
      "Opportunities for farm visits (seasonal)",
      "Stay updated on workshops & events",
    ],
    actionText: "Learn More",
    actionLink: "#footer" // Or a specific contact email mailto: link or a dedicated page if you create one
  },
];

export const resourcesLinks = [
  { href: "#philosophy", text: "Our Philosophy" },
  { href: "#", text: "About Nammalvar (Link to external resource or new page)" },
  { href: "#testimonials", text: "Customer Stories" },
  { href: "#", text: "Blog/Health Tips (Future)" },
];

export const productHighlightsLinks = [
  { href: "#products", text: "Cold-Pressed Oils" },
  { href: "#products", text: "Traditional Rice" },
  { href: "#products", text: "Herbal Products" },
  { href: "#products", text: "Natural Soaps" },
  { href: "#products", text: "Spices & Pulses" },
];

export const communityLinks = [
  { href: "#footer", text: "Contact Us" }, // Assuming contact info is in footer
  { href: "#", text: "Visit Our Store" },
  { href: "#", text: "Events & Workshops (Future)" },
  { href: "https://www.facebook.com/share/g/1BVXUpAk3F/", text: "Facebook" },
  { href: "https://www.instagram.com/nammalvar_organic_farming1/", text: "Instagram" },
];
