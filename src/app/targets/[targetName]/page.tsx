// src/app/targets/[targetName]/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { targetData } from '@/data/targets';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Telescope } from 'lucide-react';

export default function TargetDetailPage() {
  const params = useParams();
  const targetNameParam = params?.targetName;

  // Decode the target name from the URL parameter
  const targetName = targetNameParam ? decodeURIComponent(targetNameParam as string) : undefined;

  // Find the target data based on the decoded name
  const target = targetName
    ? targetData.find(t => t.name.toLowerCase() === targetName.toLowerCase())
    : undefined;

  // If target data is not found, render the notFound page
  if (!target) {
    notFound(); // Use Next.js notFound helper
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <article className="space-y-8">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-6">
          <Link href="/targets">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Targets
          </Link>
        </Button>

        {/* Target Name and Icon */}
        <div className="flex items-center gap-4">
          <target.icon className="h-12 w-12 text-accent flex-shrink-0" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{target.name}</h1>
        </div>

        {/* Main Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg bg-muted">
          <Image
            src={target.imageUrl} // Use direct imageUrl
            alt={`Illustration of ${target.name}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
            data-ai-hint={target.aiHint}
            priority // Prioritize loading the main image
          />
        </div>

        {/* Description Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-accent">About {target.name}</h2>
          <p className="text-lg leading-relaxed text-foreground/90">{target.longDescription}</p>
        </section>

        <Separator />

        {/* Key Discoveries Section */}
        {target.keyDiscoveries && target.keyDiscoveries.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent">Key Discoveries</h2>
            <ul className="list-none space-y-3 pl-0">
              {target.keyDiscoveries.map((discovery, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-md">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{discovery}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Separator />

        {/* Relevant Telescopes Section */}
        {target.relevantTelescopes && target.relevantTelescopes.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent">Observed By</h2>
             <div className="flex flex-wrap gap-3">
              {target.relevantTelescopes.map((telescopeName) => (
                <Button key={telescopeName} variant="outline" size="sm" asChild>
                  {/* Link to telescope detail page if it exists */}
                   <Link href={`/explore/${encodeURIComponent(telescopeName)}`} className="flex items-center gap-1">
                      <Telescope className="h-4 w-4" />
                      {telescopeName}
                    </Link>
                 </Button>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}

// Optional: Generate static paths if needed
// export async function generateStaticParams() {
//   return targetData.map((target) => ({
//     targetName: encodeURIComponent(target.name),
//   }));
// }
