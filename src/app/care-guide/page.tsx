import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Jewellery Care Guide",
  description: "Simple tips to keep your San Luxury jewellery looking beautiful for longer.",
};

export default function CareGuidePage() {
  return (
    <LegalPage
      title="Jewellery Care Guide"
      intro="A little care goes a long way. Follow these simple tips to keep your San Luxury pieces looking as radiant as day one."
      sections={[
        { heading: "The golden rule", body: ["Your jewellery should be the last thing you put on and the first thing you take off. Wear it after applying makeup, perfume and hairspray."] },
        { heading: "Keep it dry", body: ["Avoid water — remove jewellery before bathing, swimming, washing hands or exercising. Moisture and sweat are the main causes of plating wear."] },
        { heading: "Avoid chemicals", body: ["Perfume, deodorant, lotion, sanitiser and cleaning products can dull the finish. Let these fully dry on your skin before wearing jewellery."] },
        { heading: "Store it right", body: ["Store each piece separately in the pouch or box provided to prevent scratches and tangling. Keep away from direct sunlight and humidity."] },
        { heading: "Clean gently", body: ["Wipe with a soft, dry cloth after each wear to remove oils and sweat. Never use water, alcohol or jewellery cleaners on plated fashion jewellery."] },
        { heading: "Handle with care", body: ["Hold pieces by their base rather than delicate chains or stones. Fasten clasps gently to avoid bending."] },
      ]}
    />
  );
}
