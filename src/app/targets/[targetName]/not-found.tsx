// src/app/targets/[targetName]/not-found.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Target, Frown, ArrowLeft } from 'lucide-react';

export default function TargetNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
      <Frown className="h-16 w-16 text-muted-foreground mb-4" />
      <h1 className="text-3xl font-bold text-foreground mb-2">Cosmic Target Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Sorry, we couldn't find the cosmic target you were looking for. It might be beyond our current observational range!
      </p>
      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/targets">
             <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Targets
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
