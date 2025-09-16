import React from 'react';
import { Rocket, Building, MapPin, TrendingUp, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const categories = [
  {
    icon: Rocket,
    title: 'Tech Startups',
    description: 'High-growth technology companies',
    count: '450+ listings',
    color: 'text-blue-600'
  },
  {
    icon: Building,
    title: 'Established Companies',
    description: 'Profitable businesses with proven track records',
    count: '320+ listings',
    color: 'text-green-600'
  },
  {
    icon: MapPin,
    title: 'Commercial Properties',
    description: 'Office buildings, retail spaces, and warehouses',
    count: '280+ listings',
    color: 'text-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'E-commerce Brands',
    description: 'Online retail and marketplace businesses',
    count: '190+ listings',
    color: 'text-orange-600'
  },
  {
    icon: Users,
    title: 'Service Companies',
    description: 'Consulting, agencies, and professional services',
    count: '150+ listings',
    color: 'text-indigo-600'
  },
  {
    icon: Briefcase,
    title: 'Investment Opportunities',
    description: 'Minority stakes and partnership deals',
    count: '95+ listings',
    color: 'text-red-600'
  }
];

export function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect opportunity in your preferred industry or asset class
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-background border group-hover:border-primary/20 ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}