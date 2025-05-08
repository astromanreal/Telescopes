

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Lightbulb, Orbit, Radio, Quote, BookOpen, Telescope, Star, Sparkles, Brain, HeartHandshake, ArrowRight, Eye } from 'lucide-react'; // Added Eye
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TelescopeOfTheDayCard from '@/components/TelescopeOfTheDayCard'; // Import the new component
import { telescopeData } from '@/data/telescopes'; // Import telescope data

// Animated Telescope Icon component
const TelescopeIllustration = () => (
  <div className="w-full h-64 bg-secondary/50 rounded-lg flex items-center justify-center text-primary-foreground nebula-gradient overflow-hidden perspective-1000">
    <Telescope className="w-24 h-24 md:w-32 md:h-32 text-accent/80 animate-float drop-shadow-lg transform-gpu" style={{ transform: 'translateZ(50px)' }}/>
    {/* Adding subtle background stars */}
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--accent)) 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
  </div>
);

// New Hero Section Component
const NewHeroSection = () => (
  <section className="relative py-20 md:py-28 px-4 rounded-lg overflow-hidden bg-gradient-to-br from-background via-card/50 to-secondary/70 border border-border shadow-lg fade-in">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M55 17.5l-3.5-3.5L35 30.5 3.5 9 0 12.5 35 44 60 12.5 58.5 9 55 17.5z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

    <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground animate-in slide-in-from-bottom-10 duration-700">
          Unlock the Cosmos
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0 animate-in slide-in-from-bottom-12 duration-700 delay-100">
          Discover the universe through the lenses of groundbreaking space telescopes. Explore their missions, technologies, and breathtaking discoveries.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-in zoom-in-50 duration-700 delay-200 shadow-lg hover:shadow-accent/40 transition-shadow">
          <Link href="/explore">
            <Eye className="mr-2 h-5 w-5" /> View Telescopes <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 w-full max-w-md md:max-w-none perspective-1000 animate-in zoom-in-75 duration-700 delay-150">
        <div className="relative aspect-square rounded-full bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/30 shadow-2xl transform-gpu transition-transform duration-500 hover:scale-105"
             style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-15deg) rotateX(5deg)' }}>
          <Telescope className="absolute inset-0 m-auto w-2/3 h-2/3 text-accent drop-shadow-xl" style={{ transform: 'translateZ(60px)' }} />
          {/* Orbiting elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s', transform: 'translateZ(20px)' }}>
            <Star className="absolute top-1/4 left-0 text-yellow-400/70 w-4 h-4" />
            <Sparkles className="absolute bottom-1/4 right-0 text-pink-400/70 w-5 h-5" />
            <Orbit className="absolute top-0 right-1/4 text-blue-400/50 w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="space-y-12">
      {/* New Hero Section */}
      <NewHeroSection />

      {/* Telescope of the Day Section */}
       <section className="fade-in" style={{ animationDelay: '0.1s' }}>
         <h2 className="text-3xl font-semibold mb-6 text-accent flex items-center">
           <Star className="mr-3 h-7 w-7 animate-pulse" /> Telescope of the Day
         </h2>
         {/* The selection logic is handled within the client component to avoid hydration issues */}
         <TelescopeOfTheDayCard allTelescopes={telescopeData} />
       </section>

       <Separator />

       {/* Why Space Telescopes Matter Section */}
       <section className="fade-in" style={{ animationDelay: '0.15s' }}>
        <h2 className="text-3xl font-semibold mb-6 text-accent flex items-center">
          <Sparkles className="mr-3 h-7 w-7" /> Why Space Telescopes Matter
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground/90">
          <Card className="bg-card/80 backdrop-blur-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                <Brain className="mr-2 h-5 w-5" /> Unlocking Cosmic Secrets
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Space telescopes peer deeper into the cosmos than ever possible from Earth. They help us understand the universe's origins (like the Big Bang via the CMB), discover distant galaxies, witness the birth and death of stars, and explore exotic objects like black holes and nebulae.
              </p>
              <Image
                src="https://drive.google.com/uc?export=view&id=1atCucQlUsTnm6iqaNZRXMn1IRDJLXz1c"
                alt="Pillars of Creation Nebula"
                width={400}
                height={200}
                className="mt-4 rounded-md object-cover w-full"
                data-ai-hint="pillars creation nebula"
              />
            </CardContent>
          </Card>
          <Card className="bg-card/80 backdrop-blur-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                <HeartHandshake className="mr-2 h-5 w-5" /> Contribution to Humanity
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Beyond fundamental science, space telescope missions drive technological innovation (optics, sensors, data processing) and inspire future generations. They provide perspective on our place in the universe and unite humanity in the quest for knowledge.
              </p>
               <Image
                src="https://i.pinimg.com/736x/4f/48/4c/4f484c933f7d26761084183699e2ec61.jpg"
                alt="Earthrise from space"
                width={400}
                height={200}
                className="mt-4 rounded-md object-cover w-full"
                data-ai-hint="earthrise space"
              />
            </CardContent>
          </Card>
           <Card className="bg-card/80 backdrop-blur-sm flex flex-col md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                 <Telescope className="mr-2 h-5 w-5" /> Search for New Worlds
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Missions like Kepler, TESS, and JWST are revolutionizing exoplanet science. They find planets outside our solar system, measure their atmospheres, and search for potentially habitable worlds, bringing us closer to answering: "Are we alone?"
              </p>
               <Image
                src="https://i.pinimg.com/736x/34/b3/c6/34b3c6b26f099e5ab4e6ca2d7f20acbb.jpg"
                alt="Artist conception of an exoplanet"
                width={400}
                height={200}
                className="mt-4 rounded-md object-cover w-full"
                data-ai-hint="exoplanet discovery cosmos"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Introduction */}
      <section className="fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-3xl font-semibold mb-6 text-accent flex items-center">
          <BookOpen className="mr-3 h-7 w-7" /> What are Space Telescopes?
        </h2>
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          Space telescopes are powerful instruments launched into orbit around the Earth or positioned at specific points in space. Unlike ground-based telescopes, they are free from the distortions and absorptions caused by Earth's atmosphere. This allows them to capture clearer images and detect wavelengths of light (like infrared, ultraviolet, X-rays, and gamma rays) that are blocked by our atmosphere.
        </p>
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <p className="italic text-foreground/80">
              They are humanity's eyes in the cosmos, pushing the boundaries of our knowledge and revealing the universe's hidden wonders.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* How They Work */}
      <section className="grid md:grid-cols-2 gap-8 items-start fade-in" style={{ animationDelay: '0.4s' }}>
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-accent flex items-center">
            <Lightbulb className="mr-3 h-7 w-7" /> How They Work
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              Space telescopes collect electromagnetic radiation (light, radio waves, etc.) from distant celestial objects. Key components typically include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Mirrors/Lenses:</strong> To gather and focus light. Larger mirrors collect more light, allowing observation of fainter, more distant objects.</li>
              <li><strong>Detectors/Sensors:</strong> Electronic devices (like CCDs) that convert the focused light into digital data.</li>
              <li><strong>Spectrographs:</strong> Instruments that split light into its constituent wavelengths, revealing information about an object's composition, temperature, and motion.</li>
              <li><strong>Pointing Systems:</strong> Gyroscopes and reaction wheels to precisely aim the telescope and keep it stable.</li>
              <li><strong>Power Systems:</strong> Often solar panels, to provide electricity for the instruments and systems.</li>
              <li><strong>Communication Systems:</strong> To transmit data back to Earth.</li>
            </ul>
          </div>
        </div>
        <TelescopeIllustration /> {/* Use the animated illustration component */}
      </section>

      <Separator />

      {/* Why Space? */}
       <section className="grid md:grid-cols-3 gap-6 fade-in" style={{ animationDelay: '0.6s' }}>
         <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
           <CardHeader>
             <CardTitle className="flex items-center text-accent">
               <Radio className="mr-2 h-5 w-5" /> Electromagnetic Spectrum
             </CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-foreground/90">
               Earth's atmosphere blocks most UV, X-ray, gamma-ray, and some infrared light. Space telescopes provide access to the full spectrum, revealing phenomena invisible from the ground.
             </p>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/EM_Spectrum_Properties_edit.svg/500px-EM_Spectrum_Properties_edit.svg.png"
                alt="Electromagnetic Spectrum illustration"
                data-ai-hint="electromagnetic spectrum diagram"
                width={400}
                height={200}
                className="mt-4 rounded-md object-cover w-full"
              />
           </CardContent>
         </Card>
          <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
           <CardHeader>
             <CardTitle className="flex items-center text-accent">
               <Orbit className="mr-2 h-5 w-5" /> Telescope Orbits
             </CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-foreground/90">
               Telescopes operate in various orbits: Low Earth Orbit (like Hubble), geosynchronous orbit, or stable Lagrange points (like JWST), balancing factors like accessibility, thermal stability, and sky coverage.
             </p>
              <Image
                 src="https://science.nasa.gov/wp-content/uploads/2023/06/webb-lagrange-points-jpg.webp"
                alt="Telescope Orbits diagram"
                data-ai-hint="lagrange points orbit diagram"
                width={400}
                height={200}
                className="mt-4 rounded-md object-cover w-full"
              />
           </CardContent>
         </Card>
          <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
           <CardHeader>
             <CardTitle className="flex items-center text-accent">
                <Quote className="mr-2 h-5 w-5 transform scale-x-[-1]" /> Inspirational Achievements
             </CardTitle>
           </CardHeader>
           <CardContent>
             <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Hubble Deep Field: Revealed thousands of distant galaxies.</li>
                <li>JWST's First Images: Unprecedented clarity of nebulae and early galaxies.</li>
                <li>Kepler & TESS: Discovered thousands of exoplanets.</li>
             </ul>
              <Image
                src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL25hc2EtYWNoaWV2ZW1lbnRzLXVwZGF0ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ=="
                alt="NASA achievements montage"
                 data-ai-hint="nasa achievements space exploration"
                width={400}
                height={200}
                className="mt-4 rounded-md object-cover w-full"
              />
           </CardContent>
         </Card>
      </section>


      <Separator />

      {/* Famous Quotes */}
      <section className="text-center fade-in" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-3xl font-semibold mb-6 text-accent flex items-center justify-center">
          <Quote className="mr-3 h-7 w-7 transform scale-x-[-1]" /> Voices of Exploration
        </h2>
        <div className="space-y-6">
          <blockquote className="text-xl italic text-foreground/80 border-l-4 border-accent pl-4 max-w-3xl mx-auto">
            "The universe is under no obligation to make sense to you."
            <footer className="text-sm not-italic text-muted-foreground mt-2 block">- Neil deGrasse Tyson</footer>
          </blockquote>
          <blockquote className="text-xl italic text-foreground/80 border-l-4 border-accent pl-4 max-w-3xl mx-auto">
            "Somewhere, something incredible is waiting to be known."
            <footer className="text-sm not-italic text-muted-foreground mt-2 block">- Carl Sagan</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

