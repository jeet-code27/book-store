'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/products';
import { Loader2 } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutForm({ book }: { book: Product }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const displayPrice = `$${book.priceUSD} USD`;
  const amount = book.priceUSD.toString();

  const handleOrderSave = async (paymentId: string) => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      country: formData.get('country'),
      bookId: book.id,
      bookTitle: book.title,
      price: `$${book.priceUSD} USD`, // Always record in USD for PayPal
      paymentId: paymentId
    };

    try {
      const recordRes = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (recordRes.ok) {
        router.push('/thank-you');
      } else {
        setError('Payment successful but failed to record order. Please contact support.');
        setIsSubmitting(false);
      }
    } catch {
      setError('A network error occurred while saving the order.');
      setIsSubmitting(false);
    }
  };

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test", currency: "USD" }}>
      <form ref={formRef} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

      <div className="pt-8 mt-8 border-t-[3px] border-dashed border-[#2d2d2d] relative z-10 min-h-[150px]">
        {!isSubmitting ? (
          <PayPalButtons
            style={{ layout: "vertical", shape: "rect", color: "gold" }}
            onClick={(data, actions) => {
              const isFormValid = formRef.current?.reportValidity();
              if (!isFormValid) {
                setError("Please fill in all required fields.");
                return actions.reject();
              }
              setError(null);
              return actions.resolve();
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: `Purchase of ${book.title}`,
                    amount: {
                      currency_code: "USD",
                      value: amount,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              setIsSubmitting(true);
              if (actions.order) {
                return actions.order.capture().then((details) => {
                  let pId = details.id;
                  if (details.purchase_units && details.purchase_units[0] && details.purchase_units[0].payments && details.purchase_units[0].payments.captures) {
                    pId = details.purchase_units[0].payments.captures[0].id;
                  }
                  handleOrderSave(pId || "UNKNOWN_PAYPAL_ID");
                }).catch(err => {
                  console.error('PayPal Capture Error:', err);
                  setError(`Capture failed: ${err?.message || 'Transaction rejected by PayPal Sandbox.'}`);
                  setIsSubmitting(false);
                });
              }
              return Promise.resolve();
            }}
            onError={(err) => {
              setError('Payment failed or was cancelled. Please try again.');
              setIsSubmitting(false);
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="animate-spin text-[#ff4d4d] mb-4" size={48} strokeWidth={3} />
            <p className="text-2xl font-bold text-[#2d2d2d] dark:text-white">Processing your order...</p>
          </div>
        )}
        <p className="text-lg text-center text-[#2d2d2d] mt-6 font-bold opacity-80 -rotate-1 flex items-center justify-center gap-2">
          <span className="text-2xl">🔒</span> Secure Payments via PayPal
        </p>
      </div>
    </form>
    </PayPalScriptProvider>
  );
}
