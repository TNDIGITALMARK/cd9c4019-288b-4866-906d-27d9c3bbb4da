import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[570px] mx-auto">
        {/* Phone Border with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-[3rem] p-[3px]">
          <div className="w-full h-full bg-background rounded-[2.85rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-3xl z-10" />

            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-br from-background to-card overflow-hidden">
              {children}
            </div>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute left-0 top-24 w-1 h-12 bg-card rounded-r-md" />
        <div className="absolute left-0 top-40 w-1 h-8 bg-card rounded-r-md" />
        <div className="absolute left-0 top-52 w-1 h-8 bg-card rounded-r-md" />
        <div className="absolute right-0 top-32 w-1 h-16 bg-card rounded-l-md" />
      </div>
    </div>
  );
}
