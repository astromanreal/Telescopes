'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme'; // Updated import
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [currentThemeSetting, setTheme, resolvedTheme, mounted] = useTheme();

  const toggleTheme = () => {
    if (currentThemeSetting === 'light') {
      setTheme('dark');
    } else if (currentThemeSetting === 'dark') {
      setTheme('light');
    } else { // currentThemeSetting is 'system'
      // If system is active, toggle to the opposite of the current resolved theme
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled className="h-5 w-5">
        {/* Placeholder or a generic icon during SSR/initial mount */}
        <Sun className="h-5 w-5 scale-100 transition-all" /> 
        <span className="sr-only">Toggle theme (Loading)</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
      className="relative h-5 w-5 overflow-hidden"
    >
      <Sun
        className={cn(
          'absolute h-5 w-5 scale-100 transition-all duration-300 ease-in-out',
          resolvedTheme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        )}
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 scale-0 transition-all duration-300 ease-in-out',
          resolvedTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
