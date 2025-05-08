// src/hooks/useTheme.ts
'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

export function useTheme(): [
  Theme,
  (theme: Theme) => void,
  ResolvedTheme,
  boolean,
] {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeStateInternal] = useState<Theme>('system'); // Default for SSR, will be updated on client
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light'); // Default for SSR

  const applyTheme = useCallback((themeToApply: Theme) => {
    let currentResolvedTheme: ResolvedTheme;
    if (themeToApply === 'light') {
      document.documentElement.classList.remove('dark');
      currentResolvedTheme = 'light';
    } else if (themeToApply === 'dark') {
      document.documentElement.classList.add('dark');
      currentResolvedTheme = 'dark';
    } else {
      // system
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        currentResolvedTheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        currentResolvedTheme = 'light';
      }
    }
    setResolvedTheme(currentResolvedTheme);
  }, []);

  // Effect to load stored theme and set initial resolved theme on client mount
  useEffect(() => {
    setMounted(true);
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setThemeStateInternal(storedTheme);
    // applyTheme will be called by the next effect due to setThemeStateInternal
  }, []);

  // Effect to apply and save theme when `theme` state changes (from user interaction or initial load)
  useEffect(() => {
    if (mounted) { // Ensure this runs only after client-side mount and initial theme load
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, applyTheme, mounted]);

  // Listener for system theme changes
  useEffect(() => {
    if (!mounted) return; // Only run on client after mount

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        // Re-apply theme if 'system' is selected and OS theme changes
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeStateInternal(newTheme);
  };

  return [theme, setTheme, resolvedTheme, mounted];
}
