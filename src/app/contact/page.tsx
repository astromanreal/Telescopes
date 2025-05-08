import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Twitter, Instagram, Github } from 'lucide-react'; // Using Mail icon instead of generic Email, Added Github
import Link from 'next/link';

export default function ContactPage() {
  const contacts = [
    {
      icon: Twitter,
      label: 'Twitter / X',
      value: 'https://x.com/Sathyamsarthak',
      isLink: true,
      ariaLabel: 'Visit Sarthak on Twitter',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'https://www.instagram.com/srishikharji/',
      isLink: true,
      ariaLabel: 'Visit Sarthak on Instagram',
    },
    {
      icon: Github, // Added Github icon
      label: 'GitHub',
      value: 'https://github.com/astromanreal',
      isLink: true,
      ariaLabel: 'Visit Sarthak on GitHub',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8102116569',
      isLink: false,
      href: 'tel:+918102116569',
      ariaLabel: 'Call Sarthak',
    },
    {
      icon: Mail, // Using Mail icon
      label: 'Email',
      value: 'Astroman6569@gmail.com',
      isLink: false,
      href: 'mailto:Astroman6569@gmail.com',
      ariaLabel: 'Email Sarthak',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-accent flex items-center">
            <Mail className="mr-3 h-7 w-7" /> Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-foreground/90">
            Feel free to reach out through any of the following channels:
          </p>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.label} className="flex items-center gap-4">
                <contact.icon className="h-6 w-6 text-accent flex-shrink-0" />
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  {contact.isLink ? (
                    <Link
                      href={contact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-accent hover:underline break-all"
                      aria-label={contact.ariaLabel}
                    >
                      {contact.value.replace(/^https?:\/\//, '')} {/* Display link without protocol */}
                    </Link>
                  ) : (
                     <a
                      href={contact.href}
                      className="font-semibold text-foreground hover:text-accent hover:underline break-all"
                      aria-label={contact.ariaLabel}
                    >
                      {contact.value}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
