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
  "Cold-pressed Oil Products",
  "Traditional Rice Varieties",
  "Spice Products",
  "Pulse Varieties",
  "Herbal Health Products",
  "Natural Soaps",
  "Traditional Products (Jaggery)", // Renamed for clarity
  "Fresh Health Greens", // Renamed for clarity (was Health Products)
  "Ghee Products",
  "Traditional Grains & Millets", // Renamed for clarity
  "Natural Health Tonics", // Renamed for clarity (was Natural Health Products)
  "Millet & Rice Noodles", // Renamed for clarity
  "Honey & Natural Sweeteners", // Renamed for clarity
  "Traditional Medicinal Herbs", // Renamed for clarity
];

export const products = [
  // Cold-pressed Oil Products
  {
    id: "cpo001",
    name: "Cold-Pressed Sesame Oil (Nallennai)",
    category: "Cold-pressed Oil Products",
    image: sesameOilImg,
    description: "Pure, wood-pressed sesame oil, rich in nutrients and traditional flavor.",
    price_info: "₹350 / Litre",
  },
  {
    id: "cpo002",
    name: "Cold-Pressed Coconut Oil (Thengai Ennai)",
    category: "Cold-pressed Oil Products",
    image: coconutOilImg,
    description: "Fragrant and healthy cold-pressed coconut oil, perfect for cooking and hair care.",
    price_info: "₹320 / Litre",
  },
  {
    id: "cpo003",
    name: "Cold-Pressed Groundnut Oil (Kadalai Ennai)",
    category: "Cold-pressed Oil Products",
    image: placeholderImg, // Replace with actual import
    description: "Nutritious cold-pressed groundnut oil with a mild, pleasant aroma.",
    price_info: "₹350 / Litre",
  },
  { 
    id: "cpo004", 
    name: "Cold-Pressed Sunflower Oil (Suryakanthi Ennai)", 
    category: "Cold-pressed Oil Products", 
    image: placeholderImg, 
    description: "Light and healthy, a good source of Vitamin E. Suitable for various cuisines.", 
    price_info: "₹280 / Litre" 
  },
  // Traditional Rice Varieties
  {
    id: "tr001",
    name: "Karuppu Kavuni (Black Rice)",
    category: "Traditional Rice Varieties",
    image: blackRiceImg,
    description: "Nutrient-rich traditional black rice, known for its antioxidant properties.",
    price_info: "₹180 / Kg",
  },
  {
    id: "tr002",
    name: "Poongar Rice (Red Rice)",
    category: "Traditional Rice Varieties",
    image: redRiceImg,
    description: "A traditional red rice variety, excellent for overall health and well-being.",
    price_info: "₹150 / Kg",
  },
  { id: "tr003", name: "Mappillai Samba (Bridegroom's Rice)", category: "Traditional Rice Varieties", image: placeholderImg, description: "Boosts stamina and energy, traditionally given to bridegrooms.", price_info: "₹170 / Kg" },
  { id: "tr004", name: "Seeraga Samba Rice", category: "Traditional Rice Varieties", image: placeholderImg, description: "Aromatic short-grain rice, perfect for biryani and pulao. Easy to digest.", price_info: "₹220 / Kg" },
  { id: "tr005", name: "Kattuyanam Rice (Elephant Rice)", category: "Traditional Rice Varieties", image: placeholderImg, description: "Tall growing rice, known for its resilience and health benefits, including fiber content.", price_info: "₹180 / Kg" },
  // Spice Products
  {
    id: "sp001",
    name: "Organic Turmeric Powder (Manjal Podi)",
    category: "Spice Products",
    image: turmericPowderImg,
    description: "High-curcumin organic turmeric powder, naturally processed.",
    price_info: "₹80 / 100g",
  },
  { id: "sp002", name: "Organic Coriander Powder (Malli Podi)", category: "Spice Products", image: placeholderImg, description: "Aromatic and flavorful, made from high-quality coriander seeds.", price_info: "₹70 / 100g" },
  { id: "sp003", name: "Organic Cumin Powder (Seeragam Podi)", category: "Spice Products", image: placeholderImg, description: "Earthy and warm spice, aids digestion. Essential for Indian cooking.", price_info: "₹80 / 100g" },
  { id: "sp004", name: "Organic Chili Powder (Milagai Podi)", category: "Spice Products", image: placeholderImg, description: "Pure and vibrant red chili powder for that perfect spice kick.", price_info: "₹100 / 100g" },
  
  // Pulse Varieties
  { id: "pv001", name: "Bengal Gram (Kadalai Paruppu)", category: "Pulse Varieties", image: placeholderImg, description: "Rich in protein and fiber. Used in various Indian dishes and snacks.", price_info: "₹140 / Kg" },
  { id: "pv002", name: "Black Gram (Ulundhu Paruppu)", category: "Pulse Varieties", image: placeholderImg, description: "Whole black gram, essential for idli, dosa, and vada. High in protein.", price_info: "₹160 / Kg" },
  { id: "pv003", name: "Green Gram (Pasi Paruppu)", category: "Pulse Varieties", image: placeholderImg, description: "Split green gram, easy to digest, and a good source of protein.", price_info: "₹150 / Kg" },
  { id: "pv004", name: "Toor Dal (Thuvaram Paruppu)", category: "Pulse Varieties", image: placeholderImg, description: "Commonly used lentil for sambar and dal dishes. Nutritious and tasty.", price_info: "₹180 / Kg" },

  // Herbal Health Products
  { id: "hhp001", name: "Neem Leaf Powder (Veppilai Podi)", category: "Herbal Health Products", image: placeholderImg, description: "Powerful medicinal herb with antibacterial and antiviral properties.", price_info: "₹90 / 100g" },
  { id: "hhp002", name: "Pure Aloe Vera Gel", category: "Herbal Health Products", image: placeholderImg, description: "Soothing and healing for skin. Can also be consumed for internal benefits.", price_info: "₹200 / 200g" },
  { id: "hhp003", name: "Moringa Leaf Powder (Murungai Ilai Podi)", category: "Herbal Health Products", image: placeholderImg, description: "Superfood packed with vitamins, minerals, and antioxidants.", price_info: "₹150 / 100g" },
  { id: "hhp004", name: "Hibiscus Flower Powder (Sembaruthi Poo Podi)", category: "Herbal Health Products", image: placeholderImg, description: "Promotes hair growth, controls blood pressure, and rich in Vitamin C.", price_info: "₹100 / 100g" },
  
  // Natural Soaps
  { id: "ns001", name: "Shikakai Herbal Soap", category: "Natural Soaps", image: placeholderImg, description: "Traditional hair and body cleanser, promotes healthy scalp and skin.", price_info: "₹60 / piece" },
  { id: "ns002", name: "Aritha (Soapnut) Soap", category: "Natural Soaps", image: placeholderImg, description: "Natural cleansing soap made from soapnuts, gentle on skin.", price_info: "₹65 / piece" },
  { id: "ns003", name: "Herbal Bath Soap (Assorted)", category: "Natural Soaps", image: placeholderImg, description: "Handmade soap with a blend of natural herbs for a refreshing bath.", price_info: "₹70 / piece" },
  
  // Traditional Products (Jaggery)
  {
    id: "tpj001",
    name: "Palm Jaggery (Panam Kalkandu)",
    category: "Traditional Products (Jaggery)",
    image: palmJaggeryImg,
    description: "Pure and unrefined palm jaggery, a healthy alternative to sugar.",
    price_info: "₹200 / 500g",
  },
  { id: "tpj002", name: "Sugarcane Jaggery (Karumbu Vellam)", category: "Traditional Products (Jaggery)", image: placeholderImg, description: "Traditional sugarcane jaggery, a healthy alternative to white sugar.", price_info: "₹120 / Kg" },
  { id: "tpj003", name: "Country Jaggery Powder (Nattu Sakkarai)", category: "Traditional Products (Jaggery)", image: placeholderImg, description: "Powdered form of country jaggery, easy to use in beverages and sweets.", price_info: "₹140 / Kg" },

  // Traditional Grains & Millets
  { id: "tgm001", name: "Kodo Millet (Varagu Arisi)", category: "Traditional Grains & Millets", image: placeholderImg, description: "Easily digestible millet, good for controlling blood sugar. Gluten-free.", price_info: "₹100 / Kg" },
  { id: "tgm002", name: "Foxtail Millet (Thinai Arisi)", category: "Traditional Grains & Millets", image: placeholderImg, description: "Rich in protein and fiber, helps in maintaining body temperature.", price_info: "₹110 / Kg" },
  { id: "tgm003", name: "Finger Millet (Ragi / Kezhvaragu)", category: "Traditional Grains & Millets", image: placeholderImg, description: "Excellent source of calcium and iron. Widely used for porridge and rotis.", price_info: "₹90 / Kg" },
  { id: "tgm004", name: "Little Millet (Samai Arisi)", category: "Traditional Grains & Millets", image: placeholderImg, description: "Smallest of millets, packed with nutrients and good for weight management.", price_info: "₹120 / Kg" },
  { id: "tgm005", name: "Barnyard Millet (Kuthiraivali Arisi)", category: "Traditional Grains & Millets", image: placeholderImg, description: "High in fiber and iron, good alternative to rice, especially for diabetics.", price_info: "₹115 / Kg" },

  // Millet & Rice Noodles
  { id: "mrn001", name: "Traditional Rice Noodles (Arisi Sevai)", category: "Millet & Rice Noodles", image: placeholderImg, description: "Plain rice noodles, perfect for a light meal with various accompaniments.", price_info: "₹80 / 200g pack" },
  { id: "mrn002", name: "Kodo Millet Noodles (Varagu Sevai)", category: "Millet & Rice Noodles", image: placeholderImg, description: "Healthy and tasty noodles made from Kodo millet. Quick to cook.", price_info: "₹90 / 180g pack" },
  { id: "mrn003", name: "Finger Millet Noodles (Ragi Sevai)", category: "Millet & Rice Noodles", image: placeholderImg, description: "Nutritious noodles made from Ragi, rich in calcium.", price_info: "₹95 / 180g pack" },
  { id: "mrn004", name: "Little Millet Noodles (Samai Sevai)", category: "Millet & Rice Noodles", image: placeholderImg, description: "Light and healthy noodles from Little Millet.", price_info: "₹100 / 180g pack" },

  // Honey & Natural Sweeteners
  { id: "hns001", name: "Pure Forest Honey (Malai Thaen)", category: "Honey & Natural Sweeteners", image: placeholderImg, description: "Raw, unprocessed honey collected from wild forest hives. Rich in enzymes.", price_info: "₹450 / 500g" },

  
];
