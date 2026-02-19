import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
    return (
        <div className={cn(
            "bg-white border-2 border-transparent p-8 rounded-xl transition-all duration-300 group cursor-pointer h-full relative overflow-hidden shadow-md hover:shadow-2xl hover:border-white/30 hover:-translate-y-1",
            className
        )}>
            {/* Hover Background Animation Layer - Slides in from left, out to right */}
            <div className="absolute inset-0 bg-[#0F1D33] transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left z-0" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-[#FFC107] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg shrink-0">
                    <Icon className="w-8 h-8 text-[#0F1D33]" />
                </div>

                {/* Content */}
                <div className="text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#0F1D33] mb-3 group-hover:text-white transition-colors duration-500 leading-tight">
                        {title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed group-hover:text-white/80 transition-colors duration-500 font-medium">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
