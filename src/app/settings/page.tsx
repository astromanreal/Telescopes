'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Settings, Sun, Moon, Laptop, Construction } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function SettingsPage() {
  const [theme, setTheme, resolvedTheme, mounted] = useTheme();

  if (!mounted) {
    // You can show a loading state or a simplified version until the client-side hook is ready
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-accent flex items-center">
              <Settings className="mr-3 h-7 w-7" /> Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p>Loading settings...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-accent flex items-center">
            <Settings className="mr-3 h-7 w-7" /> Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Theme Preference</h3>
            <RadioGroup
              value={theme}
              onValueChange={(value: string) => setTheme(value as 'light' | 'dark' | 'system')}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="light" id="theme-light" />
                <Label htmlFor="theme-light" className="flex items-center gap-2 cursor-pointer w-full">
                  <Sun className="h-5 w-5 text-yellow-500" /> Light Mode
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="dark" id="theme-dark" />
                <Label htmlFor="theme-dark" className="flex items-center gap-2 cursor-pointer w-full">
                  <Moon className="h-5 w-5 text-blue-500" /> Dark Mode
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="system" id="theme-system" />
                <Label htmlFor="theme-system" className="flex items-center gap-2 cursor-pointer w-full">
                  <Laptop className="h-5 w-5 text-gray-500" /> System Preference
                </Label>
              </div>
            </RadioGroup>
            <p className="text-sm text-muted-foreground mt-3">
              Currently active theme: <span className="font-semibold">{resolvedTheme === 'light' ? 'Light' : 'Dark'}</span>
            </p>
          </div>

          <div className="text-center border-t border-border pt-8 mt-8">
            <Construction className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-md text-foreground/80">
              More settings and customizations will be available here soon.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
