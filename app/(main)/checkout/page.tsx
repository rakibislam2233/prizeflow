import CheckoutPage from "@/components/Pages/Checkout/CheckoutPage";
import { lotteryLookup } from "@/data/lotteryData";

interface CheckoutPageProps {
  searchParams: {
    lotteryId?: string;
    quantity?: string;
  };
}

export async function generateMetadata({ searchParams }: CheckoutPageProps) {
  const lotteryId = searchParams.lotteryId || "f1";
  const lottery = lotteryLookup[lotteryId];
  const quantity = parseInt(searchParams.quantity || "1");
  
  return {
    title: `Secure Checkout | PrizeFlow`,
    description: `Complete your purchase for ${quantity} ticket(s) for ${lottery.title}.`,
  };
}

const CheckoutPageWrapper = ({ searchParams }: CheckoutPageProps) => {
  const lotteryId = searchParams.lotteryId || "f1";
  const quantity = parseInt(searchParams.quantity || "1");
  
  const lottery = lotteryLookup[lotteryId];
  
  if (!lottery) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Lottery Not Found</h1>
            <p className="text-gray-600 mb-6">The requested lottery could not be found.</p>
            <a href="/lotteries" className="inline-block bg-primary text-white px-6 py-2 rounded-md">
              Back to Lotteries
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <CheckoutPage lottery={lottery} ticketQuantity={quantity} />;
};

export default CheckoutPageWrapper;
