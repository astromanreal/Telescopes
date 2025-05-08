'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation'; // Use notFound for 404
import { telescopeData, TelescopeData } from '@/data/telescopes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Globe, Tag, Target, CheckCircle, XCircle, Clock, Rocket, Asterisk } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Helper to get stage icon based on stage name
const getStageIcon = (stage: string): React.ReactNode => {
  switch (stage) {
    case 'Active':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'Past':
      return <XCircle className="h-5 w-5 text-red-500" />;
    case 'Future':
      return <Clock className="h-5 w-5 text-blue-500" />;
    default:
      return <Rocket className="h-5 w-5" />; // Default icon
  }
};

export default function TelescopeDetailPage() {
  const params = useParams();
  const telescopeNameParam = params?.telescopeName;

  // Decode the telescope name from the URL parameter
  const telescopeName = telescopeNameParam ? decodeURIComponent(telescopeNameParam as string) : undefined;

  // Find the telescope data based on the decoded name
  const telescope = telescopeName
    ? telescopeData.find(t => t.name.toLowerCase() === telescopeName.toLowerCase())
    : undefined;

  // If telescope data is not found, render the notFound page
  if (!telescope) {
    notFound(); // Use Next.js notFound helper
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <article className="space-y-8">
        {/* Back Button */}
        <Button variant="outline" asChild>
           <Link href="/explore">← Back to Explore</Link>
        </Button>

        {/* Telescope Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-accent">{telescope.name}</h1>

        {/* Main Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg bg-muted">
          <Image
            src={telescope.image || `https://picsum.photos/seed/${telescope.name}/1280/720`}
            alt={`Image of ${telescope.name}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
            data-ai-hint={`${telescope.name} space telescope observation`}
            priority // Prioritize loading the main image
          />
        </div>

        {/* Metadata Card */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Launch Year</p>
                <p className="font-semibold">{telescope.launchYear}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Agency/Country</p>
                <p className="font-semibold">{telescope.agency} ({telescope.country})</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-semibold">{telescope.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {getStageIcon(telescope.stage)}
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold">{telescope.stage}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 col-span-2 md:col-span-1">
              <Target className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Primary Target</p>
                <p className="font-semibold">{telescope.target}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About {telescope.name}</h2>
          <p className="text-lg leading-relaxed text-foreground/90">{telescope.description}</p>
        </section>

        <Separator />

        {/* Key Findings Section */}
        {telescope.keyFindings && telescope.keyFindings.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Discoveries & Achievements</h2>
            <ul className="list-none space-y-3 pl-0">
              {telescope.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-md">
                  <Asterisk className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{finding}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Badges for Type/Stage (Optional, as they are in the card) */}
        {/*
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{telescope.type}</Badge>
          <Badge variant={telescope.stage === 'Active' ? 'default' : 'secondary'}>{telescope.stage}</Badge>
        </div>
        */}
      </article>
    </div>
  );
}

// Optional: Generate static paths if you know all telescope names beforehand
// export async function generateStaticParams() {
//   return telescopeData.map((telescope) => ({
//     telescopeName: encodeURIComponent(telescope.name),
//   }));
// }
