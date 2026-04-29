import Rectangle1 from '../assets/Rectangle 8.png';
import Rectangle2 from '../assets/Rectangle 33.png';
import Rectangle3 from '../assets/Rectangle 34.png';
import Rectangle4 from '../assets/Rectangle 35.png';
import Project1 from '../assets/projects/3_3-Photo-min-758x564.jpg';
import Project2 from '../assets/projects/project2.jpg';
import Project3 from '../assets/projects/project3.jpg';
import Project4 from '../assets/projects/project4.jpg';
import Project5 from '../assets/projects/project5.jpg';
import Project6 from '../assets/projects/project6.jpg';


export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Our Ecosystem", path: "/ecosystem" },
];

export const STATS = [
  { value: "2M+", label: "Sq.Ft. Developed" },
  { value: "2,800+", label: "Homes Delivered" },
  { value: "9+", label: "Ready to Move Project" },
  { value: "18+", label: "Years of Experience" },
  { value: "9+", label: "Upcoming Projects" },
];

export const BUILDING_IMAGES = [Rectangle1, Rectangle2, Rectangle3, Rectangle4];


export const TESTIMONIALS = [
  {
    name: "Ms. Priyanka Mazumdar",
    stars: 5,
    text: '"Sk Royal are designed to offer all amenities within the project. They understand the importance of a comfortable living space."',
  },
  {
    name: "Mr. Shyam Kurmi",
    stars: 5,
    text: '"Being a resident at Kumar Enclave, I can vouch for its amenities, superior connectivity, greenery and open space."',
  },
  {
    name: "Mrs. Ritu Yadav",
    stars: 5,
    text: '"Sk Royal s not just about the best projects with a host of amenities but also provide the best services."',
  },
  {
    name: "Mr. Amit Verma",
    stars: 5,
    text: '"Sk Royal Connect is an exclusive loyalty initiative for the residents of Srijan Realty, designed to unleash the power of happier communities."',
  },
  {
    name: "Mr. Sourav Verma",
    stars: 5,
    text: '"From planning to finishing, everything was well-managed. You can clearly see their commitment to long-term quality."',
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Royal Estate",
    status: "Ongoing",
    desc: "Dingsai Para Road P.O & P.S:- Bally, Dist Howrah",
    image: Project1,
  },
  {
    id: 2,
    name: "Royal Mansion",
    status: "Ongoing",
    desc: "9 Lawrence street Kolkata West Bengal 700069",
    image: Project2,
  },
  {
    id: 3,
    name: "Pashupati Residency",
    status: "Ongoing",
    desc: "Kalipark, Rajarhat, East Kolkata, Kolkata, West Bengal",
    image: Project3,
  },
  {
    id: 4,
    name: "Royal Origin",
    status: "Ongoing",
    desc: "5, BK Street, Uttarpara Near UCC Club Khiyaghat",
    image: Project4,
  },
  {
    id: 5,
    name: "Royal Saroj Apartment",
    status: "Ongoing",
    desc: "25 Sorojnath Mukherjee St, Near Sunayan Eye Clinic",
    image: Project5,
  },
  {
    id: 6,
    name: "Royal Vista",
    status: "Ongoing",
    desc: "265, Mission Palli Rd, R.K Pally, Mission Pally, Rajpur Sonarpur, West Bengal 700150",
    image: Project6,
  },
];

export const LOCATIONS = [
  {
    id: 1,
    name: "Victoria Memorial",
    description:
      "Porro ipsam amet ut laudantium rem quibusdam. Praesentium culpa dolores alias et magnam provident harum. Quidem rem quibusdam provident harum. The simply dummy text of the printing lorem ipsum.",
    city: "Kolkata",
  },
];

export const FOOTER_COLS = [
  {
    title: "Brand & About",
    links: [
      {
        label: "Building trusted residential, commercial, and lifestyle spaces across multiple districts.\n\nWith a strong presence in real estate development, hospitality, and banquets, SK Royal Group focuses on quality construction, transparency, and long-term value.\n\nThe data presented on the website represents approximate figures.",
        href: "/about",
      },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Residential Properties",  href: "/ecosystem/residential" },
      { label: "Commercial Properties",   href: "/ecosystem/commercial" },
      { label: "Garages / Parking Spaces", href: "/ecosystem/garages" },
      { label: "Banquets",                href: "#" },
      { label: "Hospitality",             href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us",                href: "/about" },
      { label: "Contact Us",              href: "/contact" },
      { label: "Ongoing Projects",        href: "/ecosystem" },
      { label: "Completed Projects",      href: "/ecosystem" },
      { label: "Ready-to-Move Properties", href: "/ecosystem" },
    ],
  },
  {
    title: "Contact & Enquiry",
    links: [
      { label: "SK Royal Group \n 16/1AM Abdul Hamid (British India) Street, (1st Floor) , Kolkata – 700069", href: "#" },
      { label: "Phone:\n+91 9830279622",               href: "tel:+919830279622" },
      { label: "Email:\ninfo@skroyalgroup.com",          href: "mailto:info@skroyalgroup.com" },
      { label: "Business Hours:\nMon — Sat | 10:00 AM — 6:00 PM", href: "#" },
    ],
  },
];
