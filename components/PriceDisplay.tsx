interface PriceDisplayProps {
  usd: number;
  inr?: number;
  className?: string;
  currencyClassName?: string;
  hideCurrencyText?: boolean;
}

export default function PriceDisplay({ usd, inr, className = "", currencyClassName = "", hideCurrencyText = false }: PriceDisplayProps) {
  return (
    <div className="flex items-end gap-2 inline-flex">
      <span className={className}>${usd}</span>
      {!hideCurrencyText && <span className={currencyClassName}>USD</span>}
    </div>
  );
}
