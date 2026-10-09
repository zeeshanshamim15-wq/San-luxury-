import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="By using this website and placing an order, you agree to the following terms."
      sections={[
        { heading: "Products", body: ["San Luxury sells fine fashion / imitation jewellery. Colours may vary slightly from images due to screen settings and photography. Each piece is handcrafted, so minor variations are natural and not defects."] },
        { heading: "Pricing", body: ["All prices are in INR and inclusive of applicable taxes. We reserve the right to update prices and offers at any time."] },
        { heading: "Orders", body: ["We reserve the right to accept or cancel any order. In case of cancellation of a prepaid order by us, a full refund will be issued."] },
        { heading: "Care & warranty", body: ["To keep your jewellery looking its best, keep it away from water, perfume and moisture, and store it in the pouch provided. Plating naturally wears over time with use."] },
        { heading: "Contact", body: ["For any questions about these terms, please reach out to our support team."] },
      ]}
    />
  );
}
