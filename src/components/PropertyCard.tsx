import React from 'react';
import { MapPin, Users, Calendar, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyCardProps {
  id: string;
  title: string;
  type: 'startup' | 'company' | 'property';
  price: string;
  location: string;
  description: string;
  image: string;
  metrics: {
    employees?: number;
    revenue?: string;
    founded?: number;
    growth?: string;
  };
  tags: string[];
  featured?: boolean;
}

export function PropertyCard({ 
  title, 
  type, 
  price, 
  location, 
  description, 
  image, 
  metrics, 
  tags, 
  featured 
}: PropertyCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'startup': return 'bg-blue-100 text-blue-800';
      case 'company': return 'bg-green-100 text-green-800';
      case 'property': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <Button
          variant="outline"
          size="sm"
          className="absolute top-3 right-3 w-8 h-8 p-0 bg-background/80 backdrop-blur-sm"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className={getTypeColor(type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            <span className="font-bold text-lg text-primary">{price}</span>
          </div>
          
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 py-2 border-t border-b">
          {metrics.employees && (
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>{metrics.employees} employees</span>
            </div>
          )}
          {metrics.revenue && (
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>{metrics.revenue} revenue</span>
            </div>
          )}
          {metrics.founded && (
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>Founded {metrics.founded}</span>
            </div>
          )}
          {metrics.growth && (
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-green-600">{metrics.growth}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1">View Details</Button>
          <Button variant="outline" className="flex-1">Contact Seller</Button>
        </div>
      </CardContent>
    </Card>
  );
}