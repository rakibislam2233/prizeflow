import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | PrizeFlow",
  description: "Join our team and help us create amazing prize competitions. Explore career opportunities at PrizeFlow.",
};

const careers = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / Dhaka",
    type: "Full-time",
    salary: "$80k - $120k",
    description: "We're looking for an experienced frontend developer to join our engineering team and help build amazing user experiences for our prize competition platform.",
    requirements: [
      "5+ years of experience with React/Next.js",
      "Strong expertise in TypeScript and Tailwind CSS",
      "Experience with responsive design and cross-browser compatibility",
      "Knowledge of modern frontend build tools and CI/CD"
    ]
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Dhaka",
    type: "Full-time",
    salary: "$60k - $90k",
    description: "Join our design team to create beautiful and intuitive interfaces for our prize competition platform. You'll work closely with product and engineering teams.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio demonstrating user-centered design",
      "Experience with design systems and component libraries"
    ]
  },
  {
    id: 3,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $100k",
    description: "Lead our marketing efforts to promote PrizeFlow and attract more users to our platform. You'll be responsible for developing and executing marketing strategies.",
    requirements: [
      "4+ years of marketing experience",
      "Experience with digital marketing and social media",
      "Strong analytical and communication skills",
      "Background in the gaming or entertainment industry is a plus"
    ]
  },
  {
    id: 4,
    title: "Customer Support Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    salary: "$40k - $60k",
    description: "Help our users have the best experience on PrizeFlow by providing excellent customer support and resolving issues efficiently.",
    requirements: [
      "2+ years of customer support experience",
      "Excellent communication and problem-solving skills",
      "Experience with help desk software",
      "Ability to work flexible hours including weekends"
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at PrizeFlow</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join our mission to create exciting prize competitions and help people win amazing prizes. 
            We're looking for talented individuals who are passionate about innovation and user experience.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join PrizeFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Amazing Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with talented, passionate people who are dedicated to creating the best prize competition platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Flexible Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy flexible working hours and remote work options that help you maintain work-life balance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Competitive Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer competitive salaries, benefits, and equity packages to attract and retain top talent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {careers.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-lg">{job.department}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        {job.salary}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full md:w-auto">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* No Suitable Position */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See a Fit?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people to join our team. If you don't see a position that matches your skills, 
            feel free to send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="outline">
            Send Your Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
