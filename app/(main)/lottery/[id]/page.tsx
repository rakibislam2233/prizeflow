import LotteryDetailsPage from "@/components/Pages/LotteryDetails/LotteryDetailsPage";
import { lotteryLookup } from "@/data/lotteryData";

interface LotteryDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: LotteryDetailPageProps) {
  const resolvedParams = await params;
  // Always use the first lottery as fallback for metadata
  const lottery = lotteryLookup[resolvedParams.id] || lotteryLookup["f1"];
  
  return {
    title: `${lottery.title} | PrizeFlow`,
    description: `Enter to win ${lottery.title} for only $${lottery.ticketPrice}. Draw date: ${lottery.drawDate}.`,
  };
}

const LotteryDetailPageWrapper = async ({ params }: LotteryDetailPageProps) => {
  const resolvedParams = await params;
  // Always show a lottery, use the requested ID if exists, otherwise use the first one
  const lottery = lotteryLookup[resolvedParams.id] || lotteryLookup["f1"];
  
  return <LotteryDetailsPage lottery={lottery} />;
};

export default LotteryDetailPageWrapper;
