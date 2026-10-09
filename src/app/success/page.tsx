import { Suspense } from "react";
import { SuccessView } from "@/components/SuccessView";

export const metadata = { title: "Order Confirmed" };

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessView />
    </Suspense>
  );
}
