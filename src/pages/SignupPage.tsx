
import React from 'react';
import Layout from '@/components/layout/Layout';
import SignupForm from '@/components/auth/SignupForm';

const SignupPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-blue-50 dark:bg-blue-950/50 min-h-[calc(100vh-16rem)]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Create Your Account</h1>
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
