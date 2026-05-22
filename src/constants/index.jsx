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
  { label: "Home", href: "/" }, // Link to Hero section
  { label: "Our Products", href: "/products" }, // Link to a new/repurposed product overview section
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
    price: "Find us at:",
    features: [
      "270, Ranga Konar St, Kattoor Main, Kattoor",
      "Open: Mon-Sat, 9 AM - 7 PM",
      "Browse our full range of fresh products",
      "Friendly advice and service",
    ],
    actionText: "Get Directions",
    actionLink: "https://www.google.com/maps/place/270,+Ranga+Konar+St,+Kattoor+Main,+Kattoor,+Ram+Nagar,+Coimbatore,+Tamil+Nadu+641009/@11.0078195,76.9644407,19z/data=!4m6!3m5!1s0x3ba859a9fb636f15:0x20f59ebef007ac22!8m2!3d11.0077086!4d76.9646854!16s%2Fg%2F11rg64wkp4?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
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
  { href: "/products", text: "Cold-Pressed Oils" },
  { href: "/products", text: "Traditional Rice" },
  { href: "/products", text: "Herbal Products" },
  { href: "/products", text: "Natural Soaps" },
  { href: "/products", text: "Spices & Pulses" },
];

export const communityLinks = [
  { href: "#footer", text: "Contact Us" }, // Assuming contact info is in footer
  { href: "#", text: "Visit Our Store" },
  { href: "#", text: "Events & Workshops (Future)" },
  { href: "https://www.facebook.com/share/g/1BVXUpAk3F/", text: "Facebook" },
  { href: "https://www.instagram.com/nammalvar_organic_farming1/", text: "Instagram" },
];

import placeholderImg from "../assets/products/placeholder.jpg";
import sesameOilImg from "../assets/products/sesame-oil.jpg";
import coconutOilImg from "../assets/products/coconut-oil.jpg";
// import groundnutOilImg from "../assets/products/groundnut-oil.jpg";
import blackRiceImg from "../assets/products/black-rice.jpg";
import redRiceImg from "../assets/products/red-rice.jpg";
// import mappillaiSambaImg from "../assets/products/mappillai-samba.jpg";
// import seeragaSambaImg from "../assets/products/seeraga-samba.jpg";
import turmericPowderImg from "../assets/products/turmeric-powder.jpg";
// import corianderPowderImg from "../assets/products/coriander-powder.jpg";
// import shikakaiSoapImg from "../assets/products/shikakai-soap.jpg"; // Example
// import arithaSoapImg from "../assets/products/aritha-soap.jpg"; // Example
// import herbalMixSoapImg from "../assets/products/herbal-mix-soap.jpg";
import palmJaggeryImg from "../assets/products/palm-jaggery.jpg";
// import caneJaggeryImg from "../assets/products/cane-jaggery.jpg";
// import thinaiMilletImg from "../assets/products/thinai-millet.jpg"; // Example
// import samaiMilletImg from "../assets/products/samai-millet.jpg";
// import kodoMilletNoodlesImg from "../assets/products/kodo-millet-noodles.jpg"; // Example
// import ragiNoodlesImg from "../assets/products/ragi-noodles.jpg"; // Example
// import samaiNoodlesImg from "../assets/products/samai-noodles.jpg"; // Example
// import pureForestHoneyImg from "../assets/products/pure-forest-honey.jpg";

export const productCategories = [
  "Traditional Rice Varieties & Flours", // Combined Rice, Aval, Puttu Flour, Kanji Mix
  "Millets",
  "Natural Sweeteners & Honey",
  "Spice Powders & Masalas",
  "Cold-Pressed Oils & Ghee",
  "Dals & Pulses (Paruppu & Payaru)",
  "Herbal & Special Products", // For items like Hair Oil, Pazhangal Kandu Podi
];

export const products = [
  // --- Traditional Rice Varieties & Flours ---
  {
    id: "trv001",
    name: "கருப்பு கவுனி (Karuppu Kavuni Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Black Kavuni Rice", // Simplified
    price_info: "₹220 / Kg"
  },
  {
    id: "trv002",
    name: "கருங் குருவை (Karung Kuruvai Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Black Kuruvai Rice", // Simplified
    price_info: "₹200 / Kg"
  },
  {
    id: "trv003",
    name: "காட்டு யானம் (Kaatuyanam Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Wild Elephant Rice", // Simplified
    price_info: "₹190 / Kg"
  },
  {
    id: "trv004",
    name: "மாப்பிள்ளை சம்பா (Mapillai Samba Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Bridegroom Samba Rice", // Simplified
    price_info: "₹180 / Kg"
  },
  {
    id: "trv005",
    name: "கேரளா மட்டை (Kerala Matta Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Kerala Matta Rice",
    price_info: "₹160 / Kg"
  },
  {
    id: "trv006",
    name: "தூயமல்லி (Thooyamalli Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Pure Jasmine Rice",
    price_info: "₹170 / Kg"
  },
  {
    id: "trv007",
    name: "சீரகசம்பா அரிசி (Seeraga Samba Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Jeera Samba Rice",
    price_info: "₹250 / Kg"
  },
  {
    id: "trv008",
    name: "கைக்குத்தல் அரிசி (Kaikuthal Arisi)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Hand-pounded Rice",
    price_info: "₹150 / Kg"
  },
  {
    id: "trv009",
    name: "வெள்ளையன் அரிசி (Vellaiyan Arisi)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Replace
    description: "Traditional White Rice",
    price_info: "₹130 / Kg"
  },
  {
    id: "trv010",
    name: "சிவப்பு அரிசி (Sivappu Arisi)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Red Rice",
    price_info: "₹140 / Kg"
  },
  {
    id: "trv011",
    name: "சீரக சம்பா குருணை (Seeraga Samba Kurunai)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use broken rice image
    description: "Broken Jeera Samba Rice",
    price_info: "₹120 / Kg"
  },
  {
    id: "trv012",
    name: "மாப்பிள்ளை சம்பா குருணை (Mapillai Samba Kurunai)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use broken rice image
    description: "Broken Mapillai Samba Rice",
    price_info: "₹100 / Kg"
  },
  {
    id: "trv013",
    name: "கருப்பு கவுனி குருணை (Karuppu Kavuni Kurunai)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use broken rice image
    description: "Broken Black Kavuni Rice",
    price_info: "₹110 / Kg"
  },
  {
    id: "trv014",
    name: "இலுப்பை பூ சம்பா (Iluppai Poo Samba Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Mahua Flower Samba Rice",
    price_info: "₹280 / Kg"
  },
  {
    id: "trv015",
    name: "இரத்தசாலி (Rathasali Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Heritage Red Rice (Rathasali)",
    price_info: "₹260 / Kg"
  },
  {
    id: "trv016",
    name: "கருப்பு கவுனி கஞ்சி மிக்ஸ் (Karuppu Kavuni Kanji Mix)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use kanji mix image
    description: "Black Kavuni Porridge Mix",
    price_info: "₹150 / 250g"
  },
  {
    id: "trv017",
    name: "மாப்பிள்ளை சம்பா புட்டு மாவு (Mapillai Samba Puttu Flour)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use puttu flour image
    description: "Mapillai Samba Puttu Flour",
    price_info: "₹130 / 500g"
  },
  {
    id: "trv018",
    name: "சிவன் சம்பா (Sivan Samba Rice)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg,
    description: "Sacred Samba Rice (Sivan Samba)",
    price_info: "₹240 / Kg"
  },
  {
    id: "trv019",
    name: "மாப்பிள்ளை சம்பா அவல் (Mapillai Samba Aval)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use aval image
    description: "Flattened Mapillai Samba Rice",
    price_info: "₹90 / 250g"
  },
  {
    id: "trv020",
    name: "கருப்பு கவுனி அவல் (Karuppu Kavuni Aval)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use aval image
    description: "Flattened Black Kavuni Rice",
    price_info: "₹100 / 250g"
  },
  {
    id: "trv021",
    name: "தூயமல்லி அவல் (Thooyamalli Aval)",
    category: "Traditional Rice Varieties & Flours",
    image: placeholderImg, // Use aval image
    description: "Flattened Thooyamalli Rice",
    price_info: "₹80 / 250g"
  },
  // --- Millets ---
  {
    id: "mil001",
    name: "குதிரை வாலி (Kuthiraivali Millet)",
    category: "Millets",
    image: placeholderImg,
    description: "Barnyard Millet",
    price_info: "₹120 / Kg"
  },
  {
    id: "mil002",
    name: "சாமை (Saamai Millet)",
    category: "Millets",
    image: placeholderImg,
    description: "Little Millet",
    price_info: "₹130 / Kg"
  },
  {
    id: "mil003",
    name: "வரகு (Varagu Millet)",
    category: "Millets",
    image: placeholderImg,
    description: "Kodo Millet",
    price_info: "₹110 / Kg"
  },
  {
    id: "mil004",
    name: "திணை (Thinai Millet)",
    category: "Millets",
    image: placeholderImg,
    description: "Foxtail Millet",
    price_info: "₹125 / Kg"
  },
  // --- Natural Sweeteners & Honey ---
  {
    id: "swt001",
    name: "நாட்டு சக்கரை (Naatu Sakkarai)",
    category: "Natural Sweeteners & Honey",
    image: placeholderImg,
    description: "Country Sugar / Unrefined Cane Sugar",
    price_info: "₹100 / Kg"
  },
  {
    id: "swt002",
    name: "பனை வெல்லம் (Panai Vellam)",
    category: "Natural Sweeteners & Honey",
    image: placeholderImg,
    description: "Palm Jaggery",
    price_info: "₹300 / Kg"
  },
  {
    id: "swt003",
    name: "பனங் கல்கண்டு (Panang Kalkandu)",
    category: "Natural Sweeteners & Honey",
    image: placeholderImg,
    description: "Palm Sugar Crystals",
    price_info: "₹350 / 500g"
  },
  {
    id: "swt004",
    name: "தேன் (Then)",
    category: "Natural Sweeteners & Honey",
    image: placeholderImg,
    description: "Pure Natural Honey",
    price_info: "₹400 / 500g"
  },

  // --- Spice Powders & Masalas ---
  {
    id: "spm001",
    name: "மஞ்சள் தூள் (Manjal Thool)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Turmeric Powder",
    price_info: "₹80 / 100g"
  },
  {
    id: "spm002",
    name: "மிளகாய் தூள் (Milagai Thool)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Chili Powder",
    price_info: "₹90 / 100g"
  },
  {
    id: "spm003",
    name: "மல்லி தூள் (Malli Thool)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Coriander Powder",
    price_info: "₹70 / 100g"
  },
  {
    id: "spm004",
    name: "சாம்பார் தூள் (Sambar Thool)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Sambar Powder Mix",
    price_info: "₹120 / 200g"
  },
  {
    id: "spm005",
    name: "ரசம் தூள் (Rasam Thool)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Rasam Powder Mix",
    price_info: "₹110 / 150g"
  },
  {
    id: "spm006",
    name: "குழம்பு மசாலா (Kuzhambu Masala)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Curry Masala Powder",
    price_info: "₹130 / 200g"
  },
  {
    id: "spm007",
    name: "சிக்கன் மசாலா (Chicken Masala)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Chicken Masala Powder",
    price_info: "₹100 / 100g"
  },
  {
    id: "spm008",
    name: "மட்டன் மசாலா (Mutton Masala)",
    category: "Spice Powders & Masalas",
    image: placeholderImg,
    description: "Mutton Masala Powder",
    price_info: "₹110 / 100g"
  },

  // --- Cold-Pressed Oils & Ghee ---
  {
    id: "cpg001",
    name: "நெய் - நாட்டு மாடு (Ghee – Native Cow Ghee)",
    category: "Cold-Pressed Oils & Ghee",
    image: placeholderImg,
    description: "Native Cow Ghee",
    price_info: "₹800 / 500ml"
  },
  {
    id: "cpg002",
    name: "கடலை எண்ணெய் (Kadalai Ennai)",
    category: "Cold-Pressed Oils & Ghee",
    image: placeholderImg,
    description: "Groundnut Oil / Peanut Oil",
    price_info: "₹340 / Litre"
  },
  {
    id: "cpg003",
    name: "தேங்காய் எண்ணெய் (Thengai Ennai)",
    category: "Cold-Pressed Oils & Ghee",
    image: placeholderImg,
    description: "Coconut Oil",
    price_info: "₹360 / Litre"
  },
  {
    id: "cpg004",
    name: "விளக்கெண்ணெய் (Vilakku Ennai)",
    category: "Cold-Pressed Oils & Ghee",
    image: placeholderImg, // Often Castor Oil, but can be Gingelly for lamps. Clarify usage.
    description: "Castor Oil",
    price_info: "₹280 / 500ml"
  },
  {
    id: "cpg005",
    name: "நல்லெண்ணெய் (Nallenai)",
    category: "Cold-Pressed Oils & Ghee",
    image: placeholderImg,
    description: "Gingelly Oil / Sesame Oil",
    price_info: "₹390 / Litre"
  },

  // --- Dals & Pulses (Paruppu & Payaru) ---
  {
    id: "dpp001",
    name: "பாசிப்பருப்பு (Pasiparuppu)",
    category: "Dals & Pulses (Paruppu & Payaru)",
    image: placeholderImg,
    description: "Moong Dal / Split Green Gram",
    price_info: "₹160 / Kg"
  },
  {
    id: "dpp002",
    name: "துவரம் பருப்பு (Thuvaram Paruppu)",
    category: "Dals & Pulses (Paruppu & Payaru)",
    image: placeholderImg,
    description: "Toor Dal / Pigeon Peas",
    price_info: "₹190 / Kg"
  },
  {
    id: "dpp003",
    name: "கொள்ளு (Kollu)",
    category: "Dals & Pulses (Paruppu & Payaru)",
    image: placeholderImg,
    description: "Horse Gram",
    price_info: "₹150 / Kg"
  },
  {
    id: "dpp004",
    name: "உளுந்து (Ulundhu)",
    category: "Dals & Pulses (Paruppu & Payaru)",
    image: placeholderImg,
    description: "Black Gram / Urad Dal",
    price_info: "₹170 / Kg"
  },
  {
    id: "dpp005",
    name: "சுண்டல் கடலை (Sundal Kadalai)",
    category: "Dals & Pulses (Paruppu & Payaru)",
    image: placeholderImg,
    description: "Brown Chana / Whole Bengal Gram",
    price_info: "₹140 / Kg"
  },
  {
    id: "dpp006",
    name: "வெள்ளை சுண்டல் கடலை (Vellai Sundal Kadalai)",
    category: "Dals & Pulses (Paruppu & Payaru)",
    image: placeholderImg,
    description: "White Chana / White Chickpeas",
    price_info: "₹150 / Kg"
  },

  // --- Herbal & Special Products ---
  {
    id: "hsp001",
    name: "ஹேர் ஆயில் (Hair Oil)",
    category: "Herbal & Special Products",
    image: placeholderImg,
    description: "Herbal Hair Oil",
    price_info: "₹250 / 200ml"
  },
  {
    id: "hsp002",
    name: "பழங்கள் கண்டு பொடி (Pazhangal Kandu Podi)",
    category: "Herbal & Special Products",
    image: placeholderImg,
    description: "Herbal Fruit & Roots Powder Mix",
    price_info: "₹180 / 100g"
  },
  
];

// Helper function to add quantities to products based on category
const getQuantitiesForProduct = (product) => {
  const basePrice = parseInt(product.price_info.match(/₹(\d+)/)[1]);
  const category = product.category;
  
  // Define quantities based on category
  let quantities = [];
  
  if (category.includes("Rice") || category.includes("Millet") || category.includes("Pulses") || category.includes("Dals")) {
    quantities = [
      { id: `${product.id}-500g`, size: "500g", price: `₹${Math.round(basePrice * 0.5)}`, available: true },
      { id: `${product.id}-1kg`, size: "1 Kg", price: `₹${basePrice}`, available: true },
      { id: `${product.id}-2kg`, size: "2 Kg", price: `₹${Math.round(basePrice * 1.9)}`, available: false },
    ];
  } else if (category.includes("Oil") || category.includes("Ghee")) {
    quantities = [
      { id: `${product.id}-250ml`, size: "250ml", price: `₹${Math.round(basePrice * 0.5)}`, available: true },
      { id: `${product.id}-500ml`, size: "500ml", price: `₹${basePrice}`, available: true },
      { id: `${product.id}-1l`, size: "1 Litre", price: `₹${Math.round(basePrice * 1.95)}`, available: false },
    ];
  } else if (category.includes("Spice") || category.includes("Masala")) {
    quantities = [
      { id: `${product.id}-50g`, size: "50g", price: `₹${Math.round(basePrice * 0.5)}`, available: true },
      { id: `${product.id}-100g`, size: "100g", price: `₹${basePrice}`, available: true },
      { id: `${product.id}-250g`, size: "250g", price: `₹${Math.round(basePrice * 2.3)}`, available: false },
    ];
  } else if (category.includes("Sweetener") || category.includes("Honey")) {
    quantities = [
      { id: `${product.id}-250g`, size: "250g", price: `₹${Math.round(basePrice * 0.6)}`, available: true },
      { id: `${product.id}-500g`, size: "500g", price: `₹${basePrice}`, available: true },
      { id: `${product.id}-1kg`, size: "1 Kg", price: `₹${Math.round(basePrice * 1.9)}`, available: false },
    ];
  } else {
    // Default for other categories
    quantities = [
      { id: `${product.id}-std`, size: "Standard", price: product.price_info.split("/")[0].trim(), available: true },
    ];
  }
  
  return quantities;
};

// Enrich products with quantities and availability status
export const enrichedProducts = products.map((product, index) => ({
  ...product,
  isAvailable: index % 3 !== 0, // Sample: every 3rd product is out of stock
  quantities: getQuantitiesForProduct(product),
}));

// Export the enriched products as the main products list
export const productsWithQuantities = enrichedProducts;
