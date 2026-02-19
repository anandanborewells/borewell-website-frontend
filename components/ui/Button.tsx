import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-[#fbc02d] text-slate-900 hover:bg-[#c49000] font-semibold',
        secondary: 'bg-[#005f99] text-white hover:bg-[#004a7a] font-semibold',
        outline: 'border-2 border-white text-white hover:bg-white/10 font-medium',
        ghost: 'text-slate-600 hover:bg-slate-100 font-medium',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={cn(
                'rounded-md transition-all duration-300 flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
