'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/coreos/Navigation';
import { Button } from '@/components/coreos/Button';
import { FeatureCard } from '@/components/coreos/Card';
import { PhoneMockup } from '@/components/coreos/PhoneMockup';

// Mock Data
const mockWeather = {
  temp: 72,
  condition: 'Sunny'
};

const mockCalendar = {
  event: 'Team Meeting',
  time: '2:00 PM'
};

const mockMessage = {
  preview: 'Hey, running 5 minutes late'
};

const mockMusic = {
  nowPlaying: 'Midnight City'
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                REIMAGINE EVERYTHING.<br />
                <span className="gradient-text">INTRODUCING iOS 20</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                A revolutionary mobile operating system focused on simplicity, speed, and user empowerment.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/home-screen">
                  <Button size="lg">
                    EXPLORE NOW
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="secondary" size="lg">
                    EXPLORE OUR SDK
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 gradient-hero opacity-50 blur-[100px] rounded-full" />
              <PhoneMockup>
                <div className="p-6 pt-8">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-8 text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-4 h-4">📶</div>
                      <div className="w-4 h-4">📡</div>
                      <div className="w-4 h-4">🔋</div>
                    </div>
                  </div>

                  {/* App Grid */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      '📱', '💬', '📷', '🎵',
                      '📧', '🌐', '📅', '⚙️',
                      '🎮', '📚', '🎨', '💼'
                    ].map((icon, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-2xl backdrop-blur-sm shadow-md"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Dock */}
                  <div className="absolute bottom-8 left-6 right-6 bg-card/50 backdrop-blur-xl rounded-3xl p-4">
                    <div className="grid grid-cols-4 gap-4">
                      {['📞', '💬', '🌐', '🎵'].map((icon, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-2xl shadow-lg"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">INNOVATIVE FEATURES</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the next generation of mobile computing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<span className="text-3xl">🎯</span>}
              title="Dynamic Icons"
              description="Icons evolve with personalized real-time updates adapting to your usage"
            />
            <FeatureCard
              icon={<span className="text-3xl">🔔</span>}
              title="Holographic Notifications"
              description="Alerts appear with a personalized notification system"
            />
            <FeatureCard
              icon={<span className="text-3xl">🧩</span>}
              title="Adaptive Widgets"
              description="Widgets evolve with AI-assisted customization for better productivity"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 gradient-hero opacity-10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="bg-card rounded-[2rem] p-12 md:p-16 text-center shadow-glow">
            <h2 className="text-4xl font-bold mb-4">
              A LEAP INTO THE FUTURE OF<br />
              <span className="gradient-text">INTERFACE</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              READY FOR TOMORROW?
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/home-screen">
                <Button size="lg">
                  PRE-REGISTER FOR UPDATES
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                EXPLORE OUR SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">i</span>
              </div>
              <span className="text-xl font-bold">iOS 20</span>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>

            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">𝕏</a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">⚡</a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Discord">💬</a>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 iOS 20. ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
