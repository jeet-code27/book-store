import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--color-brand-100)] dark:bg-[#1a1a1a] border-t-4 border-dashed border-[#2d2d2d] dark:border-[var(--color-paper)] pt-16 pb-8 mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group hover:rotate-1 transition-transform">
              <div className="bg-white text-[#2d2d2d] p-1.5 border-[3px] border-[#2d2d2d] wobbly hard-shadow-sm">
                <BookOpen size={20} strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-2xl text-[#2d2d2d] dark:text-[var(--color-paper)]">
                {process.env.NEXT_PUBLIC_SITE_NAME || 'Book Store'}
              </span>
            </Link>
            <p className="text-lg text-[#2d2d2d] dark:text-[#e5e0d8] max-w-sm">
              Premium digital books delivered directly to your inbox. High-quality knowledge for your personal and professional growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#ff4d4d] -rotate-1 wobbly-sm"></span>
            </h3>
            <ul className="space-y-3 text-lg font-bold">
              <li><Link href="/books" className="text-[#2d2d2d] hover:line-through hover:decoration-[#ff4d4d] hover:decoration-2 dark:text-[#e5e0d8] transition-all">All Books</Link></li>
              <li><Link href="/about" className="text-[#2d2d2d] hover:line-through hover:decoration-[#ff4d4d] hover:decoration-2 dark:text-[#e5e0d8] transition-all">About Us</Link></li>
              <li><Link href="/contact" className="text-[#2d2d2d] hover:line-through hover:decoration-[#ff4d4d] hover:decoration-2 dark:text-[#e5e0d8] transition-all">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-4 relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-secondary-500)] rotate-1 wobbly-sm"></span>
            </h3>
            <ul className="space-y-3 text-lg font-bold">
              <li><Link href="/privacy" className="text-[#2d2d2d] hover:line-through hover:decoration-[var(--color-secondary-500)] hover:decoration-2 dark:text-[#e5e0d8] transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#2d2d2d] hover:line-through hover:decoration-[var(--color-secondary-500)] hover:decoration-2 dark:text-[#e5e0d8] transition-all">Terms & Conditions</Link></li>
              <li><Link href="/terms#refunds" className="text-[#2d2d2d] hover:line-through hover:decoration-[var(--color-secondary-500)] hover:decoration-2 dark:text-[#e5e0d8] transition-all">Refund & Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t-[3px] border-[#2d2d2d] dark:border-[var(--color-paper)] text-center text-lg text-[#2d2d2d] dark:text-[#e5e0d8] font-bold flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} {process.env.NEXT_PUBLIC_SITE_NAME || 'Book Store'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
