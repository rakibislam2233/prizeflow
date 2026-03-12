import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";
import {
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PrizeFlow",
  description:
    "Get in touch with the PrizeFlow team. We're here to help you with any questions or concerns.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@prizeflow.com",
    description: "Get a response within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Get instant help from our team",
  },
];

const faqs = [
  {
    question: "How do I enter a competition?",
    answer:
      "Simply browse our competitions, select one you like, choose your number of tickets, and complete the secure payment process.",
  },
  {
    question: "When will winners be announced?",
    answer:
      "Winners are announced immediately after the draw. You'll be notified via email and SMS if you win.",
  },
  {
    question: "How do I claim my prize?",
    answer:
      "Winners will receive detailed instructions via email on how to claim their prize within 30 days of the draw.",
  },
  {
    question: "Is PrizeFlow legitimate and fair?",
    answer:
      "Yes! We use certified random number generators for all draws and are fully licensed and regulated.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Have questions or need help? Our friendly support team is here to
            assist you 24/7.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {info.value}
                    </p>
                    <p className="text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <FormInput placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <FormInput placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <FormInput placeholder="john.doe@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <FormInput placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={5}
                    placeholder="Tell us more about your question or issue..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Office Info & FAQ */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Headquarters</h4>
                      <p className="text-gray-600">
                        123 Competition Street
                        <br />
                        Prize City, PC 12345
                        <br />
                        United States
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM EST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    Quick FAQ
                  </CardTitle>
                  <CardDescription>
                    Find quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b pb-4 last:border-b-0"
                      >
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      View All FAQs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Support */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <Card className="bg-linear-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-300">
                Emergency Support
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For urgent issues related to account security, payment problems,
                or prize claims, please contact our emergency support line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: +1 (555) 911-HELP
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  emergency@prizeflow.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
