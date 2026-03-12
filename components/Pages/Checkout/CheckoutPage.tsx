"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { ArrowLeft, CreditCard, Lock, Mail, MapPin, Phone, Shield, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import type { LotteryItem } from "../Home/LotteryCard";

interface CheckoutPageProps {
  lottery: LotteryItem;
  ticketQuantity: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ lottery, ticketQuantity }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  const totalPrice = lottery.ticketPrice * ticketQuantity;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    console.log("Checkout submitted:", formData);
  };

  return (
    <div className="w-full pt-20">
      {/* Header Section */}
      <div className="relative">
        <div className="bg-linear-to-b from-primary/10 to-white/50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
            <Link href={`/lottery/${lottery.id}`}>
              <Button variant="ghost" className="flex items-center gap-2 mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Lottery
              </Button>
            </Link>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Checkout</h1>
              <p className="text-gray-600">Complete your purchase securely</p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Order Summary */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-600 text-center">Prize</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{lottery.title}</h3>
                  <p className="text-sm text-gray-500">Draw Date: {lottery.drawDate}</p>
                </div>
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ticket Price</span>
                  <span className="font-medium">${lottery.ticketPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity</span>
                  <span className="font-medium">{ticketQuantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Your payment information is encrypted and secure. We use industry-standard security measures to protect your data.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Lock className="w-4 h-4" />
                <span>256-bit SSL encryption</span>
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="space-y-6">
            {/* Billing Information */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Billing Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                    icon={User}
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                    icon={User}
                  />
                </div>

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  icon={Mail}
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                  icon={Phone}
                />

                <FormInput
                  label="Billing Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your billing address"
                  icon={MapPin}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <FormInput
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <FormInput
                      label="Postal Code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter postal code"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  icon={CreditCard}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Expiry Date"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                  <FormInput
                    label="CVC"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </div>

                <FormInput
                  label="Name on Card"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </form>
            </div>

            {/* Complete Purchase Button */}
            <Button 
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-primary text-white border-0 h-12 rounded-lg cursor-pointer text-base font-semibold"
            >
              Complete Purchase - ${totalPrice.toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
