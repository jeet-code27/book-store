import Link from 'next/link';
import { CheckCircle2, Mail } from 'lucide-react';

export const metadata = {
  title: 'Thank You | Order Received',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            fbq('track', 'Purchase', {
              value: 9.99,
              currency: 'USD',
              contents: [
                  {
                      id: 'BOOK 1',
                      quantity: 1
                  }
              ],
              content_ids: '1',
            });
          `,
        }}
      />
      <div className="max-w-2xl w-full bg-white dark:bg-[#1a1a1a] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-10 sm:p-16 text-center rotate-1 relative">
        
        {/* Decorative Tape */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-10 bg-gray-300/40 -rotate-2 z-10"></div>

        <div className="mx-auto w-24 h-24 bg-[var(--color-brand-50)] border-[4px] border-[#2d2d2d] text-[#2d2d2d] wobbly-sm flex items-center justify-center mb-10 -rotate-3 hard-shadow-sm">
          <CheckCircle2 size={50} strokeWidth={3} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6">
          Order Received!
        </h1>
        
        <div className="space-y-6 text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-12">
          <p className="leading-relaxed">
            Thank you for your request. We&apos;ve sent a confirmation email to your inbox.
          </p>
          
          <div className="bg-[var(--color-brand-100)] dark:bg-[#2d2d2d] border-[3px] border-[#2d2d2d] wobbly-sm p-6 flex items-start gap-4 text-left rotate-1">
            <Mail className="text-[#ff4d4d] shrink-0 mt-1" size={32} strokeWidth={2.5} />
            <p className="text-xl leading-relaxed">
              <strong className="font-heading text-2xl block mb-2 text-[#ff4d4d]">What happens next?</strong>
              Your order is confirmed! You will receive your PDF via email within the next 24 hours.
            </p>
          </div>
        </div>
        
        <Link 
          href="/"
          className="inline-flex w-full items-center justify-center py-5 px-8 wobbly border-[4px] border-[#2d2d2d] text-3xl font-heading font-bold text-[#2d2d2d] bg-[var(--color-brand-50)] hover:bg-[#ff4d4d] hover:text-white hard-shadow active:hard-shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all -rotate-1"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
