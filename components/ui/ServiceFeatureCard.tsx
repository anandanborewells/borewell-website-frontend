"use client";

import { LucideIcon } from 'lucide-react';

interface ServiceFeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    variant?: 'light' | 'dark';
}

export function ServiceFeatureCard({ icon: Icon, title, description, variant = 'light' }: ServiceFeatureCardProps) {
    const isDark = variant === 'dark';

    return (
        <div className={`relative rounded-lg p-8 text-center transition-all duration-300 overflow-hidden group cursor-pointer ${isDark
            ? 'bg-[#1a2332] text-white'
            : 'bg-white hover:shadow-lg'
            }`}>
            {/* Circular Hover Effect - Perfectly centered at corner */}
            {!isDark && (
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#1a2332] transition-all duration-700 ease-in-out scale-0 group-hover:scale-[100] z-0 origin-center translate-x-1/2 translate-y-1/2" />
            )}

            {/* Icon Container */}
            <div className={`relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${isDark ? 'bg-white' : 'bg-blue-100 group-hover:bg-white'
                }`}>
                <Icon className={`w-6 h-6 transition-colors duration-300 ${isDark ? 'text-[#005f99]' : 'text-blue-600 group-hover:text-blue-600'}`} strokeWidth={2} />
            </div>

            {/* Content */}
            <h3 className={`relative z-10 text-base font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900 group-hover:text-white'
                }`}>
                {title}
            </h3>
            <p className={`relative z-10 text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/80' : 'text-slate-600 group-hover:text-white/90'
                }`}>
                {description}
            </p>
        </div>
    );
}
