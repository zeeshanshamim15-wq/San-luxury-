import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Returns & Exchange" };

export default function ExchangePolicyPage() {
  return (
    <LegalPage
      title="Returns & Exchange Policy"
      intro="We want you to love your San Luxury piece. If something isn't right, we're here to help."
      sections={[
        { heading: "7-day easy returns", body: ["You may request a return or exchange within 7 days of delivery, provided the item is unused, unworn and in its original packaging with tags intact."] },
        { heading: "How to request", body: ["Message us on WhatsApp or email with your order number and reason. Our team will guide you through a quick, hassle-free process."] },
        { heading: "Refunds", body: ["Approved refunds are processed to the original payment method within 5–7 business days after we receive and inspect the returned item. COD orders are refunded via bank transfer or UPI."] },
        { heading: "Damaged or wrong item", body: ["Received a damaged or incorrect product? Share an unboxing photo/video within 48 hours of delivery and we'll arrange a free replacement right away."] },
        { heading: "Non-returnable items", body: ["For hygiene reasons, earrings and customised/personalised pieces are eligible for exchange only in case of a defect, not a change of mind."] },
      ]}
    />
  );
}
