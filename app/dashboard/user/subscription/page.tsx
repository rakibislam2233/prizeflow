"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Check, CreditCard, Crown, Gem, Gift, Star, X } from "lucide-react";
import { useState } from "react";

// Mock subscription data
const currentSubscription = {
  plan: "Silver",
  status: "active",
  startDate: "2024-01-15",
  nextBillingDate: "2024-04-15",
  monthlyPrice: 9.99,
  benefits: [
    "Up to 25 competitions per month",
    "Priority customer support",
    "Access to VIP competitions",
    "5% bonus tickets on purchases",
    "Early access to new competitions",
    "SMS notifications"
  ]
};

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Perfect for getting started",
    icon: Star,
    features: [
      "Enter up to 5 competitions per month",
      "Standard customer support",
      "Access to regular competitions",
      "Basic prize eligibility",
      "Email notifications"
    ],
    excluded: [
      "VIP competitions",
      "Priority support",
      "Early access to new competitions",
      "Bonus tickets"
    ],
    color: "text-gray-600"
  },
  {
    name: "Silver",
    price: "$9.99",
    period: "/month",
    description: "Great for regular players",
    icon: Crown,
    popular: true,
    features: [
      "Enter up to 25 competitions per month",
      "Priority customer support",
      "Access to VIP competitions",
      "5% bonus tickets on all purchases",
      "Early access to new competitions",
      "SMS notifications"
    ],
    excluded: [
      "Exclusive competitions",
      "Dedicated account manager",
      "Highest prize eligibility"
    ],
    color: "text-purple-600"
  },
  {
    name: "Gold",
    price: "$19.99",
    period: "/month",
    description: "For serious competition enthusiasts",
    icon: Gem,
    features: [
      "Unlimited competition entries",
      "Dedicated customer support",
      "Access to exclusive competitions",
      "10% bonus tickets on all purchases",
      "Priority early access",
      "Highest prize eligibility",
      "Monthly free tickets",
      "Exclusive merchandise"
    ],
    excluded: [],
    color: "text-yellow-600"
  }
];

const paymentMethods = [
  {
    id: "1",
    type: "credit_card",
    last4: "4242",
    brand: "Visa",
    expiry: "12/25",
    isDefault: true
  },
  {
    id: "2",
    type: "credit_card",
    last4: "8888",
    brand: "Mastercard",
    expiry: "09/24",
    isDefault: false
  }
];

const billingHistory = [
  {
    id: "1",
    date: "2024-03-15",
    description: "Silver Plan - Monthly",
    amount: 9.99,
    status: "paid",
    invoice: "#INV-2024-03-001"
  },
  {
    id: "2",
    date: "2024-02-15",
    description: "Silver Plan - Monthly",
    amount: 9.99,
    status: "paid",
    invoice: "#INV-2024-02-001"
  },
  {
    id: "3",
    date: "2024-01-15",
    description: "Silver Plan - Monthly",
    amount: 9.99,
    status: "paid",
    invoice: "#INV-2024-01-001"
  }
];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("Silver");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      case "past_due":
        return <Badge className="bg-yellow-100 text-yellow-800">Past Due</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscription Management</h1>
          <p className="text-gray-600">Manage your subscription plan and billing information</p>
        </div>

        {/* Current Subscription Overview */}
        <Card className="mb-8 bg-linear-to-r from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {currentSubscription.plan} Plan
                  </h2>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(currentSubscription.status)}
                    <span className="text-sm text-gray-600">
                      ${currentSubscription.monthlyPrice}/month
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-600 mb-1">Next Billing Date</p>
                <p className="text-lg font-semibold">{currentSubscription.nextBillingDate}</p>
                <p className="text-sm text-gray-600">${currentSubscription.monthlyPrice}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Current Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentSubscription.benefits.slice(0, 3).map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">
                      +{currentSubscription.benefits.length - 3} more
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Update Payment
                  </Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700">
                    Cancel Subscription
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isCurrentPlan = plan.name === currentSubscription.plan;
              
              return (
                <Card 
                  key={plan.name} 
                  className={`relative hover:shadow-lg transition-shadow ${
                    plan.popular ? 'border-2 border-purple-500' : ''
                  } ${isCurrentPlan ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-500 text-white px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {isCurrentPlan && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-green-500 text-white px-3 py-1">
                        Current Plan
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      plan.popular ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-lg text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.excluded?.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 opacity-50">
                          <X className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        isCurrentPlan 
                          ? 'bg-gray-100 text-gray-700 cursor-not-allowed' 
                          : plan.popular 
                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                      disabled={isCurrentPlan}
                    >
                      {isCurrentPlan ? 'Current Plan' : 'Choose Plan'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                Manage your payment methods and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {method.brand} •••• {method.last4}
                      </p>
                      <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && (
                      <Badge variant="outline">Default</Badge>
                    )}
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Billing History
              </CardTitle>
              <CardDescription>
                View your past invoices and payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{invoice.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {invoice.date}
                        <span>•</span>
                        <span>{invoice.invoice}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${invoice.amount}</p>
                      {getStatusBadge(invoice.status)}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Invoices
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers */}
        <Card className="mt-8 bg-linear-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <Gift className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Special Offer!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Upgrade to Gold today and get 20% off your first 3 months plus 50 bonus tickets!
            </p>
            <Button size="lg" className="bg-yellow-600 text-white hover:bg-yellow-700">
              Claim This Offer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
