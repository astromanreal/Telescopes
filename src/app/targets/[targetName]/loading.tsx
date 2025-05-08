// src/app/targets/[targetName]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Telescope } from 'lucide-react';

export default function LoadingTargetDetail() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-pulse">
      <article className="space-y-8">
        {/* Back Button Skeleton */}
        <Skeleton className="h-9 w-36 rounded-md mb-6" />

        {/* Target Name and Icon Skeleton */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
          <Skeleton className="h-10 md:h-12 w-3/4" />
        </div>

        {/* Main Image Skeleton */}
        <Skeleton className="relative w-full aspect-[16/9] rounded-lg shadow-lg" />

        {/* Description Section Skeleton */}
        <section className="space-y-4">
          <Skeleton className="h-7 w-1/3" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </section>

        <Skeleton className="h-px w-full" />

        {/* Key Discoveries Section Skeleton */}
        <section className="space-y-4">
           <Skeleton className="h-7 w-1/2" />
           <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-md">
                <Skeleton className="h-5 w-5 rounded-full mt-1 flex-shrink-0" />
                <Skeleton className="h-5 w-full" />
              </div>
            ))}
           </div>
        </section>

         <Skeleton className="h-px w-full" />

         {/* Relevant Telescopes Section Skeleton */}
        <section className="space-y-4">
           <Skeleton className="h-7 w-1/3" />
            <div className="flex flex-wrap gap-3">
              {[...Array(4)].map((_, i) => (
                 <Skeleton key={i} className="h-9 w-32 rounded-md" />
              ))}
            </div>
        </section>
      </article>
    </div>
  );
}
