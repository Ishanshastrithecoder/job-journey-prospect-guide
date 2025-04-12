
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Globe, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "AI-Powered Career Guidance",
      description: "Our intelligent system analyzes your skills, experience, and preferences to recommend personalized career paths and opportunities.",
      highlight: "Interactive career assessment"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: "Resume Builder & Interview Prep",
      description: "Create professional resumes tailored for specific roles and prepare for interviews with our AI coach.",
      highlight: "PDF export with customization options"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Global Job Statistics",
      description: "Compare job markets across countries, industries, and roles to make informed career decisions.",
      highlight: "Real-time salary and demand data"
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "Professional Development",
      description: "Access personalized recommendations for courses, hackathons, and projects to enhance your skills.",
      highlight: "Tailored to your career goals"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Career Development Platform</h2>
          <p className="text-muted-foreground">
            Empowering professionals with tools and insights for every stage of their career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-effect border-blue-100 dark:border-blue-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1.5 rounded-md inline-flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" /> {feature.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
