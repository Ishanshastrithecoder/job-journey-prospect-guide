
import React from 'react';
import Layout from '@/components/layout/Layout';
import JobStatistics from '@/components/job-statistics/JobStatistics';

const JobStatisticsPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-blue-50 dark:bg-blue-950/50 min-h-[calc(100vh-16rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Global Job Market Statistics</h1>
            <p className="text-lg text-muted-foreground">
              Compare salaries, demand, and growth across different countries, industries, and roles
            </p>
          </div>
          
          <JobStatistics />
        </div>
      </div>
    </Layout>
  );
};

export default JobStatisticsPage;
