
import React from 'react';
import { Button } from '@/components/ui/button';
import { Coffee, Zap, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-caprasimo text-brand-primary mb-8 leading-tight">
            Turn every podcast episode into{' '}
            <span className="text-brand-accent bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent">
              search-winning
            </span>
            , ChatGPT-ready content—while you finish your{' '}
            <span className="inline-flex items-center">
              coffee <Coffee className="ml-2 h-8 w-8 text-amber-600" />
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Busy episode slate? Zero time to write show articles? Podcasteo converts your ready-made transcript into fully-optimised pages that rank, attract leads and surface in generative engines—no writers, no plugins, no headaches.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-brand-primary hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get early-access
            </Button>
            <a 
              href="#demo" 
              className="text-lg font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300 flex items-center group"
            >
              Watch 60-sec demo 
              <ArrowRight className="ml-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
        {/* Visual element */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500 font-medium">podcast-transcript.txt</span>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-lg blur-xl transform rotate-1"></div>
              <div className="relative bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3">
                      🎙️
                    </div>
                    <span className="text-sm font-medium text-gray-600">Podcast Episode</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-brand-accent animate-pulse" />
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-3">
                      📄
                    </div>
                    <span className="text-sm font-medium text-gray-600">SEO Article</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-brand-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
