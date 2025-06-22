
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-caprasimo text-brand-primary">Podcasteo</h1>
          <nav className="hidden md:flex space-x-6">
            <a 
              href="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'
              }`}
            >
              Dashboard
            </a>
            <a 
              href="/upload" 
              className={`font-medium transition-colors ${
                location.pathname === '/upload' ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'
              }`}
            >
              Upload
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Analytics</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            + New Upload
          </Button>
          
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-brand-primary text-white text-sm">JD</AvatarFallback>
            </Avatar>
            <span className="hidden sm:block text-sm font-medium">John Doe</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
