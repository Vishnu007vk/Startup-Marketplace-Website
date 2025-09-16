import React from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="font-bold text-xl">MarketPlace</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Buy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sell</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Startups</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Companies</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Properties</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search businesses, startups, properties..." 
                className="pl-10 w-80"
              />
            </div>
            
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            
            <Button size="sm">
              List Property
            </Button>
            
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}