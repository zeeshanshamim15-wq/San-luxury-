import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      intro="We ship across India with love and care. Here's everything you need to know about how your San Luxury order reaches you."
      sections={[
        { heading: "Free shipping", body: ["Enjoy free standard shipping on all prepaid orders above ₹999. Orders below this value carry a nominal ₹79 shipping charge."] },
        { heading: "Dispatch & delivery time", body: ["Orders are processed within 1–2 business days. Standard delivery takes 4–7 business days depending on your location. Remote pin codes may take a little longer."] },
        { heading: "Order tracking", body: ["Once your order ships, you'll receive a tracking link on email and WhatsApp. You can also track it from your account under 'My Orders'."] },
        { heading: "Cash on Delivery", body: ["COD is available on eligible pin codes for a small ₹49 handling fee. We recommend prepaid orders for the fastest processing."] },
        { heading: "Packaging", body: ["Every piece arrives in premium, gift-ready San Luxury packaging with a protective pouch."] },
      ]}
    />
  );
}
