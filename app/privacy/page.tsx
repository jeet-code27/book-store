export const metadata = {
  title: 'Privacy Policy | Premium Book Store',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1a1a1a] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-10 sm:p-16 max-w-3xl mx-auto -rotate-1">
          
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl font-bold text-[#2d2d2d] opacity-70 mb-12 border-b-[3px] border-dashed border-[#2d2d2d] pb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="space-y-10 text-2xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-relaxed">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#ff4d4d] mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you make a purchase or contact us, including your name, email address, phone number, and country.</p>
            </div>
            
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#ff4d4d] mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="space-y-3 pl-8">
                <li className="relative">
                  <span className="absolute -left-8 top-2 w-3 h-3 bg-[#2d2d2d] rounded-full"></span>
                  Process your orders and send you the purchased digital products.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-2 w-3 h-3 bg-[#2d2d2d] rounded-full"></span>
                  Communicate with you regarding your purchase.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-2 w-3 h-3 bg-[#2d2d2d] rounded-full"></span>
                  Respond to your comments, questions, and requests.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#ff4d4d] mb-4">3. Information Sharing</h2>
              <p>We do not share your personal information with third parties except as necessary to fulfill your order or as required by law.</p>
            </div>
            
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#ff4d4d] mb-4">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
