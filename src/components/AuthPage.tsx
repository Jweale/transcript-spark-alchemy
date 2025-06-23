
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Coffee, Headphones, Mic, Sparkles, ArrowRight, Eye, EyeOff } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      
      {/* Floating icons */}
      <div className="absolute top-32 left-20 animate-bounce delay-300">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Headphones className="h-6 w-6 text-white/70" />
        </div>
      </div>
      <div className="absolute top-40 right-32 animate-bounce delay-700">
        <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Mic className="h-5 w-5 text-white/70" />
        </div>
      </div>
      <div className="absolute bottom-40 right-20 animate-bounce delay-1000">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Coffee className="h-7 w-7 text-white/70" />
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-500">
        <div className="w-8 h-8 bg-brand-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-white/70" />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-caprasimo text-white mb-2 drop-shadow-lg">
            Welcome to Podcasteo
          </h1>
          <p className="text-white/80 text-lg drop-shadow-sm">
            {isLogin ? "Ready to turn episodes into gold? ✨" : "Join the podcast content revolution! 🚀"}
          </p>
        </div>

        {/* Auth Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center space-x-1 mb-4">
              <Button
                variant={isLogin ? "default" : "ghost"}
                onClick={() => setIsLogin(true)}
                className={`flex-1 ${isLogin ? 'bg-brand-primary hover:bg-brand-primary/90' : 'text-gray-600 hover:text-brand-primary'}`}
              >
                Sign In
              </Button>
              <Button
                variant={!isLogin ? "default" : "ghost"}
                onClick={() => setIsLogin(false)}
                className={`flex-1 ${!isLogin ? 'bg-brand-primary hover:bg-brand-primary/90' : 'text-gray-600 hover:text-brand-primary'}`}
              >
                Sign Up
              </Button>
            </div>
            <CardTitle className="text-2xl text-brand-primary">
              {isLogin ? "Welcome back! 👋" : "Let's get started! 🎉"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {isLogin 
                ? "Time to create some content magic" 
                : "Your podcast content deserves better"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name fields for registration */}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="border-gray-300 focus:border-brand-primary focus:ring-brand-primary"
                      required={!isLogin}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="border-gray-300 focus:border-brand-primary focus:ring-brand-primary"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@podcast.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-gray-300 focus:border-brand-primary focus:ring-brand-primary"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="border-gray-300 focus:border-brand-primary focus:ring-brand-primary pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-primary"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password for registration */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="border-gray-300 focus:border-brand-primary focus:ring-brand-primary"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Forgot password for login */}
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-brand-primary hover:text-brand-secondary transition-colors">
                    Forgot your password? 🤔
                  </a>
                </div>
              )}

              {/* Terms checkbox for registration */}
              {!isLogin && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    className="border-brand-primary data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                disabled={!isLogin && !formData.agreeToTerms}
              >
                {isLogin ? (
                  <>
                    Sign In & Start Creating
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Create My Account
                    <Sparkles className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Social divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or continue with</span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="border-gray-300 hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button" className="border-gray-300 hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Fun footer message */}
        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            {isLogin 
              ? "New to the podcast game? " 
              : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white font-semibold hover:text-brand-accent transition-colors underline"
            >
              {isLogin ? "Join the revolution!" : "Welcome back!"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
