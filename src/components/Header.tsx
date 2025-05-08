'use client'
import Link from 'next/link';
import { Telescope, Home, BrainCircuit, Mail, Settings, MoreHorizontal, Crosshair } from 'lucide-react'; // Import icons, added Crosshair
import ThemeToggle from './ThemeToggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Left side: Logo and Title */}
        <Link href="/" className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2a7 7 0 1 0 7 7"/><path d="M12 2v2"/><path d="M12 12a7 7 0 1 1 7 7"/><path d="M12 12v-2"/><path d="m16.13 3.87-.9.9a5 5 0 1 0-6.47 6.47l.9.9"/><path d="m7.87 20.13.9-.9a5 5 0 1 0 6.47-6.47l-.9-.9"/></svg>
          <span className="font-bold text-foreground">Cosmic Lenses</span>
        </Link>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-accent">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link href="/explore" className="flex items-center gap-1 transition-colors hover:text-accent">
            <Telescope className="h-4 w-4" />
            Explore
          </Link>
           <Link href="/targets" className="flex items-center gap-1 transition-colors hover:text-accent"> {/* Added Targets link */}
            <Crosshair className="h-4 w-4" />
            Targets
          </Link>
           <Link href="/ai-qa" className="flex items-center gap-1 transition-colors hover:text-accent">
            <BrainCircuit className="h-4 w-4" />
            Ask AI
          </Link>
        </nav>

        {/* Right side: Icon Navigation */}
        <div className="flex items-center gap-4">

          {/* Three-dot menu for small screens */}
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <MoreHorizontal className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                <Link href="/explore" className="flex items-center gap-2 w-full">
                  <Telescope className="h-4 w-4" />
                  Explore
                </Link>
              </DropdownMenuItem>
               <DropdownMenuItem> {/* Added Targets to mobile menu */}
                <Link href="/targets" className="flex items-center gap-2 w-full">
                  <Crosshair className="h-4 w-4" />
                  Targets
                </Link>
              </DropdownMenuItem>
               <DropdownMenuItem>
                  <Link href="/ai-qa" className="flex items-center gap-2 w-full" >
                    <BrainCircuit className="h-4 w-4" />
                    Ask AI
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="flex items-center gap-2 w-full" >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <Link href="/contact" className="flex items-center gap-2 w-full" >
                    <Mail className="h-4 w-4" />
                    Contact
                  </Link>
                </DropdownMenuItem>
              <DropdownMenuItem>
                 <ThemeToggle />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hide on small screen */}
          <div className="hidden md:flex gap-4">
             <Link href="/contact" className="flex items-center gap-1 transition-colors hover:text-accent" aria-label="Contact">
                <Mail className="h-5 w-5" />
             </Link>
             <Link href="/settings" className="flex items-center gap-1 transition-colors hover:text-accent" aria-label="Settings">
                <Settings className="h-5 w-5" />
            </Link>
             <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
