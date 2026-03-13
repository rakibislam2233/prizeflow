import CheckoutPage from "@/components/Pages/Checkout/CheckoutPage";
import { lotteryLookup } from "@/data/lotteryData";
import Link from "next/link";
interface CheckoutPageProps {
  searchParams: Promise<{
    lotteryId?: string;
    quantity?: string;
  }>;
}
const CheckoutPageWrapper = async ({ searchParams }: CheckoutPageProps) => {
  const resolvedSearchParams = await searchParams;
  const lotteryId = resolvedSearchParams.lotteryId || "f1";
  const quantity = parseInt(resolvedSearchParams.quantity || "1");

  const lottery = lotteryLookup[lotteryId];

  if (!lottery) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Lottery Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The requested lottery could not be found.
            </p>
            <Link
              href="/lotteries"
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg"
            >
              Back to Lotteries
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <CheckoutPage lottery={lottery} ticketQuantity={quantity} />;
};

export default CheckoutPageWrapper;
