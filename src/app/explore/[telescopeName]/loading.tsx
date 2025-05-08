import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Globe, Tag, Target, CheckCircle } from 'lucide-react'; // Import icons for structure

export default function LoadingTelescopeDetail() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-pulse">
      <article className="space-y-8">
        {/* Back Button Skeleton */}
        <Skeleton className="h-9 w-32 rounded-md" />

        {/* Telescope Name Skeleton */}
        <Skeleton className="h-10 md:h-12 w-3/4" />

        {/* Main Image Skeleton */}
        <Skeleton className="relative w-full aspect-[16/9] rounded-lg shadow-lg" />

        {/* Metadata Card Skeleton */}
        <Card className="bg-card/80">
          <CardContent className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                <div className="space-y-1.5">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Description Section Skeleton */}
        <section className="space-y-4">
          <Skeleton className="h-7 w-1/3" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </section>

        <Skeleton className="h-px w-full" />

        {/* Key Findings Section Skeleton */}
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
      </article>
    </div>
  );
}
