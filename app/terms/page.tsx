export const metadata = {
  title: `Terms & Conditions | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Coffee Reads'}`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1a1a1a] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-10 sm:p-16 max-w-3xl mx-auto rotate-1 relative">
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff4d4d] border-[3px] border-[#2d2d2d] rounded-full hard-shadow-sm z-10 flex items-center justify-center -rotate-12">
            <span className="text-white font-bold text-xl">!</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl font-bold text-[#ff4d4d] mb-12">Last Updated: April 25, 2026</p>

          <div className="space-y-10 text-xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-relaxed">
            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">1. Introduction</h2>
              <p>Welcome to Coffee Reads ("we," "us," "our," or "Company"). These Terms and Conditions ("Terms") govern your access to and use of our website starbucksnews.com (the "Website") and the purchase of digital products offered therein.</p>
              <p className="mt-4">By accessing or using this Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">2. Digital Products</h2>
              <h3 className="text-2xl font-bold mb-2">2.1 Product Description</h3>
              <p>All products sold on this Website are digital products delivered in electronic format. These include but are not limited to: e-books, templates, software, design files, courses, and other downloadable content.</p>
              <h3 className="text-2xl font-bold mt-6 mb-2">2.2 Delivery Method</h3>
              <p>Digital products are delivered electronically via email or direct download link immediately upon successful payment processing. No physical goods are shipped.</p>
              <h3 className="text-2xl font-bold mt-6 mb-2">2.3 License Grant</h3>
              <p>Upon purchase, you receive a limited, non-exclusive, non-transferable license to use the digital product for personal or business use as specified in the product description. You do not own the product; you have purchased a license to use it.</p>
            </section>

            <section id="refunds" className="p-6 border-[3px] border-dashed border-[#ff4d4d] bg-[#fff5f5] dark:bg-[#2a1a1a] wobbly-sm -rotate-1 my-8">
              <h2 className="text-3xl font-heading font-bold text-[#ff4d4d] mb-4">3. No Returns or Refunds Policy</h2>
              <h3 className="text-2xl font-bold mb-2">3.1 Non-Refundable Nature</h3>
              <p>ALL SALES OF DIGITAL PRODUCTS ARE FINAL AND NON-REFUNDABLE. Due to the instantaneous nature of digital product delivery and the impossibility of preventing misuse once delivered, we do not offer refunds, returns, or exchanges under any circumstances.</p>
              <h3 className="text-2xl font-bold mt-6 mb-2">3.2 No Product Exchanges</h3>
              <p>Digital products cannot be exchanged for alternative products or refunded for different versions or formats.</p>
              <h3 className="text-2xl font-bold mt-6 mb-2">3.3 Exception</h3>
              <p>Refunds may only be considered in cases of:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 opacity-90">
                <li><strong>Technical Failure:</strong> The digital product file is corrupted or cannot be downloaded due to our Website's technical error.</li>
                <li><strong>Payment Error:</strong> You were charged multiple times for a single purchase due to our system error.</li>
              </ul>
              <p className="mt-4">In such cases, customers must contact us within 7 days of purchase with evidence of the issue.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">4. Intellectual Property Rights</h2>
              <h3 className="text-2xl font-bold mb-2">4.1 Ownership</h3>
              <p>All digital products, including content, designs, code, images, text, and compilations, remain the exclusive property of Coffee Reads or its licensors.</p>
              <h3 className="text-2xl font-bold mt-6 mb-2">4.2 User Restrictions</h3>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 opacity-90">
                <li>Reproduce, distribute, or resell the digital product</li>
                <li>Share, upload, or make the product available to unauthorized third parties</li>
                <li>Modify, reverse-engineer, or create derivative works</li>
                <li>Use the product for commercial purposes without explicit written permission</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
              <h3 className="text-2xl font-bold mt-6 mb-2">4.3 Violations</h3>
              <p>Violation of intellectual property rights will result in immediate account termination and potential legal action.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">5. User Responsibilities</h2>
              <p><strong>5.1 Account Creation:</strong> You are responsible for maintaining the confidentiality of your account credentials and are liable for all activities under your account.</p>
              <p className="mt-4"><strong>5.2 Accurate Information:</strong> You agree to provide accurate, current, and complete information during purchase and registration.</p>
              <p className="mt-4"><strong>5.3 Compliance:</strong> You agree to use the Website and digital products in compliance with all applicable laws and these Terms.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">6. Payment and Billing</h2>
              <p><strong>6.1 Payment Methods:</strong> We accept various payment methods as displayed on our Website. All prices are listed in Indian Rupees (INR) unless otherwise stated.</p>
              <p className="mt-4"><strong>6.2 Billing Authorization:</strong> By making a purchase, you authorize us to charge the payment method you provide.</p>
              <p className="mt-4"><strong>6.3 Taxes:</strong> Prices may not include applicable taxes. You are responsible for paying any taxes required by law.</p>
              <p className="mt-4"><strong>6.4 Payment Security:</strong> We use industry-standard encryption to protect your payment information. However, we are not responsible for unauthorized access due to your negligence.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">7. Limitation of Liability</h2>
              <p><strong>7.1 No Warranties:</strong> Digital products are provided "AS IS" without any warranties, express or implied, including fitness for a particular purpose or merchantability.</p>
              <p className="mt-4"><strong>7.2 Limitation of Damages:</strong> To the fullest extent permitted by law, Coffee Reads shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or digital products.</p>
              <p className="mt-4"><strong>7.3 Liability Cap:</strong> Our total liability shall not exceed the amount you paid for the digital product.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">8. User Conduct</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 opacity-90">
                <li>Upload or transmit viruses, malware, or harmful code</li>
                <li>Engage in harassment, abuse, or threatening behavior</li>
                <li>Spam or send unsolicited communications</li>
                <li>Engage in any illegal activity</li>
                <li>Attempt to gain unauthorized access to the Website</li>
                <li>Scrape, bot, or automate access to content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">9. Termination</h2>
              <p>We reserve the right to terminate or suspend your account and access to the Website without notice if you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 opacity-90">
                <li>Violate these Terms</li>
                <li>Engage in illegal activity</li>
                <li>Infringe intellectual property rights</li>
                <li>Breach the payment terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">10. Modifications to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. Continued use of the Website constitutes acceptance of modified Terms.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">11. Disclaimers</h2>
              <p><strong>11.1 Availability:</strong> The Website and digital products may be interrupted, delayed, or unavailable due to maintenance, technical issues, or circumstances beyond our control.</p>
              <p className="mt-4"><strong>11.2 Third-Party Links:</strong> The Website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites.</p>
              <p className="mt-4"><strong>11.3 Results Not Guaranteed:</strong> Digital products are provided for informational purposes. Results vary by individual, and we do not guarantee specific outcomes.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">12. Governing Law and Jurisdiction</h2>
              <p>These Terms are governed by and construed in accordance with the laws of India. Both parties agree to submit to the exclusive jurisdiction of courts located in Gurgaon, Haryana, India.</p>
            </section>

            <section className="bg-[var(--color-brand-100)] dark:bg-[#2d2d2d] p-8 border-[3px] border-[#2d2d2d] wobbly mt-12 rotate-1">
              <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-white mb-6">13. Contact Information</h2>
              <div className="space-y-4 text-[#2d2d2d] dark:text-[#e5e0d8]">
                <p><strong>Email:</strong> swagcentral012@gmail.com</p>
                <p><strong>Website:</strong> starbucksnews.com</p>
                <p><strong>Address:</strong> Gurgaon, Haryana, India</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
