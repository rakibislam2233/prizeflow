import CompetitionPage from "@/components/Pages/Competition/CompetitionPage";
import { Suspense } from "react";

export async function generateMetadata() {
  return {
    title: "Competitions | PrizeFlow",
    description: "Browse all available competitions and contests on PrizeFlow.",
  };
}

const CompetitionPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading competitions...</div>}>
      <CompetitionPage />
    </Suspense>
  );
};

export default CompetitionPageWrapper;
