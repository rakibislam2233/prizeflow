import CompetitionPage from "@/components/Pages/Competition/CompetitionPage";

export async function generateMetadata() {
  return {
    title: "Competitions | PrizeFlow",
    description: "Browse all available competitions and contests on PrizeFlow.",
  };
}

const CompetitionPageWrapper = () => {
  return <CompetitionPage />;
};

export default CompetitionPageWrapper;
