import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className = '', glow = false }: CardProps) {
  return (
    <div
      className={`
        bg-card rounded-[1rem] p-8
        ${glow ? 'shadow-glow' : 'shadow-md'}
        transition-all duration-300 hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center hover:scale-105 transition-transform">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
