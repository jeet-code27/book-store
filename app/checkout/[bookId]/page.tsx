import { PRODUCTS, ProductId } from '@/lib/products';
import { notFound } from 'next/navigation';
import CheckoutForm from '@/components/CheckoutForm';
import { ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import PriceDisplay from '@/components/PriceDisplay';

type Props = {
  params: Promise<{ bookId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bookId } = await params;
  const book = PRODUCTS[bookId as ProductId];
  if (!book) return { title: 'Checkout' };
  
  return { title: `Checkout | ${book.title}` };
}

export default async function CheckoutPage({ params }: Props) {
  const { bookId } = await params;
  const book = PRODUCTS[bookId as ProductId];

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 lg:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-4 inline-block relative rotate-1">
            Secure Checkout
            <span className="absolute -bottom-2 left-0 w-full h-3 border-b-[4px] border-[#ff4d4d] wobbly"></span>
          </h1>
          <p className="text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mt-6">Complete your details to request the book.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Order Summary */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-[var(--color-brand-100)] dark:bg-[#1a1a1a] rounded-none border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-8 sticky top-32 -rotate-1">
              
              {/* Thumbtack */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#2d5da1] rounded-full border-[3px] border-[#2d2d2d] shadow-sm z-20">
                <div className="absolute top-1 left-2 w-2 h-2 bg-white/60 rounded-full"></div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-8 border-b-[3px] border-dashed border-[#2d2d2d] pb-4">Order Summary</h2>
              
              <div className="flex gap-6 mb-8 pb-8 border-b-[3px] border-dashed border-[#2d2d2d]">
                <div className="relative w-24 h-32 border-[3px] border-[#2d2d2d] wobbly-sm shrink-0 rotate-3 hard-shadow-sm overflow-hidden bg-white">
                  <Image src={book.coverImage} alt={book.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] text-2xl line-clamp-2 mb-2 leading-tight">{book.title}</h3>
                  <p className="text-[#2d2d2d] font-bold opacity-80 text-lg mb-3">{book.format} format</p>
                  <PriceDisplay 
                    usd={book.priceUSD} 
                    inr={book.priceINR || 0} 
                    className="font-heading font-bold text-3xl text-[#2d2d2d]"
                  />
                </div>
              </div>
              
              <div className="space-y-4 text-xl font-bold mb-8">
                <div className="flex justify-between text-[#2d2d2d] dark:text-[#e5e0d8] items-center">
                  <span>Subtotal</span>
                  <PriceDisplay usd={book.priceUSD} inr={book.priceINR || 0} hideCurrencyText={true} />
                </div>
                <div className="flex justify-between text-2xl pt-4 border-t-[3px] border-[#2d2d2d] items-center">
                  <span className="font-heading">Total Due</span>
                  <PriceDisplay usd={book.priceUSD} inr={book.priceINR || 0} className="font-heading" />
                </div>
              </div>
              
              <div className="bg-white border-[3px] border-[#2d2d2d] wobbly-sm p-5 flex items-start gap-4 rotate-1">
                <ShieldCheck className="text-[#ff4d4d] shrink-0 mt-1" size={28} strokeWidth={2.5} />
                <p className="text-lg text-[#2d2d2d] font-bold leading-snug">
                  <span className="text-[#ff4d4d] font-heading text-xl inline-block mb-1">Safe & Secure.</span><br/>
                  Checkout securely with Razorpay. Your PDF will be emailed within 24 hours.
                </p>
              </div>
            </div>
          </div>
          
          {/* Checkout Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-none border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-8 sm:p-12 rotate-1">
              {/* Tape */}
              <div className="absolute -top-4 right-12 w-24 h-8 bg-gray-300/40 rotate-[-4deg] z-10"></div>
              
              <h2 className="text-4xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-10">Your Details</h2>
              <CheckoutForm book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
