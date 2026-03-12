"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Star, Gem, Check, X, CreditCard, Calendar, Gift } from "lucide-react";

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
    "5% bonus tickets on purchases"
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
      "Access to regular competitions"
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
      "5% bonus tickets on all purchases"
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
      "10% bonus tickets on all purchases"
    ],
    color: "text-yellow-600"
  }
];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("Silver");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
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
      </div>
    </div>
  );
}
