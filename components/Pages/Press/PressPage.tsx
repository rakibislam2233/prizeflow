"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, Download, ExternalLink, FileText, TrendingUp } from "lucide-react";
import React from "react";

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "PrizeFlow Reaches $2 Million in Prizes Awarded",
      excerpt: "Milestone achievement as platform continues to transform the prize competition industry with fair and transparent draws.",
      category: "Company Milestone"
    },
    {
      date: "February 28, 2024",
      title: "New Partnership with Luxury Car Brands",
      excerpt: "PrizeFlow announces exclusive partnerships with premium automotive brands for upcoming competitions.",
      category: "Partnership"
    },
    {
      date: "February 10, 2024",
      title: "100,000 Users Milestone: Thank You to Our Community",
      excerpt: "PrizeFlow celebrates reaching 100,000 registered users and commits to enhancing the platform experience.",
      category: "Community"
    }
  ];

  const mediaCoverage = [
    {
      outlet: "TechCrunch",
      title: "How PrizeFlow is Revolutionizing Online Prize Competitions",
      date: "March 1, 2024",
      link: "#",
      excerpt: "An in-depth look at PrizeFlow's innovative approach to fair and transparent prize competitions."
    },
    {
      outlet: "Forbes",
      title: "The Future of Online Gaming: PrizeFlow's Success Story",
      date: "February 15, 2024",
      link: "#",
      excerpt: "How PrizeFlow is setting new standards for fairness and user experience in the prize competition space."
    },
    {
      outlet: "Business Insider",
      title: "Inside PrizeFlow's $2M Prize Pool Strategy",
      date: "January 28, 2024",
      link: "#",
      excerpt: "Exclusive interview with PrizeFlow's CEO on their mission to make prize competitions accessible to everyone."
    }
  ];

  const downloads = [
    {
      title: "PrizeFlow Media Kit",
      description: "Logo, brand guidelines, and company overview",
      size: "15.2 MB",
      type: "PDF"
    },
    {
      title: "Company Fact Sheet 2024",
      description: "Key statistics, milestones, and achievements",
      size: "2.8 MB",
      type: "PDF"
    },
    {
      title: "Executive Team Bios",
      description: "Leadership team information and headshots",
      size: "8.5 MB",
      type: "ZIP"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Press & Media
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Room</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            The latest news, press releases, and media coverage about PrizeFlow
          </p>
        </div>
      </div>

      {/* Media Contact */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <Card className="bg-linear-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For press inquiries, interview requests, or additional information, 
                please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary text-white">
                  <FileText className="w-5 h-5 mr-2" />
                  media@prizeflow.com
                </Button>
                <Button variant="outline">
                  <Download className="w-5 h-5 mr-2" />
                  Download Media Kit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Press Releases */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Press Releases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{release.date}</span>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-3">
                    {release.category}
                  </Badge>
                  <CardTitle className="text-xl leading-tight">{release.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Media Coverage */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Media Coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaCoverage.map((coverage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge className="mb-2 bg-primary text-white">
                        {coverage.outlet}
                      </Badge>
                      <CardTitle className="text-xl leading-tight">{coverage.title}</CardTitle>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {coverage.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{coverage.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Downloads */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Download className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Media Downloads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{download.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{download.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{download.type} • {download.size}</span>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Best Gaming Platform 2024</h3>
                <p className="text-sm text-gray-600">Tech Innovation Awards</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Fastest Growing Startup</h3>
                <p className="text-sm text-gray-600">Business Excellence 2024</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">User Experience Excellence</h3>
                <p className="text-sm text-gray-600">Design Awards 2023</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Innovation in Gaming</h3>
                <p className="text-sm text-gray-600">Gaming Industry Awards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
