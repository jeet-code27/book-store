import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import CurrencyToggle from './CurrencyToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)] border-b-4 border-[#2d2d2d] dark:bg-[#2d2d2d] dark:border-[var(--color-paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group hover:-rotate-2 transition-transform duration-100">
          <div className="bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] p-2 wobbly hard-shadow-sm group-hover:bg-[#ff4d4d] group-hover:text-white transition-colors">
            <BookOpen size={24} strokeWidth={2.5} />
          </div>
          <span className="font-heading font-bold text-3xl tracking-tight text-[#2d2d2d] dark:text-[var(--color-paper)] ml-2">
            {process.env.NEXT_PUBLIC_SITE_NAME || 'Book Store'}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/books" className="text-[#2d2d2d] dark:text-[var(--color-paper)] font-bold text-lg hover:text-[#ff4d4d] transition-colors relative group">
            <span className="relative z-10">Books</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff4d4d] transition-all group-hover:w-full wobbly"></span>
          </Link>
          <Link href="/about" className="text-[#2d2d2d] dark:text-[var(--color-paper)] font-bold text-lg hover:text-[#ff4d4d] transition-colors relative group">
            <span className="relative z-10">About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff4d4d] transition-all group-hover:w-full wobbly"></span>
          </Link>
          <Link href="/contact" className="text-[#2d2d2d] dark:text-[var(--color-paper)] font-bold text-lg hover:text-[#ff4d4d] transition-colors relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff4d4d] transition-all group-hover:w-full wobbly"></span>
          </Link>
          
          {/* Currency Toggle */}
          <CurrencyToggle />
        </nav>
      </div>
    </header>
  );
}
