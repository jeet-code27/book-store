import { PRODUCTS, ProductId } from '@/lib/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, FileText, Globe, ShoppingCart } from 'lucide-react';
import { Metadata } from 'next';
import PriceDisplay from '@/components/PriceDisplay';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = PRODUCTS[slug as ProductId];
  if (!book) return { title: 'Book Not Found' };
  
  return {
    title: `${book.title} | Store`,
    description: book.subtitle,
  };
}

export default async function BookDetailsPage({ params }: Props) {
  const { slug } = await params;
  const book = PRODUCTS[slug as ProductId];

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-12 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          href="/books" 
          className="inline-flex items-center gap-2 text-xl font-bold text-[#2d2d2d] hover:text-[#ff4d4d] dark:text-[var(--color-paper)] mb-12 transition-colors border-b-2 border-dashed border-transparent hover:border-[#ff4d4d]"
        >
          <ArrowLeft size={20} strokeWidth={2.5} /> Back to Books
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Image/Cover & Details */}
          <div className="h-fit space-y-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-[4px] border-l-[4px] border-[#2d2d2d] hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-[4px] border-r-[4px] border-[#2d2d2d] hidden md:block"></div>
              
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden bg-[var(--color-paper)] border-[4px] border-[#2d2d2d] wobbly-sm hard-shadow-lg rotate-1 transition-transform hover:-rotate-1">
                <Image src={book.coverImage} alt={book.title} fill className="object-cover opacity-90" priority />
              </div>
            </div>

            {/* Extra Trust Badges */}
            <div className="w-full max-w-md mx-auto lg:mx-0 space-y-6 hidden md:block">
              <div className="bg-[#dcfce7] dark:bg-[#1a1a1a] border-[3px] border-[#2d2d2d] p-6 wobbly-sm flex items-center gap-4 rotate-1 hard-shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-white border-[3px] border-[#2d2d2d] rounded-full p-2 wobbly shrink-0">
                  <Check size={28} strokeWidth={3} className="text-[#2d2d2d]" />
                </div>
                <p className="text-xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-tight">Instant PDF Delivery straight to your inbox</p>
              </div>
              
              <div className="bg-[var(--color-pastel-blue)] dark:bg-[#1a1a1a] border-[3px] border-[#2d2d2d] p-6 wobbly-sm flex items-center gap-4 -rotate-1 hard-shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-white border-[3px] border-[#2d2d2d] rounded-full p-2 wobbly shrink-0">
                  <Globe size={28} strokeWidth={3} className="text-[#2d2d2d]" />
                </div>
                <p className="text-xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-tight">Read on any device: Phone, Tablet, PC or Mac</p>
              </div>
            </div>

            {/* NEW: What's Included */}
            {book.whatsIncluded && book.whatsIncluded.length > 0 && (
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block relative">
                  What's Included in the Bundle
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#ff4d4d] wobbly"></span>
                </h2>
                <div className="space-y-6">
                  {book.whatsIncluded.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-[#1a1a1a] border-[3px] border-[#2d2d2d] p-6 wobbly-sm hard-shadow-sm rotate-1">
                      <h3 className="text-2xl font-heading font-bold text-[#2d5da1] mb-2">{item.title}</h3>
                      <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] opacity-90">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEW: Who is it for */}
            {book.whoIsItFor && book.whoIsItFor.length > 0 && (
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block relative">
                  Who is this for?
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#2d5da1] wobbly"></span>
                </h2>
                <ul className="space-y-4">
                  {book.whoIsItFor.map((audience, i) => (
                    <li key={i} className="flex items-start gap-4 text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8]">
                      <div className="shrink-0 w-8 h-8 rounded-full border-[3px] border-[#2d2d2d] bg-[#dcfce7] flex items-center justify-center -rotate-2 mt-1">
                        <Check size={18} strokeWidth={3} className="text-[#2d2d2d]" />
                      </div>
                      <span className="pt-1">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Right Column: Details */}
          <div>
            <div className="mb-12 relative">
              <div className="absolute -top-4 -right-4 bg-[var(--color-brand-50)] text-[#2d2d2d] px-4 py-2 border-[3px] border-[#2d2d2d] wobbly-sm font-bold text-xl rotate-6 hard-shadow-sm z-10">
                {book.format} Download
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 leading-tight relative inline-block">
                {book.title}
              </h1>
              <p className="text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-8 opacity-90 leading-relaxed border-l-[4px] border-[#ff4d4d] pl-6 wobbly-sm">
                {book.subtitle}
              </p>
              
              <div className="flex items-end gap-4 mb-8">
                <PriceDisplay 
                  usd={book.priceUSD} 
                  inr={book.priceINR || 0} 
                  className="text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] tracking-tight"
                  currencyClassName="text-2xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] mb-2 opacity-80 ml-2"
                />
              </div>

              <div className="mb-12 pb-12 border-b-[4px] border-dashed border-[#2d2d2d]">
                <Link 
                  href={`/checkout/${book.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-2xl font-bold text-white bg-[#ff4d4d] border-[4px] border-[#2d2d2d] wobbly hard-shadow-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:hard-shadow-sm transition-all"
                >
                  <ShoppingCart size={24} strokeWidth={2.5} />
                  Proceed to Checkout
                </Link>
                <p className="text-lg font-bold text-[#2d2d2d] mt-6 flex items-center justify-center sm:justify-start gap-2 opacity-80 rotate-1">
                  <span className="text-2xl">🔒</span> Secure, hassle-free checkout
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block relative">
                About this book
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-brand-50)] wobbly"></span>
              </h2>
              <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] leading-relaxed mb-8">
                <span className="float-left text-6xl font-heading text-[#ff4d4d] leading-none pr-2 pt-2">{book.description.charAt(0)}</span>
                {book.description.substring(1)}
              </p>
              
              <div className="flex flex-wrap gap-8 text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] mb-8 bg-white dark:bg-[#1a1a1a] p-6 border-[3px] border-[#2d2d2d] wobbly-sm -rotate-1 hard-shadow-sm">
                <div className="flex items-center gap-3">
                  <Globe size={24} strokeWidth={2.5} className="text-[#ff4d4d]" />
                  <span>Language: <strong className="text-[#2d2d2d] dark:text-[var(--color-paper)] border-b-2 border-[#2d2d2d] pb-1">{book.language}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={24} strokeWidth={2.5} className="text-[#ff4d4d]" />
                  <span>Length: <strong className="text-[#2d2d2d] dark:text-[var(--color-paper)] border-b-2 border-[#2d2d2d] pb-1">{book.pages} pages</strong></span>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block relative">
                Core Chapters
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-secondary-500)] wobbly"></span>
              </h2>
              <ul className="space-y-4">
                {book.chapters.map((chapter, i) => (
                  <li key={i} className="flex items-start gap-4 text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8]">
                    <div className="shrink-0 w-8 h-8 rounded-full border-[3px] border-[#2d2d2d] bg-white flex items-center justify-center rotate-3 mt-1">
                      <span className="font-heading text-[#2d2d2d]">{i + 1}</span>
                    </div>
                    <span className="pt-1">{chapter}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* NEW: Why Buy Section */}
            {book.whyBuy && (
              <div className="mb-12 p-8 bg-[var(--color-brand-50)] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg -rotate-1 relative">
                {/* Thumbtack */}
                <div className="absolute -top-3 left-6 w-6 h-6 bg-[#ff4d4d] rounded-full border-[3px] border-[#2d2d2d] shadow-sm z-20">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] mb-4">Why You Need This</h2>
                <p className="text-xl font-bold text-[#2d2d2d] leading-relaxed">
                  {book.whyBuy}
                </p>
              </div>
            )}


            

          </div>
        </div>
      </div>
    </div>
  );
}
