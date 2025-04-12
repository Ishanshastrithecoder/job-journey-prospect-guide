
import React from 'react';
import { BarChart, TrendingUp, Users, Award } from 'lucide-react';

const StatisticsSection = () => {
  const stats = [
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      value: "15+",
      label: "Countries",
      description: "Global job market data"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      value: "200+",
      label: "Industries",
      description: "Comprehensive coverage"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      value: "50K+",
      label: "Users",
      description: "Growing community"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      value: "95%",
      label: "Satisfaction",
      description: "User approval rate"
    },
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Global Impact</h2>
          <p className="text-muted-foreground">
            Providing accurate data and guidance to professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="font-medium text-blue-800 dark:text-blue-300 mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
