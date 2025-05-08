'use client'; // Keep this if you need client-side interactivity, remove if fully static

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Telescope, Frown } from 'lucide-react';

export default function TelescopeNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
      <Frown className="h-16 w-16 text-muted-foreground mb-4" />
      <h1 className="text-3xl font-bold text-foreground mb-2">Telescope Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Sorry, we couldn't find the telescope you were looking for. It might have been moved, renamed, or doesn't exist.
      </p>
      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/explore">
             <Telescope className="mr-2 h-4 w-4" /> Go Back to Explore
          </Link>
        </Button>
         <Button asChild>
           <Link href="/">
             Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
