"use client";

import Link from 'next/link';
import { BookOpen, Menu, X } from 'lucide-react';
import CurrencyToggle from './CurrencyToggle';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)] border-b-4 border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group hover:-rotate-2 transition-transform duration-100 shrink-0">
          <div className="bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] p-1.5 sm:p-2 wobbly hard-shadow-sm group-hover:bg-[#ff4d4d] group-hover:text-white transition-colors">
            <BookOpen size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col ml-1 sm:ml-2">
            <span className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-[#2d2d2d] line-clamp-1 leading-none pt-1">
              {process.env.NEXT_PUBLIC_SITE_NAME || 'Book Store'}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#2d5da1] tracking-wider mt-0.5 font-sans">
              by swagcentral
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/books" className="text-[#2d2d2d] font-bold text-lg hover:text-[#ff4d4d] transition-colors relative group">
            <span className="relative z-10">Books</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff4d4d] transition-all group-hover:w-full wobbly"></span>
          </Link>
          <Link href="/about" className="text-[#2d2d2d] font-bold text-lg hover:text-[#ff4d4d] transition-colors relative group">
            <span className="relative z-10">About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff4d4d] transition-all group-hover:w-full wobbly"></span>
          </Link>
          <Link href="/contact" className="text-[#2d2d2d] font-bold text-lg hover:text-[#ff4d4d] transition-colors relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff4d4d] transition-all group-hover:w-full wobbly"></span>
          </Link>
          <CurrencyToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <CurrencyToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#2d2d2d] p-1.5 border-[3px] border-[#2d2d2d] bg-white wobbly-sm active:translate-y-1 hard-shadow-sm"
          >
            {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-paper)] border-b-4 border-[#2d2d2d] p-4 flex flex-col gap-4 font-bold text-xl hard-shadow-lg z-50">
          <Link href="/books" onClick={() => setIsOpen(false)} className="text-[#2d2d2d] hover:text-[#ff4d4d] p-2 border-b-2 border-dashed border-[#2d2d2d]">Books</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#2d2d2d] hover:text-[#ff4d4d] p-2 border-b-2 border-dashed border-[#2d2d2d]">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#2d2d2d] hover:text-[#ff4d4d] p-2">Contact</Link>
        </div>
      )}
    </header>
  );
}
