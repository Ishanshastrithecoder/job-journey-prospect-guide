
import React from 'react';
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-blue-50 dark:bg-blue-950/50 min-h-[calc(100vh-16rem)]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Sign In to Your Account</h1>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
