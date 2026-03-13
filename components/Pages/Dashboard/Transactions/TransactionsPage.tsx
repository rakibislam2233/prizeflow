"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const transactions = [
  {
    date: "12/10/2016",
    description: "Win a car",
    amount: "$12",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Gaming setup",
    amount: "$16",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Rolex watch",
    amount: "$19",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Dubai trip",
    amount: "$11",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Chicken dinner",
    amount: "$14",
    status: "Completed",
  },
];

const TransactionsPage = () => {
  return (
    <div className="w-full space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction history</h1>
        <p className="text-gray-600">All the transaction history of your account</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        {transaction.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
