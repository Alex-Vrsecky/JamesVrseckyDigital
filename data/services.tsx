import {
  Devices,
  LocalGroceryStore,
  AddToHomeScreen,
  Contacts,
  Storage,
  MarkChatUnread,
  TouchApp,
  List,
  ContactMail,
} from "@mui/icons-material";

export interface Service {
  name: string;
  icon: React.ReactNode;
  colour: string;
  description: string;
  features: string[];
  pricing: string;
}

export const services: Service[] = [
  {
    name: "Web Development",
    icon: <Devices />,
    colour: "#ABE188",
    description:
      "Professional websites built with modern technologies to establish your online presence and grow your business.",
    features: [
      "Responsive design for all devices",
      "SEO optimization for better visibility",
      "Fast loading times and performance",
      "Modern UI/UX design",
      "Content management system integration",
      "Secure hosting setup",
    ],
    pricing: "Starting at $1,500",
  },
  {
    name: "E-Commerce Development",
    icon: <LocalGroceryStore />,
    colour: "#F1BB87",
    description:
      "Complete online store solutions with secure payment processing, inventory management, and customer-friendly shopping experiences.",
    features: [
      "Secure payment gateway integration",
      "Product inventory management",
      "Shopping cart and wishlist functionality",
      "Order tracking and management",
      "Customer account portals",
      "Discount and coupon systems",
    ],
    pricing: "Starting at $3,500",
  },
  {
    name: "Business Applications",
    icon: <AddToHomeScreen />,
    colour: "#F78E69",
    description:
      "Custom software solutions tailored to your business processes, helping you automate workflows and improve efficiency.",
    features: [
      "Custom workflow automation",
      "Data management and reporting",
      "User role and permission systems",
      "Integration with existing tools",
      "Cloud-based or on-premise deployment",
      "Training and documentation",
    ],
    pricing: "Starting at $4,000",
  },
  {
    name: "Dashboards & Client Portals",
    icon: <Contacts />,
    colour: "#ABE188",
    description:
      "Intuitive dashboards and client portals that provide real-time insights and empower your clients with self-service capabilities.",
    features: [
      "Real-time data visualization",
      "Custom reporting and analytics",
      "Secure client login areas",
      "Document sharing and management",
      "Communication tools",
      "Mobile-responsive design",
    ],
    pricing: "Starting at $3,000",
  },
  {
    name: "API Integration & Third-Party Services",
    icon: <Storage />,
    colour: "#F1BB87",
    description:
      "Seamlessly connect your systems with third-party services and APIs to extend functionality and streamline operations.",
    features: [
      "Payment processor integration",
      "CRM and marketing tool connections",
      "Accounting software sync",
      "Social media API integration",
      "Custom API development",
      "Data synchronization and automation",
    ],
    pricing: "Starting at $1,500",
  },
  {
    name: "Booking & Scheduling Systems",
    icon: <MarkChatUnread />,
    colour: "#F78E69",
    description:
      "Automated booking and scheduling solutions that save time, reduce no-shows, and improve customer experience.",
    features: [
      "Online appointment booking",
      "Calendar synchronization",
      "Automated reminders and notifications",
      "Payment collection at booking",
      "Resource and staff management",
      "Customer self-service rescheduling",
    ],
    pricing: "Starting at $2,800",
  },
  {
    name: "Why us?",
    icon: <TouchApp />,
    colour: "#F7EF99",
    description:
      "We're a small business ourselves, so we understand your challenges and budget constraints. Our solutions are practical, affordable, and built to grow with you.",
    features: [
      "Affordable pricing for small businesses",
      "Personalized service and direct communication",
      "No long-term contracts required",
      "Quick turnaround times",
      "Ongoing support and maintenance",
      "Local expertise and understanding",
    ],
    pricing: "Free consultation",
  },
  {
    name: "Contact",
    icon: <ContactMail />,
    colour: "#F7EF99",
    description:
      "We're a small business ourselves, so we understand your challenges and budget constraints. Our solutions are practical, affordable, and built to grow with you.",
    features: [
      "Affordable pricing for small businesses",
      "Personalized service and direct communication",
      "No long-term contracts required",
      "Quick turnaround times",
      "Ongoing support and maintenance",
      "Local expertise and understanding",
    ],
    pricing: "Free consultation",
  },
];