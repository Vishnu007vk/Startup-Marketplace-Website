import React from 'react';
import { DollarSign, Users, Building, Award } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$2.5B+',
    label: 'Total Deal Value',
    description: 'Facilitated through our platform'
  },
  {
    icon: Building,
    value: '1,200+',
    label: 'Active Listings',
    description: 'Verified businesses and properties'
  },
  {
    icon: Users,
    value: '15,000+',
    label: 'Registered Users',
    description: 'Buyers, sellers, and investors'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Success Rate',
    description: 'Of transactions completed'
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Trusted by Thousands</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join the leading marketplace where serious buyers and sellers connect to close deals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="text-xl font-semibold">{stat.label}</p>
                  <p className="text-sm opacity-80">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}