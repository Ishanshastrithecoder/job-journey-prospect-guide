
import React from 'react';
import Layout from '@/components/layout/Layout';
import Chatbot from '@/components/career-assistant/Chatbot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CareerAssistantPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-blue-50 dark:bg-blue-950/50 min-h-[calc(100vh-16rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">AI Career Assistant</h1>
            <p className="text-lg text-muted-foreground">
              Get personalized career guidance, interview preparation tips, and job recommendations based on your skills and interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Chatbot />
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">1. Share Your Background</h3>
                    <p className="text-muted-foreground text-sm">Tell our AI about your education, experience, and interests</p>
                  </div>
                  <div>
                    <h3 className="font-medium">2. Explore Opportunities</h3>
                    <p className="text-muted-foreground text-sm">Get tailored career path recommendations and job insights</p>
                  </div>
                  <div>
                    <h3 className="font-medium">3. Prepare for Success</h3>
                    <p className="text-muted-foreground text-sm">Receive interview preparation tips and skill development suggestions</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• What careers match my background in [field]?</p>
                  <p className="text-sm">• How do salaries compare for [role] in different countries?</p>
                  <p className="text-sm">• What skills should I develop for a career in [industry]?</p>
                  <p className="text-sm">• Help me prepare for a [type] interview</p>
                  <p className="text-sm">• Suggest projects I could build to enhance my portfolio</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Career Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• <a href="#" className="text-blue-600 hover:underline">Resume Builder Tool</a></p>
                  <p>• <a href="#" className="text-blue-600 hover:underline">Global Job Market Statistics</a></p>
                  <p>• <a href="#" className="text-blue-600 hover:underline">Professional Networking Guide</a></p>
                  <p>• <a href="#" className="text-blue-600 hover:underline">Interview Preparation Checklist</a></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareerAssistantPage;
