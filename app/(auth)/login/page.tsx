import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            KCN Seniors
          </h1>
          <p className="text-xl text-gray-300">
            Documentation Portal
          </p>
        </div>
        
        <LoginForm />
        
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>Secure access to comprehensive WordPress documentation</p>
        </div>
      </div>
    </div>
  );
}
