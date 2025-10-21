'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/coreos/Card';

// Mock Data
const mockAppCategories = [
  {
    id: 1,
    name: 'Productivity',
    count: 12,
    apps: [
      { id: 1, name: 'Notes', icon: '📝' },
      { id: 2, name: 'Tasks', icon: '✅' },
      { id: 3, name: 'Calendar', icon: '📅' },
      { id: 4, name: 'Mail', icon: '📧' },
      { id: 5, name: 'Files', icon: '📁' },
      { id: 6, name: 'Contacts', icon: '👤' },
      { id: 7, name: 'Reminders', icon: '🔔' },
      { id: 8, name: 'Scanner', icon: '📷' },
      { id: 9, name: 'Calculator', icon: '🔢' },
      { id: 10, name: 'Voice Memos', icon: '🎙️' },
      { id: 11, name: 'Clock', icon: '⏰' },
      { id: 12, name: 'Weather', icon: '☀️' },
    ]
  },
  {
    id: 2,
    name: 'Entertainment',
    count: 8,
    apps: [
      { id: 13, name: 'Music', icon: '🎵' },
      { id: 14, name: 'Videos', icon: '🎬' },
      { id: 15, name: 'Games', icon: '🎮' },
      { id: 16, name: 'Podcasts', icon: '🎧' },
      { id: 17, name: 'Books', icon: '📚' },
      { id: 18, name: 'TV', icon: '📺' },
      { id: 19, name: 'Radio', icon: '📻' },
      { id: 20, name: 'Comics', icon: '📖' },
    ]
  },
  {
    id: 3,
    name: 'Utilities',
    count: 15,
    apps: [
      { id: 21, name: 'Settings', icon: '⚙️' },
      { id: 22, name: 'Camera', icon: '📷' },
      { id: 23, name: 'Photos', icon: '🖼️' },
      { id: 24, name: 'Maps', icon: '🗺️' },
      { id: 25, name: 'Compass', icon: '🧭' },
      { id: 26, name: 'Flashlight', icon: '🔦' },
      { id: 27, name: 'Wallet', icon: '💳' },
      { id: 28, name: 'Health', icon: '❤️' },
      { id: 29, name: 'Fitness', icon: '💪' },
      { id: 30, name: 'Translate', icon: '🌐' },
      { id: 31, name: 'Stocks', icon: '📈' },
      { id: 32, name: 'News', icon: '📰' },
      { id: 33, name: 'Tips', icon: '💡' },
      { id: 34, name: 'Find My', icon: '📍' },
      { id: 35, name: 'Shortcuts', icon: '⚡' },
    ]
  },
];

const mockSearchResults = [
  { id: 1, name: 'Photos', icon: '📷', category: 'Utilities' },
  { id: 2, name: 'PhotoShop Express', icon: '🎨', category: 'Entertainment' },
  { id: 3, name: 'Photo Collage Maker', icon: '🖼️', category: 'Utilities' },
];

export default function AppLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredCategories = searchQuery
    ? mockAppCategories.map(cat => ({
        ...cat,
        apps: cat.apps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.apps.length > 0)
    : mockAppCategories;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center">
          <Link href="/home-screen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Home Screen
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Marketing
            </Link>
            <Link href="/control-center" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Control Center →
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="absolute inset-0 gradient-hero opacity-30 blur-[120px]" />

            {/* Phone Frame */}
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-[3.5rem] p-1 shadow-2xl">
              <div className="bg-background rounded-[3.3rem] overflow-hidden">
                {/* Screen Content */}
                <div className="aspect-[9/19.5] bg-gradient-to-br from-background to-card/50 p-6 relative overflow-y-auto">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-muted-foreground">
                    <span className="font-semibold">
                      {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </span>
                    <div className="flex gap-2 items-center">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋 73%</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-4">App Library</h2>

                    {/* Search Bar */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search apps..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-card/60 backdrop-blur-sm rounded-2xl px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
                    </div>
                  </div>

                  {/* App Categories */}
                  <div className="space-y-6 pb-20">
                    {filteredCategories.map((category) => (
                      <div key={category.id}>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-lg font-semibold">{category.name}</h3>
                          <span className="text-xs text-muted-foreground bg-card px-3 py-1 rounded-full">
                            {category.apps.length} apps
                          </span>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-4">
                          <div className="grid grid-cols-4 gap-3">
                            {category.apps.slice(0, 8).map((app) => (
                              <button
                                key={app.id}
                                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                              >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl shadow-md">
                                  {app.icon}
                                </div>
                                <span className="text-[10px] text-center line-clamp-1">{app.name}</span>
                              </button>
                            ))}
                          </div>

                          {category.apps.length > 8 && (
                            <button className="w-full mt-3 text-xs text-primary hover:text-secondary transition-colors">
                              View all {category.apps.length} apps →
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Search Results Indicator */}
                  {searchQuery && filteredCategories.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No apps found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description Panel */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                CoreOS<br />
                <span className="gradient-text">App Library</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Intelligent organization and powerful search make finding applications effortless.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📁</span>
                  <h3 className="text-xl font-semibold">Smart Categories</h3>
                </div>
                <p className="text-muted-foreground">
                  Apps automatically organized into Productivity ({mockAppCategories[0].count} apps),
                  Entertainment ({mockAppCategories[1].count} apps), and
                  Utilities ({mockAppCategories[2].count} apps).
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔍</span>
                  <h3 className="text-xl font-semibold">Instant Search</h3>
                </div>
                <p className="text-muted-foreground">
                  Find any app instantly with intelligent search. Type "photo" to see Photos, PhotoShop Express, and Photo Collage Maker.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-xl font-semibold">Quick Launch</h3>
                </div>
                <p className="text-muted-foreground">
                  One tap to open any application. Beautiful icons with smooth animations make every interaction feel premium.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/control-center" className="flex-1">
                <button className="w-full gradient-primary text-white px-6 py-4 rounded-[1.5rem] font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
                  Explore Control Center →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
