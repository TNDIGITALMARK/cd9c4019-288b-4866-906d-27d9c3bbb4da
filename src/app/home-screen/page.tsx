'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/coreos/Card';
import { TabNavigation } from '@/components/coreos/Navigation';

// Mock Data
const mockWeather = { temp: 72, condition: 'Sunny' };
const mockCalendar = { event: 'Team Meeting', time: '2:00 PM' };
const mockMessage = { preview: 'Hey, running 5 minutes late' };
const mockMusic = { nowPlaying: 'Midnight City' };

const apps = [
  { id: 1, name: 'Phone', icon: '📱', color: 'from-green-400 to-green-600' },
  { id: 2, name: 'Messages', icon: '💬', color: 'from-blue-400 to-blue-600' },
  { id: 3, name: 'Camera', icon: '📷', color: 'from-purple-400 to-purple-600' },
  { id: 4, name: 'Music', icon: '🎵', color: 'from-pink-400 to-pink-600' },
  { id: 5, name: 'Mail', icon: '📧', color: 'from-cyan-400 to-cyan-600' },
  { id: 6, name: 'Safari', icon: '🌐', color: 'from-blue-400 to-blue-500' },
  { id: 7, name: 'Calendar', icon: '📅', color: 'from-red-400 to-red-600' },
  { id: 8, name: 'Settings', icon: '⚙️', color: 'from-gray-400 to-gray-600' },
  { id: 9, name: 'Games', icon: '🎮', color: 'from-orange-400 to-orange-600' },
  { id: 10, name: 'Books', icon: '📚', color: 'from-amber-400 to-amber-600' },
  { id: 11, name: 'Art', icon: '🎨', color: 'from-pink-400 to-pink-600' },
  { id: 12, name: 'Work', icon: '💼', color: 'from-indigo-400 to-indigo-600' },
];

export default function HomeScreen() {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Marketing
          </Link>
          <div className="flex gap-4">
            <Link href="/app-library" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              App Library →
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
                <div className="aspect-[9/19.5] bg-gradient-to-br from-background to-card/50 p-8 relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-8 text-xs text-muted-foreground">
                    <span className="font-semibold">
                      {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </span>
                    <div className="flex gap-2 items-center">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋 73%</span>
                    </div>
                  </div>

                  {/* Weather Widget */}
                  <Card className="mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-4xl font-bold">{mockWeather.temp}°</p>
                        <p className="text-sm text-muted-foreground">{mockWeather.condition}</p>
                      </div>
                      <span className="text-5xl">☀️</span>
                    </div>
                  </Card>

                  {/* Quick Access Tiles */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Card className="bg-card/60 backdrop-blur-sm p-4 hover:scale-105 transition-transform cursor-pointer">
                      <p className="text-xs text-muted-foreground mb-1">📅 CALENDAR</p>
                      <p className="text-sm font-semibold">{mockCalendar.event}</p>
                      <p className="text-xs text-muted-foreground">{mockCalendar.time}</p>
                    </Card>

                    <Card className="bg-card/60 backdrop-blur-sm p-4 hover:scale-105 transition-transform cursor-pointer">
                      <p className="text-xs text-muted-foreground mb-1">💬 MESSAGE</p>
                      <p className="text-sm font-semibold line-clamp-2">{mockMessage.preview}</p>
                    </Card>
                  </div>

                  {/* Music Player */}
                  <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center text-2xl">
                        🎵
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">NOW PLAYING</p>
                        <p className="text-sm font-semibold">{mockMusic.nowPlaying}</p>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center hover:bg-primary/50 transition-colors">
                        ▶️
                      </button>
                    </div>
                  </Card>

                  {/* App Grid */}
                  <div className="grid grid-cols-4 gap-3">
                    {apps.slice(0, 8).map((app) => (
                      <button
                        key={app.id}
                        className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
                      >
                        {app.icon}
                      </button>
                    ))}
                  </div>

                  {/* Dock */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-3 shadow-lg border border-border/50">
                      <div className="grid grid-cols-4 gap-3">
                        {['📞', '💬', '🌐', '🎵'].map((icon, i) => (
                          <button
                            key={i}
                            className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform"
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Panel */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                CoreOS<br />
                <span className="gradient-text">Home Screen</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the clean, intuitive interface that puts essential functionality at your fingertips.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">☀️</span>
                  <h3 className="text-xl font-semibold">Weather Widget</h3>
                </div>
                <p className="text-muted-foreground">
                  Real-time weather updates with beautiful animations. Currently showing: {mockWeather.temp}° and {mockWeather.condition}.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-xl font-semibold">Quick Access Tiles</h3>
                </div>
                <p className="text-muted-foreground">
                  Calendar events, messages, and more at a glance. Your most important information, instantly accessible.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎵</span>
                  <h3 className="text-xl font-semibold">Music Player</h3>
                </div>
                <p className="text-muted-foreground">
                  Control your music without leaving the home screen. Now playing: {mockMusic.nowPlaying}.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/app-library" className="flex-1">
                <button className="w-full gradient-primary text-white px-6 py-4 rounded-[1.5rem] font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
                  Explore App Library →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
