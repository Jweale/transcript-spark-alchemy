
import React from 'react';
import Header from '../components/Header';
import UploadForm from '../components/UploadForm';

const Upload: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-caprasimo text-brand-primary mb-4">
              Upload Your Podcast Transcript
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your podcast content into SEO-optimized articles. 
              Choose your preferred method to upload your transcript below.
            </p>
          </div>
          
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default Upload;
