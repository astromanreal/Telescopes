import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Telescope, CheckCircle, Clock, XCircle } from "lucide-react"

export default function LoadingExplore() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-accent flex items-center">
        <Telescope className="mr-3 h-10 w-10" /> Explore Space Telescopes
      </h1>

      {/* Filters Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4 bg-card/50 rounded-lg border border-border">
         <div className="lg:col-span-6 space-y-2"> {/* Search spans full width */}
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2 lg:col-span-2"> {/* Target spans 2 columns */}
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Telescope Sections Skeleton */}
      {(['active', 'past', 'future'] as const).map(category => (
        <section key={category}>
          <h2 className="text-2xl font-semibold mb-4 capitalize flex items-center">
             {category === 'active' && <CheckCircle className="h-6 w-6 text-green-500" />}
             {category === 'past' && <XCircle className="h-6 w-6 text-red-500" />}
             {category === 'future' && <Clock className="h-6 w-6 text-blue-500" />}
            <span className="ml-2"><Skeleton className="h-6 w-32" /></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={`${category}-${i}`} className="flex flex-col">
                <CardHeader>
                  <Skeleton className="aspect-video w-full mb-4 rounded-t-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2 mt-1" />
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4">
                   <div className="flex gap-1">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-5 w-20 rounded-full" />
                    </div>
                   <Skeleton className="h-9 w-28 rounded-md" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
