"use client";
import { useCurrency } from './CurrencyContext';

interface PriceDisplayProps {
  usd: number;
  inr: number;
  className?: string;
  currencyClassName?: string;
  hideCurrencyText?: boolean;
}

export default function PriceDisplay({ usd, inr, className = "", currencyClassName = "", hideCurrencyText = false }: PriceDisplayProps) {
  const { currency, mounted } = useCurrency();

  if (!mounted) {
    return (
      <div className="flex items-end gap-2 inline-flex">
        <span className={className}>${usd}</span>
        {!hideCurrencyText && <span className={currencyClassName}>USD</span>}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2 inline-flex">
      {currency === 'USD' ? (
        <>
          <span className={className}>${usd}</span>
          {!hideCurrencyText && <span className={currencyClassName}>USD</span>}
        </>
      ) : (
        <>
          <span className={className}>₹{inr}</span>
          {!hideCurrencyText && <span className={currencyClassName}>INR</span>}
        </>
      )}
    </div>
  );
}
