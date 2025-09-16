import React from 'react';
import { Search, TrendingUp, Building, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                Buy & Sell
                <span className="block text-primary">Businesses</span>
                <span className="block">with Confidence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                The premier marketplace for startups, established companies, and commercial properties. 
                Connect with verified buyers and sellers worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search by industry, location, or price range..." 
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Search Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="space-y-1">
                  <p className="font-semibold">1,200+</p>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                </div>
              </Card>
              <Card className="p-4 text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="space-y-1">
                  <p className="font-semibold">$2.5B+</p>
                  <p className="text-sm text-muted-foreground">Deals Closed</p>
                </div>
              </Card>
              <Card className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="space-y-1">
                  <p className="font-semibold">95%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzU3OTE2NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business handshake representing successful deals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-4 shadow-lg">
              <p className="text-sm font-medium">Latest Deal</p>
              <p className="text-xs text-muted-foreground">Tech Startup - $2.5M</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}