'use client';

import { useState } from 'react';
import { Loader2, Send } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen py-16 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block relative -rotate-2">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#ff4d4d] wobbly-sm -z-10 translate-y-2"></span>
          </h1>
          <p className="text-2xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] mt-4">
            Have a question about our books or your order? Send us a message!
          </p>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-none border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-8 sm:p-14 rotate-1 max-w-3xl mx-auto relative">
          
          {/* Decorative thumbtack */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-[var(--color-brand-50)] rounded-full border-[3px] border-[#2d2d2d] shadow-sm z-20">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
          </div>

          {status === 'success' && (
            <div className="mb-10 p-5 bg-[var(--color-brand-50)] border-[3px] border-[#2d2d2d] wobbly-sm text-[#2d2d2d] text-xl font-bold text-center -rotate-1 hard-shadow-sm">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-10 p-5 bg-white border-[3px] border-[#2d2d2d] wobbly-sm text-[#ff4d4d] text-xl font-bold text-center rotate-1 hard-shadow-sm">
              Failed to send message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-2 ml-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-[var(--color-paper)] dark:bg-[#2d2d2d] border-[3px] border-[#2d2d2d] dark:border-[var(--color-paper)] wobbly-sm text-xl text-[#2d2d2d] dark:text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-secondary-500)] hard-shadow-sm transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-2 ml-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-[var(--color-paper)] dark:bg-[#2d2d2d] border-[3px] border-[#2d2d2d] dark:border-[var(--color-paper)] wobbly-sm text-xl text-[#2d2d2d] dark:text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-secondary-500)] hard-shadow-sm transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-2 ml-2">Message</label>
              <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 bg-[var(--color-paper)] dark:bg-[#2d2d2d] border-[3px] border-[#2d2d2d] dark:border-[var(--color-paper)] wobbly-sm text-xl text-[#2d2d2d] dark:text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-secondary-500)] hard-shadow-sm transition-colors resize-none leading-relaxed" />
            </div>
            <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-3 py-4 px-8 wobbly border-[4px] border-[#2d2d2d] text-3xl font-heading font-bold text-[#2d2d2d] bg-[var(--color-brand-50)] hover:bg-[#ff4d4d] hover:text-white hard-shadow-lg active:hard-shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-70 transition-all -rotate-1 mt-6">
              {status === 'loading' ? <Loader2 className="animate-spin" size={28} strokeWidth={3} /> : <><Send size={28} strokeWidth={2.5} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
