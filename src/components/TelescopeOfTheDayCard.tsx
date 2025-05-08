// src/components/TelescopeOfTheDayCard.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TelescopeData } from '@/data/telescopes';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Globe, Tag, CheckCircle, XCircle, Clock, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface TelescopeOfTheDayCardProps {
  allTelescopes: TelescopeData[];
}

// Helper to get day of the year (1-366)
const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

// Helper to get stage icon
const getStageIcon = (stage: string): React.ReactNode => {
  switch (stage) {
    case 'Active':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'Past':
      return <XCircle className="h-4 w-4 text-red-500" />;
    case 'Future':
      return <Clock className="h-4 w-4 text-blue-500" />;
    default:
      return <Rocket className="h-4 w-4" />;
  }
};


export default function TelescopeOfTheDayCard({ allTelescopes }: TelescopeOfTheDayCardProps) {
  const [telescope, setTelescope] = useState<TelescopeData | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
    // Select telescope client-side after mount to avoid hydration mismatch
    const today = new Date();
    const dayIndex = getDayOfYear(today);
    const telescopeIndex = dayIndex % allTelescopes.length;
    setTelescope(allTelescopes[telescopeIndex]);
  }, [allTelescopes]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation values (adjust multiplier for sensitivity)
    const rotateY = ((mouseX - width / 2) / width) * 20; // Max 10 degrees rotation Y
    const rotateX = ((height / 2 - mouseY) / height) * 20; // Max 10 degrees rotation X

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 }); // Reset rotation
  };

  if (!isMounted || !telescope) {
    // Show skeleton while loading or if no telescope selected
    return (
      <Card className="overflow-hidden bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-1" />
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <Skeleton className="w-full md:w-1/2 aspect-[4/3] rounded-md" />
          <div className="w-full md:w-1/2 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <div className="flex gap-2 mt-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
           <Skeleton className="h-9 w-28 rounded-md" />
        </CardFooter>
      </Card>
    );
  }

  return (
    <div
      ref={cardRef}
      className="perspective-1000" // Apply perspective for 3D effect
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={cn(
          'overflow-hidden bg-card/80 backdrop-blur-sm transition-transform duration-300 ease-out',
          'hover:shadow-xl hover:shadow-accent/30' // Enhance shadow on hover
        )}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.03)`, // Apply 3D rotation and slight scale on hover
          transformStyle: 'preserve-3d', // Ensure children respect 3D space
        }}
      >
        <CardHeader>
          <CardTitle className="text-2xl">{telescope.name}</CardTitle>
           <div className="flex items-center gap-4 text-sm text-muted-foreground">
             <span className="flex items-center gap-1"><Tag className="h-4 w-4" /> {telescope.type}</span>
             <span className="flex items-center gap-1">{getStageIcon(telescope.stage)} {telescope.stage}</span>
             <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {telescope.launchYear}</span>
             <span className="flex items-center gap-1"><Globe className="h-4 w-4" /> {telescope.agency}</span>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-md overflow-hidden transform-gpu" style={{ transform: 'translateZ(40px)' }}> {/* Image pops out */}
            <Image
              src={telescope.image || `https://picsum.photos/seed/${telescope.name}/800/600`}
              alt={telescope.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300"
              data-ai-hint={`${telescope.name} space telescope beautiful`}
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-3 transform-gpu" style={{ transform: 'translateZ(20px)' }}> {/* Text pops out less */}
            <p className="text-foreground/90 line-clamp-4">{telescope.description}</p>
            {telescope.keyFindings && telescope.keyFindings.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2">
                <span className="text-sm font-semibold mr-2">Key Findings:</span>
                {telescope.keyFindings.slice(0, 3).map((finding, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {finding}
                  </Badge>
                ))}
                 {telescope.keyFindings.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="transform-gpu" style={{ transform: 'translateZ(10px)' }}>
            <Link href={`/explore/${encodeURIComponent(telescope.name)}`}>
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
