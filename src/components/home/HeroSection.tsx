
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, ChartBar, FileText, Users, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      orbRef.current.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950 py-20">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={orbRef} 
          className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-500/10 animate-spin-slow"
        ></div>
        <div className="absolute -left-20 top-1/2 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 animate-float"></div>
        <div className="absolute right-1/4 bottom-20 w-40 h-40 rounded-full bg-blue-500/10 dark:bg-blue-700/10 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container relative mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Navigate Your <span className="gradient-text">Career Path</span> With Confidence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            AI-powered career guidance, personalized resume building, and global job market insights
            to help you make informed decisions about your professional journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link to="/career-assistant">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/job-statistics">Explore Job Market</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            { 
              icon: <Briefcase className="h-6 w-6" />, 
              title: "Career Guidance", 
              description: "AI-powered assessment and personalized career recommendations" 
            },
            { 
              icon: <FileText className="h-6 w-6" />, 
              title: "Resume Builder", 
              description: "Create professional resumes tailored to your target roles" 
            },
            { 
              icon: <ChartBar className="h-6 w-6" />, 
              title: "Job Statistics", 
              description: "Compare opportunities across different countries and industries" 
            },
            { 
              icon: <Users className="h-6 w-6" />, 
              title: "Professional Network", 
              description: "Connect with peers and grow your professional network" 
            },
          ].map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl card-effect flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
