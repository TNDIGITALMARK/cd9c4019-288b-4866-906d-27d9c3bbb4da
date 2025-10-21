'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock Data
const mockBatteryLevel = 73;
const mockBatteryTimeRemaining = '6 hours';

interface Toggle {
  id: string;
  label: string;
  icon: string;
  enabled: boolean;
}

interface Slider {
  id: string;
  label: string;
  icon: string;
  value: number;
}

export default function ControlCenter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [toggles, setToggles] = useState<Toggle[]>([
    { id: 'wifi', label: 'Wi-Fi', icon: '📶', enabled: true },
    { id: 'bluetooth', label: 'Bluetooth', icon: '🔵', enabled: true },
    { id: 'airplane', label: 'Airplane', icon: '✈️', enabled: false },
    { id: 'dnd', label: 'Do Not Disturb', icon: '🌙', enabled: false },
  ]);

  const [sliders, setSliders] = useState<Slider[]>([
    { id: 'brightness', label: 'Brightness', icon: '☀️', value: 75 },
    { id: 'volume', label: 'Volume', icon: '🔊', value: 60 },
  ]);

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggle = (id: string) => {
    setToggles(toggles.map(t =>
      t.id === id ? { ...t, enabled: !t.enabled } : t
    ));
  };

  const handleSliderChange = (id: string, value: number) => {
    setSliders(sliders.map(s =>
      s.id === id ? { ...s, value } : s
    ));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center">
          <Link href="/app-library" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← App Library
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Marketing
            </Link>
            <Link href="/home-screen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home Screen
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
                      <span>🔋 {mockBatteryLevel}%</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold">Control Center</h2>
                  </div>

                  {/* System Toggles */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Quick Settings
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {toggles.map((toggle) => (
                        <button
                          key={toggle.id}
                          onClick={() => handleToggle(toggle.id)}
                          className={`
                            p-4 rounded-3xl backdrop-blur-sm transition-all
                            ${toggle.enabled
                              ? 'bg-gradient-to-br from-primary/30 to-secondary/30 shadow-md shadow-primary/20'
                              : 'bg-card/50 hover:bg-card/70'
                            }
                          `}
                        >
                          <div className="text-3xl mb-2">{toggle.icon}</div>
                          <p className="text-sm font-semibold">{toggle.label}</p>
                          <p className="text-xs text-muted-foreground">
                            {toggle.enabled ? 'On' : 'Off'}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sliders */}
                  <div className="space-y-4 mb-6">
                    {sliders.map((slider) => (
                      <div
                        key={slider.id}
                        className="bg-card/50 backdrop-blur-sm rounded-3xl p-5"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{slider.icon}</span>
                            <span className="text-sm font-semibold">{slider.label}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{slider.value}%</span>
                        </div>
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={slider.value}
                            onChange={(e) => handleSliderChange(slider.id, Number(e.target.value))}
                            className="w-full h-2 rounded-full appearance-none cursor-pointer"
                            style={{
                              background: `linear-gradient(to right,
                                hsl(var(--primary)) 0%,
                                hsl(var(--primary)) ${slider.value}%,
                                hsl(var(--card)) ${slider.value}%,
                                hsl(var(--card)) 100%)`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Screen Mirroring */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Connectivity
                    </h3>
                    <button className="w-full bg-card/50 backdrop-blur-sm rounded-3xl p-5 hover:bg-card/70 transition-all text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">📺</span>
                          <div>
                            <p className="text-sm font-semibold">Screen Mirroring</p>
                            <p className="text-xs text-muted-foreground">Not connected</p>
                          </div>
                        </div>
                        <span className="text-muted-foreground">›</span>
                      </div>
                    </button>
                  </div>

                  {/* Battery Info */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-5 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl">🔋</span>
                        <span className="text-sm font-semibold">Battery</span>
                      </div>
                      <span className="text-2xl font-bold">{mockBatteryLevel}%</span>
                    </div>
                    <div className="w-full bg-card/30 rounded-full h-3 mb-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                        style={{ width: `${mockBatteryLevel}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      {mockBatteryTimeRemaining} remaining
                    </p>
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
                <span className="gradient-text">Control Center</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Powerful system controls and quick access features that put you in complete control.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-xl font-semibold">System Toggles</h3>
                </div>
                <p className="text-muted-foreground">
                  Quick access to Wi-Fi, Bluetooth, Airplane Mode, and Do Not Disturb.
                  One tap to enable or disable essential system features.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎚️</span>
                  <h3 className="text-xl font-semibold">Quick Settings</h3>
                </div>
                <p className="text-muted-foreground">
                  Adjust brightness and volume with smooth sliders.
                  Currently: Brightness at {sliders[0].value}%, Volume at {sliders[1].value}%.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔋</span>
                  <h3 className="text-xl font-semibold">Battery Monitor</h3>
                </div>
                <p className="text-muted-foreground">
                  Real-time battery status with estimated time remaining.
                  Currently at {mockBatteryLevel}% with {mockBatteryTimeRemaining} remaining.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/home-screen" className="flex-1">
                <button className="w-full gradient-primary text-white px-6 py-4 rounded-[1.5rem] font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
                  Back to Home Screen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
