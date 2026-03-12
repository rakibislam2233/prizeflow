"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Sparkles, Target, Trophy, Users } from "lucide-react";
import React from "react";

const AboutPage: React.FC = () => {
  const stats = [
    { number: "100K+", label: "Happy Players" },
    { number: "$2M+", label: "Prizes Awarded" },
    { number: "500+", label: "Competitions" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Fair & Transparent",
      description: "All our competitions use certified random number generators and are publicly verified to ensure complete fairness."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We build lasting relationships with our players through excellent service and exciting prize opportunities."
    },
    {
      icon: Trophy,
      title: "Amazing Prizes",
      description: "From luxury cars to cash prizes, we offer the most exciting rewards that truly change lives."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our platform serves players from around the world, bringing the excitement of winning to everyone."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in gaming and entertainment industry."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Tech expert ensuring our platform remains secure, scalable, and innovative."
    },
    {
      name: "Emma Williams",
      role: "Head of Operations",
      description: "Ensuring smooth operations and exceptional customer experiences."
    },
    {
      name: "David Martinez",
      role: "Head of Marketing",
      description: "Creative strategist bringing exciting competitions to our growing community."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            About PrizeFlow
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Making Dreams Come True,
            <br />
            One Competition at a Time
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            We're on a mission to create the most exciting and trustworthy prize competition platform 
            where everyone has a fair chance to win amazing prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Browse Competitions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Meet Our Winners
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To revolutionize the prize competition industry by creating a platform that combines 
              excitement, fairness, and life-changing opportunities. We believe everyone deserves 
              a chance to dream big and win big, and we're committed to making that happen through 
              innovative competitions and exceptional user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind PrizeFlow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-linear-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Fun?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your journey with PrizeFlow today and get a chance to win amazing prizes!
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
