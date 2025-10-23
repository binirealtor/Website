import React from 'react';

export type Page = 'Home' | 'About' | 'Practice Areas' | 'Blog' | 'Success Stories' | 'Contact' | 'Quiz';
export type Language = 'en' | 'am';

export interface NavLink {
  key: Page;
  label: string;
}

export interface Service {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  description: string;
}

export interface SuccessStory {
  practiceArea: string;
  practiceAreaKey: Page;
  challenge: string;
  resolution: string;
  client: {
    name: string;
    location: string;
  };
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}