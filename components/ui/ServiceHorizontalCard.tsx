"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ServiceHorizontalCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  href: string;
  className?: string;
}

export function ServiceHorizontalCard({
  title,
  description,
  imageUrl,
  tags,
  href,
  className,
}: ServiceHorizontalCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-[10px] p-6 border border-slate-100 shadow-sm transition-all duration-500 flex flex-col sm:flex-row gap-10 items-start cursor-pointer relative overflow-hidden",
        "hover:bg-[#F3F9FF] hover:border-[#D0E5FF] hover:shadow-md sm:h-[260px]",
        className,
      )}
    >
      {/* Image Container - Flip effect */}
      <div className="flex-shrink-0 [perspective:1000px] z-10">
        <div className="w-[200px]  h-[200px] rounded-lg overflow-hidden shadow-sm relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <Image
            width={100}
            height={100}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover [backface-visibility:hidden]"
          />
          {/* <div className="absolute inset-0 bg-[#005f99] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div> */}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-grow flex flex-col min-w-0 z-10">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#005f99] transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-slate-500 text-[13px] leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#eff6ff] text-[#334E6F] rounded-md text-[13px] font-bold tracking-tight whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link - Zoom effect */}
        <div className="mt-auto ">
          <Link
            href={href}
            className="inline-flex items-center text-[#003B73] font-bold text-[14px] hover:text-[#005f99] transition-all duration-300 transform group-hover:scale-105 origin-left"
          >
            Learn more
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
