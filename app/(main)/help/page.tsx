import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CreditCard, HelpCircle, Search, Shield, Ticket, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | PrizeFlow",
  description: "Find answers to common questions, guides, and support for PrizeFlow competitions.",
};

const helpCategories = [
  {
    icon: HelpCircle,
    title: "Getting Started",
    description: "Learn how to create an account and enter your first competition",
    articles: [
      "How to create an account",
      "How to enter a competition",
      "Understanding ticket prices",
      "How draws work"
    ]
  },
  {
    icon: Ticket,
    title: "Competitions & Tickets",
    description: "Everything about competitions, tickets, and prizes",
    articles: [
      "How to buy tickets",
      "Ticket limits and rules",
      "Prize delivery information",
      "Draw schedules"
    ]
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Payment methods, refunds, and billing questions",
    articles: [
      "Accepted payment methods",
      "How to request a refund",
      "Payment security",
      "Billing statements"
    ]
  },
  {
    icon: Users,
    title: "Account & Profile",
    description: "Manage your account settings and personal information",
    articles: [
      "Updating profile information",
      "Changing password",
      "Account verification",
      "Deleting your account"
    ]
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "How we keep your information safe and secure",
    articles: [
      "Data protection policy",
      "Fair play guarantee",
      "Responsible gaming",
      "Report suspicious activity"
    ]
  }
];

const popularArticles = [
  "How do I enter a competition?",
  "When will the draw take place?",
  "How are winners notified?",
  "What payment methods are accepted?",
  "How do I claim my prize?",
  "Is my personal information safe?"
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Find answers to your questions about PrizeFlow competitions, payments, and account management.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles..."
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 hover:text-primary transition-colors">
                    {article}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
                          • {article}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
