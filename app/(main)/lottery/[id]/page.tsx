import LotteryDetailPage from "@/components/Pages/LotteryDetail/LotteryDetailPage";
import { lotteryLookup } from "@/data/lotteryData";

interface LotteryDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: LotteryDetailPageProps) {
  // Always use the first lottery as fallback for metadata
  const lottery = lotteryLookup[params.id] || lotteryLookup["f1"];
  
  return {
    title: `${lottery.title} | PrizeFlow`,
    description: `Enter to win ${lottery.title} for only $${lottery.ticketPrice}. Draw date: ${lottery.drawDate}.`,
  };
}

const LotteryDetailPageWrapper = ({ params }: LotteryDetailPageProps) => {
  // Always show a lottery, use the requested ID if exists, otherwise use the first one
  const lottery = lotteryLookup[params.id] || lotteryLookup["f1"];
  
  return <LotteryDetailPage lottery={lottery} />;
};

export default LotteryDetailPageWrapper;
