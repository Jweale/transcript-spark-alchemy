
import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <Dashboard />
    </div>
  );
};

export default Index;
