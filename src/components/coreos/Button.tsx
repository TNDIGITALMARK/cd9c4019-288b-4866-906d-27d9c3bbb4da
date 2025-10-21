import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 ease-out flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'gradient-primary text-white shadow-md hover:shadow-lg',
    secondary: 'bg-card text-foreground border border-border hover:border-primary',
    ghost: 'text-foreground hover:bg-card/50'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-[1rem]',
    md: 'px-6 py-3 text-base rounded-[1.5rem]',
    lg: 'px-8 py-4 text-lg rounded-[1.5rem]'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
