import React from 'react';
import { PropertyCard } from './PropertyCard';

const featuredListings = [
  {
    id: '1',
    title: 'AI-Powered SaaS Platform',
    type: 'startup' as const,
    price: '$2.5M',
    location: 'San Francisco, CA',
    description: 'Revolutionary AI platform serving 10K+ businesses with automated workflow solutions and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1Nzg0MzQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: {
      employees: 45,
      revenue: '$1.2M ARR',
      founded: 2020,
      growth: '+150% YoY'
    },
    tags: ['AI', 'SaaS', 'B2B', 'Automation', 'High Growth'],
    featured: true
  },
  {
    id: '2',
    title: 'Established Manufacturing Corp',
    type: 'company' as const,
    price: '$15M',
    location: 'Austin, TX',
    description: 'Profitable manufacturing company specializing in automotive parts with established supply chain and loyal customer base.',
    image: 'https://images.unsplash.com/photo-1746046936818-8d432ebd3d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGhlYWRxdWFydGVyc3xlbnwxfHx8fDE3NTc5MTcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: {
      employees: 200,
      revenue: '$12M',
      founded: 1995,
      growth: '+8% YoY'
    },
    tags: ['Manufacturing', 'Automotive', 'Established', 'Profitable'],
    featured: true
  },
  {
    id: '3',
    title: 'Premium Office Complex',
    type: 'property' as const,
    price: '$8.5M',
    location: 'New York, NY',
    description: 'Modern 50,000 sq ft office building in prime Manhattan location with high occupancy rate and premium tenants.',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc4Mzk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: {
      revenue: '$1.1M/year',
      founded: 2018
    },
    tags: ['Commercial', 'Manhattan', 'High Yield', 'Premium Location'],
    featured: true
  },
  {
    id: '4',
    title: 'FinTech Payment Startup',
    type: 'startup' as const,
    price: '$4.2M',
    location: 'Miami, FL',
    description: 'Fast-growing payment processing platform focused on small businesses with innovative mobile-first approach.',
    image: 'https://images.unsplash.com/photo-1639867139538-6abf5a32175b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8bHV4dXJ5JTIwYnVzaW5lc3MlMjBvZmZpY2V8ZW58MXx8fHwxNzU3OTE3MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: {
      employees: 28,
      revenue: '$800K ARR',
      founded: 2021,
      growth: '+200% YoY'
    },
    tags: ['FinTech', 'Payments', 'Mobile', 'SMB', 'High Growth']
  }
];

export function FeaturedListings() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Listings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked opportunities from our premium marketplace. Each listing is verified and ready for acquisition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <PropertyCard key={listing.id} {...listing} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
}