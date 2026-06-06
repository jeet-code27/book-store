export const metadata = {
  title: 'Terms of Service | Premium Book Store',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1a1a1a] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-10 sm:p-16 max-w-3xl mx-auto rotate-1">
          
          {/* Tape */}
          <div className="absolute -top-4 left-12 w-24 h-8 bg-gray-300/40 rotate-[3deg] z-10"></div>

          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6">
            Terms of Service
          </h1>
          <p className="text-xl font-bold text-[#2d2d2d] opacity-70 mb-12 border-b-[3px] border-dashed border-[#2d2d2d] pb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="space-y-10 text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-relaxed">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#2d5da1] mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using our store, you agree to be bound by these Terms of Service.</p>
            </div>
            
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#2d5da1] mb-4">2. Digital Products</h2>
              <p>All sales of digital products are final. Due to the nature of digital downloads, we generally do not offer refunds once the product has been delivered via email.</p>
            </div>
            
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#2d5da1] mb-4">3. Intellectual Property</h2>
              <p>The content of our digital books is protected by copyright. You may not distribute, reproduce, or resell any part of our digital products without explicit permission.</p>
            </div>
            
            <div className="bg-[var(--color-brand-50)] border-[3px] border-[#2d2d2d] wobbly-sm p-6 -rotate-1 hard-shadow-sm mt-8">
              <h2 className="text-4xl font-heading font-bold text-[#2d2d2d] mb-4">4. Purchasing Process</h2>
              <p>By submitting an order, you agree to pay the stated price for the digital product. We process payments manually; failure to complete the payment instructions sent to you will result in the non-delivery of the digital product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
