// telescope-search.tsx
'use client'; // This page uses client-side state for filtering

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button'; // Import Button
import { Separator } from '@/components/ui/separator'; // Import Separator
import { Telescope, Calendar, Globe, Tag, Rocket, Target, CheckCircle, XCircle, Clock, ArrowRight, Building, MapPin, Crosshair } from 'lucide-react'; // Icons
import { telescopeData, TelescopeData } from '@/data/telescopes'; // Import data

// Get unique values for filters
const uniqueTypes = Array.from(new Set(telescopeData.map(t => t.type))).sort();
const uniqueStages = Array.from(new Set(telescopeData.map(t => t.stage))).sort();
const uniqueAgencies = Array.from(new Set(telescopeData.map(t => t.agency))).sort();
const uniqueCountries = Array.from(new Set(telescopeData.map(t => t.country))).sort();
const uniqueTargets = Array.from(new Set(telescopeData.map(t => t.target))).sort();
// const uniqueLaunchYears = Array.from(new Set(telescopeData.map(t => t.launchYear.toString()))).sort((a, b) => parseInt(b) - parseInt(a)); // Keep commented out as per previous state

const getStageIcon = (stage: string) => {
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


export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStage, setFilterStage] = useState('all');
  const [filterAgency, setFilterAgency] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');
  const [filterTarget, setFilterTarget] = useState('all');
  // const [filterLaunchYear, setFilterLaunchYear] = useState('all'); // Keep commented out

  const filteredTelescopes = useMemo(() => {
    return telescopeData.filter(telescope => {
      const nameMatch = telescope.name.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatch = filterType === 'all' || telescope.type === filterType;
      const stageMatch = filterStage === 'all' || telescope.stage === filterStage;
      const agencyMatch = filterAgency === 'all' || telescope.agency === filterAgency;
      const countryMatch = filterCountry === 'all' || telescope.country === filterCountry;
      const targetMatch = filterTarget === 'all' || telescope.target === filterTarget;
      // const yearMatch = filterLaunchYear === 'all' || telescope.launchYear.toString() === filterLaunchYear; // Keep commented out

      return nameMatch && typeMatch && stageMatch && agencyMatch && countryMatch && targetMatch; // && yearMatch;
    });
  }, [searchTerm, filterType, filterStage, filterAgency, filterCountry, filterTarget]); // Added new filters to dependency array

   const categorizedTelescopes = useMemo(() => {
    const active = filteredTelescopes.filter(t => t.stage === 'Active');
    const past = filteredTelescopes.filter(t => t.stage === 'Past');
    const future = filteredTelescopes.filter(t => t.stage === 'Future');
    return { active, past, future };
  }, [filteredTelescopes]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-accent flex items-center">
        <Telescope className="mr-3 h-10 w-10" /> Explore Space Telescopes
      </h1>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4 bg-card/50 rounded-lg border border-border">
        <div className="lg:col-span-6"> {/* Search spans full width on smaller screens, or available columns */}
          <Label htmlFor="search">Search by Name</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search telescopes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="filter-type" className="flex items-center"><Tag className="mr-1 h-4 w-4" />Type</Label>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger id="filter-type" className="w-full">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
         <div>
          <Label htmlFor="filter-stage" className="flex items-center"><Rocket className="mr-1 h-4 w-4" />Stage</Label>
          <Select value={filterStage} onValueChange={setFilterStage}>
            <SelectTrigger id="filter-stage" className="w-full">
              <SelectValue placeholder="Filter by Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              {uniqueStages.map(stage => (
                <SelectItem key={stage} value={stage}>{stage}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="filter-agency" className="flex items-center"><Building className="mr-1 h-4 w-4" />Agency</Label>
          <Select value={filterAgency} onValueChange={setFilterAgency}>
            <SelectTrigger id="filter-agency" className="w-full">
              <SelectValue placeholder="Filter by Agency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Agencies</SelectItem>
              {uniqueAgencies.map(agency => (
                <SelectItem key={agency} value={agency}>{agency}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="filter-country" className="flex items-center"><MapPin className="mr-1 h-4 w-4" />Country</Label>
          <Select value={filterCountry} onValueChange={setFilterCountry}>
            <SelectTrigger id="filter-country" className="w-full">
              <SelectValue placeholder="Filter by Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              {uniqueCountries.map(country => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="lg:col-span-2"> {/* Target filter spans 2 columns on large screens */}
          <Label htmlFor="filter-target" className="flex items-center"><Crosshair className="mr-1 h-4 w-4" />Target</Label>
           <Select value={filterTarget} onValueChange={setFilterTarget}>
            <SelectTrigger id="filter-target" className="w-full">
              <SelectValue placeholder="Filter by Target" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="all">All Targets</SelectItem>
              {uniqueTargets.map(target => (
                <SelectItem key={target} value={target}>{target}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Launch Year filter remains commented out */}
        {/*
        <div>
          <Label htmlFor="filter-year">Launch Year</Label>
           <Select value={filterLaunchYear} onValueChange={setFilterLaunchYear}>
            <SelectTrigger id="filter-year" className="w-full">
              <SelectValue placeholder="Filter by Year" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="all">All Years</SelectItem>
              {uniqueLaunchYears.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
         */}
      </div>

      {/* Telescope Sections */}
      {(['active', 'past', 'future'] as const).map(category => (
        categorizedTelescopes[category].length > 0 && (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-4 capitalize flex items-center">
              {getStageIcon(category.charAt(0).toUpperCase() + category.slice(1))}
              <span className="ml-2">
                {category} Telescopes ({categorizedTelescopes[category].length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorizedTelescopes[category].map((telescope) => (
                <Card key={telescope.name} className="flex flex-col bg-card/80 hover:shadow-accent/20 hover:shadow-lg transition-shadow duration-300 fade-in group"> {/* Added group class */}
                  <CardHeader>
                    <div className="aspect-video relative w-full mb-4 overflow-hidden rounded-t-lg"> {/* Added overflow-hidden */}
                      <Image
                        src={telescope.image || `https://picsum.photos/seed/${telescope.name}/400/225`} // Use placeholder if no image
                        alt={telescope.name}
                        fill // Use fill instead of layout="fill"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes attribute for optimization
                        style={{ objectFit: 'cover' }} // Use style object for objectFit
                        className="transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover
                         data-ai-hint={`${telescope.name} space telescope`}
                      />
                    </div>
                    <CardTitle className="text-xl">{telescope.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Tag className="h-4 w-4" /> {telescope.type}
                      <Separator orientation="vertical" className="h-4 mx-1" /> {/* Added margin */}
                      {getStageIcon(telescope.stage)} {telescope.stage}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-2 text-sm">
                    <p className="flex items-start gap-2"><Calendar className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Launch:</strong> {telescope.launchYear}</span></p>
                    <p className="flex items-start gap-2"><Globe className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Agency:</strong> {telescope.agency} ({telescope.country})</span></p>
                    <p className="flex items-start gap-2"><Target className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Target:</strong> {telescope.target}</span></p>
                    <p className="line-clamp-3">{telescope.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 pt-4 justify-between items-center"> {/* Adjusted footer layout */}
                    <div className="flex flex-wrap gap-1">
                        {telescope.keyFindings?.slice(0, 2).map((finding, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {finding}
                          </Badge>
                        ))}
                    </div>
                     <Button asChild variant="outline" size="sm" className="mt-2 sm:mt-0">
                      <Link href={`/explore/${encodeURIComponent(telescope.name)}`}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )
      ))}

        {filteredTelescopes.length === 0 && (
          <div className="text-center py-10 text-muted-foreground">
            <p className="text-lg">No telescopes match your current filters.</p>
          </div>
        )}
    </div>
  );
}
