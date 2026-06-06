"use client";
import { useCurrency } from './CurrencyContext';

export default function CurrencyToggle() {
  const { currency, setCurrency, mounted } = useCurrency();

  if (!mounted) return <div className="w-24 h-10 ml-4 border-[3px] border-transparent" />; // Placeholder for layout shift

  return (
    <div className="flex items-center bg-white border-[3px] border-[#2d2d2d] wobbly-sm p-1 hard-shadow-sm rotate-1 ml-4">
      <button 
        onClick={() => setCurrency('INR')}
        className={`px-3 py-1 font-bold text-sm transition-colors ${currency === 'INR' ? 'bg-[var(--color-brand-50)] border-[2px] border-[#2d2d2d] wobbly' : 'opacity-70 hover:opacity-100 border-[2px] border-transparent'}`}
      >
        🇮🇳 INR
      </button>
      <button 
        onClick={() => setCurrency('USD')}
        className={`px-3 py-1 font-bold text-sm transition-colors ${currency === 'USD' ? 'bg-[var(--color-brand-50)] border-[2px] border-[#2d2d2d] wobbly' : 'opacity-70 hover:opacity-100 border-[2px] border-transparent'}`}
      >
        🇺🇸 USD
      </button>
    </div>
  );
}
