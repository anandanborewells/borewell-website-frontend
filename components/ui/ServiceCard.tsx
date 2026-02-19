import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string[];
    imageUrl: string;
    href: string;
    className?: string;
}

export function ServiceCard({ title, description, imageUrl, href, className }: ServiceCardProps) {
    return (
        <div className={cn(
            "group bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_15px_40px_rgba(0,95,153,0.25)] hover:-translate-y-2 transition-all duration-500 flex flex-col sm:flex-row relative sm:h-[180px]",
            className
        )}>
            {/* Image Section - Compacted to approx 30% */}
            <div className="sm:w-[30%] relative overflow-hidden h-[180px] sm:h-auto">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-center relative bg-white overflow-hidden">
                {/* Decorative Arcs - Subtler and smaller */}
                <div className="absolute -top-9 -right-10 w-22 h-22  border-[8px] border-[#999999] rounded-full z-0 pointer-events-none" />
                <div className="absolute -bottom-15 right-[20%] w-22 h-22  border-[8px] border-[#999999] rounded-full z-0 pointer-events-none" />

                <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-[#003B73] mb-3 group-hover:text-[#005f99] transition-colors leading-tight">
                        {title}
                    </h3>

                    <ul className="space-y-2 mb-4">
                        {description.map((point, index) => (
                            <li key={index} className="flex items-start gap-2.5">
                                <div className="mt-1.5 flex-shrink-0">
                                    <div className="w-3.5 h-3.5 rounded-full border border-slate-700 flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-slate-700" />
                                    </div>
                                </div>
                                <span className="text-slate-600 text-[13px] font-medium leading-[1.4]">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <Link href={href} className="inline-flex items-center text-[#005f99] font-bold text-[14px] hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
