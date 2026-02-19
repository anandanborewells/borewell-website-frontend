"use client";

interface MotorOptionProps {
    hp: string;
    type: string;
}

export function MotorOption({ hp, type }: MotorOptionProps) {
    return (
        <div className="group relative bg-[#F8FAFC] border border-slate-200 border-l-[6px] border-l-[#0F1D33] rounded-sm overflow-hidden p-6 md:p-8 cursor-pointer transition-all duration-300 shadow-sm min-h-[100px] flex flex-col justify-center">
            {/* Color Fill Hover Effect */}
            <div className="absolute inset-0 bg-[#0F1D33] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0" />

            <div className="relative z-10 text-center">
                <div className="text-xl md:text-2xl font-bold text-[#005f99] mb-1 group-hover:text-white transition-colors duration-500">
                    {hp}
                </div>
                <div className="text-[14px] md:text-base text-slate-600 group-hover:text-white/80 transition-colors duration-500 font-medium">
                    {type}
                </div>
            </div>
        </div>
    );
}
