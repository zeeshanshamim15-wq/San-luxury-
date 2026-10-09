/**
 * Single source of truth for brand + contact details.
 * Pulled from San Luxury's brand assets and existing site.
 * TODO(client): confirm address, GST, social handles before launch.
 */
export const SITE = {
  name: "San Luxury",
  tagline: "Timeless Shine. Modern Elegance.",
  positioning: "Jewellery for your brighter story",
  description:
    "San Luxury crafts handcrafted fashion jewellery that blends India's traditional artistry with modern design — necklaces, earrings, bracelets, bangles and bridal sets made to feel meaningful, beautiful and everyday-wearable.",
  url: "https://sanluxury.in",
  email: "sanluxury@info.com", // TODO(client): confirm working email
  phone: "+91 79771 15589",
  phoneRaw: "917977115589",
  whatsapp: "917977115589",
  address: "Mumbai, India", // TODO(client): registered business address
  freeShippingThreshold: 999,
  currency: "INR",
  currencySymbol: "₹",
  social: {
    instagram: "https://instagram.com/sanluxury", // TODO(client): confirm handle
    facebook: "https://facebook.com/sanluxury", // TODO(client): confirm handle
  },
  usps: [
    { title: "Free Shipping", detail: "On all orders above ₹999", icon: "truck" },
    { title: "Secure Payments", detail: "100% safe & encrypted", icon: "shield" },
    { title: "Premium Packaging", detail: "Perfectly gift-ready", icon: "gift" },
    { title: "Easy 7-Day Returns", detail: "Shop with confidence", icon: "refresh" },
  ],
} as const;

export const ANNOUNCEMENTS = [
  "✦  FREE SHIPPING ON ALL ORDERS ABOVE ₹999",
  "✦  FLAT 10% OFF YOUR FIRST ORDER — CODE: SHINE10",
  "✦  EASY 7-DAY RETURNS",
  "✦  CASH ON DELIVERY AVAILABLE",
];
