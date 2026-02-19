"use client";

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#005f99] to-[#0077c2] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{number}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#FFC107] flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
    );
}
