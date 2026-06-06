'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/products';
import { Loader2 } from 'lucide-react';
import { useCurrency } from './CurrencyContext';
import Script from 'next/script';

export default function CheckoutForm({ book }: { book: Product }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { currency, mounted } = useCurrency();
  const displayPrice = !mounted || currency === 'USD' ? `$${book.priceUSD} USD` : `₹${book.priceINR} INR`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      country: formData.get('country'),
      bookId: book.id,
      bookTitle: book.title,
      price: displayPrice,
    };

    const amount = currency === 'USD' ? Math.round(book.priceUSD * 100) : Math.round(book.priceINR! * 100);
    const orderCurrency = currency === 'USD' ? 'USD' : 'INR';

    try {
      // 1. Create Razorpay Order
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: orderCurrency, receipt: `receipt_${book.id}` }),
      });
      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // 2. Open Razorpay Checkout Modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: orderData.amount, 
        currency: orderData.currency,
        name: process.env.NEXT_PUBLIC_SITE_NAME || 'Premium Book Store',
        description: `Purchase of ${book.title}`,
        order_id: orderData.id, 
        handler: async function (response: { razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string }) {
          try {
            // 3. Verify Payment Signature
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              // 4. Send Confirmation Email & Save Order
              const recordRes = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, paymentId: response.razorpay_payment_id }),
              });
              
              if (recordRes.ok) {
                router.push('/thank-you');
              } else {
                setError('Payment successful but failed to record order. Please contact support.');
                setIsSubmitting(false);
              }
            } else {
              setError(verifyData.error || 'Payment verification failed.');
              setIsSubmitting(false);
            }
          } catch {
            setError('An error occurred during verification.');
            setIsSubmitting(false);
          }
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone || '',
        },
        theme: {
          color: '#ff4d4d',
        },
        modal: {
          ondismiss: function() {
            setIsSubmitting(false);
          }
        }
      };

      // @ts-expect-error Razorpay is not in the window type
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response: { error: { description: string } }) {
        setError(`Payment failed: ${response.error.description}`);
        setIsSubmitting(false);
      });
      rzp1.open();

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'A network error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-white border-[3px] border-[#2d2d2d] wobbly hard-shadow-sm text-[#ff4d4d] text-xl font-bold rotate-1">
          {error}
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xl font-bold text-[#2d2d2d] dark:text-white mb-2 ml-2">
            Full Name <span className="text-[#ff4d4d]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white border-[3px] border-[#2d2d2d] wobbly-sm text-xl text-[#2d2d2d] focus:outline-none focus:border-[var(--color-secondary-500)] focus:ring-0 hard-shadow-sm placeholder:text-[#2d2d2d]/40 transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xl font-bold text-[#2d2d2d] dark:text-white mb-2 ml-2">
            Email Address <span className="text-[#ff4d4d]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white border-[3px] border-[#2d2d2d] wobbly-sm text-xl text-[#2d2d2d] focus:outline-none focus:border-[var(--color-secondary-500)] focus:ring-0 hard-shadow-sm placeholder:text-[#2d2d2d]/40 transition-colors"
            placeholder="john@example.com"
          />
          <p className="text-lg text-[#2d2d2d] mt-2 ml-2 font-bold opacity-80">We will send your PDF to this email address.</p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-xl font-bold text-[#2d2d2d] dark:text-white mb-2 ml-2">
            Phone Number <span className="text-[#2d2d2d] opacity-60 font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white border-[3px] border-[#2d2d2d] wobbly-sm text-xl text-[#2d2d2d] focus:outline-none focus:border-[var(--color-secondary-500)] focus:ring-0 hard-shadow-sm placeholder:text-[#2d2d2d]/40 transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-xl font-bold text-[#2d2d2d] dark:text-white mb-2 ml-2">
            Country <span className="text-[#ff4d4d]">*</span>
          </label>
          <select
            id="country"
            name="country"
            required
            className="w-full px-4 py-3 bg-white border-[3px] border-[#2d2d2d] wobbly-sm text-xl text-[#2d2d2d] focus:outline-none focus:border-[var(--color-secondary-500)] focus:ring-0 hard-shadow-sm appearance-none cursor-pointer"
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="IN">India</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>

      <div className="pt-8 mt-8 border-t-[3px] border-dashed border-[#2d2d2d]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-4 px-8 wobbly border-[3px] border-[#2d2d2d] text-2xl font-bold bg-white text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white hard-shadow active:hard-shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={24} strokeWidth={3} />
              Processing...
            </>
          ) : (
            `Complete Order — ${displayPrice}`
          )}
        </button>
        <p className="text-lg text-center text-[#2d2d2d] mt-6 font-bold opacity-80 -rotate-1 flex items-center justify-center gap-2">
          <span className="text-2xl">🔒</span> Secure Payments via Razorpay
        </p>
      </div>
    </form>
    </>
  );
}
