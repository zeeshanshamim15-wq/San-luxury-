import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your trust matters to us. This policy explains what information we collect and how we use it."
      sections={[
        { heading: "Information we collect", body: ["We collect the details you provide at checkout — name, contact number, email and shipping address — plus basic browsing data used to improve your experience."] },
        { heading: "How we use it", body: ["Your information is used only to process and deliver orders, provide support, and (with your consent) share offers and new collections. We never sell your data."] },
        { heading: "Payments", body: ["Payments are processed securely by our payment partner. San Luxury does not store your card, UPI or netbanking credentials on its servers."] },
        { heading: "Cookies", body: ["We use cookies to keep your cart, remember preferences and understand how the site is used. You can disable cookies in your browser settings."] },
        { heading: "Your rights", body: ["You may request access to, correction of, or deletion of your personal data at any time by contacting us."] },
      ]}
    />
  );
}
