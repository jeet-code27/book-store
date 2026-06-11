import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { FileText, Globe, ArrowRight } from 'lucide-react';
import PriceDisplay from './PriceDisplay';

export default function BookCard({ book }: { book: Product }) {
  return (
    <div className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-[#2d2d2d] dark:border-[var(--color-paper)] wobbly-md hard-shadow transition-transform duration-100 hover:-rotate-1 hover:-translate-y-1 relative mt-4">
      
      {/* Decorative Tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-400/30 dark:bg-gray-200/20 rotate-2 z-10"></div>
      
      <div className="relative aspect-[3/4] w-full overflow-hidden border-b-[3px] border-dashed border-[#2d2d2d] dark:border-[var(--color-paper)] bg-[var(--color-brand-100)] dark:bg-[#2d2d2d]">
        <Image src={book.coverImage} alt={book.title} fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 bg-[var(--color-brand-50)] text-[#2d2d2d] border-2 border-[#2d2d2d] wobbly-sm font-bold text-lg rotate-1">
            {book.format}
          </span>
        </div>
        
        <h3 className="font-heading text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-2 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-lg text-[#2d2d2d] dark:text-[#e5e0d8] mb-4 line-clamp-2 leading-snug">
          {book.subtitle}
        </p>
        
        {book.chapters && book.chapters.length > 0 && (
          <div className="mb-6 bg-[var(--color-brand-50)] dark:bg-[#2d2d2d] border-[2px] border-[#2d2d2d] p-3 wobbly-sm rotate-1">
            <span className="block text-sm font-heading font-bold text-[#ff4d4d] mb-1">
              {book.id.includes('bundle') || book.id.includes('collection') || book.id.includes('playbook') ? 'Books Included:' : 'Core Chapters:'}
            </span>
            <ul className="text-sm font-bold text-[#2d2d2d] dark:text-[#e5e0d8] space-y-1">
              {book.chapters.slice(0, 3).map((chapter, index) => (
                <li key={index} className="flex items-start gap-1">
                  <span className="text-[#ff4d4d] shrink-0 mt-[2px]">•</span> 
                  <span className="truncate">{chapter}</span>
                </li>
              ))}
              {book.chapters.length > 3 && (
                <li className="text-xs text-[#2d2d2d]/70 dark:text-[#e5e0d8]/70 italic mt-1">
                  + {book.chapters.length - 3} more...
                </li>
              )}
            </ul>
          </div>
        )}
        
        <div className="flex items-center gap-4 text-base font-bold text-[#2d2d2d] dark:text-[#e5e0d8] mb-6">
          <div className="flex items-center gap-1 border-b-2 border-dashed border-[#2d2d2d] pb-1">
            <Globe size={18} strokeWidth={2.5} />
            <span>{book.language}</span>
          </div>
          <div className="flex items-center gap-1 border-b-2 border-dashed border-[#2d2d2d] pb-1">
            <FileText size={18} strokeWidth={2.5} />
            <span>{book.pages}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t-[3px] border-dashed border-[#2d2d2d]">
          <div className="flex items-baseline gap-1">
            <PriceDisplay 
              usd={book.priceUSD} 
              inr={book.priceINR || 0} 
              className="text-3xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)]"
              hideCurrencyText={true}
            />
          </div>
          <span className="flex items-center gap-2 font-bold text-[#ff4d4d] group-hover:translate-x-2 transition-transform">
            View Details <ArrowRight size={20} strokeWidth={3} />
          </span>
        </div>
        
        <div className="flex gap-4 mt-6">
          <Link 
            href={`/books/${book.id}`}
            className="flex-1 text-center py-2 px-4 wobbly border-[3px] border-[#2d2d2d] bg-white text-[#2d2d2d] text-xl font-bold hard-shadow-sm hover:bg-[var(--color-secondary-500)] hover:text-white hover:hard-shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Details
          </Link>
          <Link 
            href={`/checkout/${book.id}`}
            className="flex-1 text-center py-2 px-4 wobbly border-[3px] border-[#2d2d2d] bg-white text-[#2d2d2d] text-xl font-bold hard-shadow-sm hover:bg-[#ff4d4d] hover:text-white hover:hard-shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
