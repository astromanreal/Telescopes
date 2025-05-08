// src/app/targets/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Target, ArrowRight } from 'lucide-react'; // Import relevant icons
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { targetData } from '@/data/targets'; // Import the detailed data

export default function TargetsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 flex items-center justify-center">
          <Target className="mr-3 h-10 w-10" /> Cosmic Targets
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explore the diverse celestial objects and phenomena that space telescopes help us observe and understand.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {targetData.map((category, index) => (
          <Card
            key={category.name}
            className="bg-card/80 backdrop-blur-sm flex flex-col hover:shadow-lg hover:shadow-accent/20 transition-shadow duration-300 fade-in group perspective-1000"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardHeader>
               <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md bg-muted">
                 <Image
                   src={category.imageUrl} // Use direct imageUrl
                   alt={`Illustration of ${category.name}`}
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   style={{ objectFit: 'cover' }}
                   className="transition-transform duration-300 group-hover:scale-105"
                   data-ai-hint={category.aiHint}
                 />
              </div>
              <CardTitle className="flex items-center text-xl text-accent">
                <category.icon className="mr-2 h-5 w-5" /> {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/90 line-clamp-4">{category.shortDescription}</p> {/* Use shortDescription */}
            </CardContent>
             <CardFooter className="pt-4"> {/* Added pt-4 for spacing */}
               <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                 <Link href={`/targets/${encodeURIComponent(category.name)}`}>
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                 </Link>
               </Button>
             </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
