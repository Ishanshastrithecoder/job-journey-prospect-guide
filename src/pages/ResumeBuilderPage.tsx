
import React from 'react';
import Layout from '@/components/layout/Layout';
import ResumeBuilder from '@/components/resume-builder/ResumeBuilder';

const ResumeBuilderPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-blue-50 dark:bg-blue-950/50 min-h-[calc(100vh-16rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Create Your Professional Resume</h1>
            <p className="text-lg text-muted-foreground">
              Build and download a polished resume tailored to your target role and industry
            </p>
          </div>
          
          <ResumeBuilder />
        </div>
      </div>
    </Layout>
  );
};

export default ResumeBuilderPage;
