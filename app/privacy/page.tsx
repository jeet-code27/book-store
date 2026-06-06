export const metadata = {
  title: `Privacy Policy | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Coffee Reads'}`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1a1a1a] border-[4px] border-[#2d2d2d] wobbly-md hard-shadow-lg p-10 sm:p-16 max-w-3xl mx-auto -rotate-1 relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#2d5da1] border-[3px] border-[#2d2d2d] rounded-full hard-shadow-sm z-10 flex items-center justify-center rotate-12">
            <span className="text-white font-bold text-xl">?</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl font-bold text-[#ff4d4d] mb-12">Last Updated: April 25, 2026</p>

          <div className="space-y-10 text-xl font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] leading-relaxed">
            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">1. Introduction</h2>
              <p>Coffee Reads ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website starbucksnews.com (the "Website").</p>
              <p className="mt-4">Please read this Privacy Policy carefully. If you do not agree with our practices, please do not use the Website.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">2. Information We Collect</h2>
              <h3 className="text-2xl font-bold mb-2">2.1 Information You Provide Voluntarily</h3>
              <ul className="list-disc pl-6 space-y-2 mt-4 opacity-90">
                <li><strong>Account Registration:</strong> Name, Email address, Phone number, Password</li>
                <li><strong>Purchase Information:</strong> Billing address, Payment method details (credit card, debit card, digital wallet), Transaction history</li>
                <li><strong>Communication Information:</strong> Messages and inquiries submitted through contact forms, Customer support correspondence</li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-6 mb-2">2.2 Information Collected Automatically</h3>
              <p>Website Usage Data: IP address, Browser type and version, Operating system, Pages visited and time spent, Clickstream data, Device identifiers, Cookies and similar tracking technologies.</p>
              
              <div className="p-4 bg-[#fef08a] dark:bg-[#b45309] border-[3px] border-[#2d2d2d] mt-6 -rotate-1">
                <p><strong>Note:</strong> We do NOT store complete credit card information. Payment processing is handled by secure third-party payment gateways (e.g., Razorpay).</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">3. Use of Information</h2>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li><strong>3.1 Service Delivery:</strong> Processing orders and payments, Delivering digital products, Sending order confirmations and receipts, Providing customer support.</li>
                <li><strong>3.2 Communication:</strong> Responding to inquiries and requests, Sending transactional emails, Notifying you of updates, promotions, or policy changes.</li>
                <li><strong>3.3 Marketing and Promotion:</strong> Sending marketing emails and promotions (with your consent), Analyzing customer preferences for targeted marketing.</li>
                <li><strong>3.4 Analytics and Improvement:</strong> Analyzing Website traffic and user behavior, Improving Website functionality and user experience, Detecting fraudulent activity and security threats.</li>
                <li><strong>3.5 Legal Compliance:</strong> Complying with legal obligations, Enforcing Terms and Conditions, Protecting our legal rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">4. Cookies and Tracking Technologies</h2>
              <p><strong>4.1 Types of Cookies:</strong> Essential Cookies, Analytics Cookies, Marketing Cookies, Preference Cookies.</p>
              <p className="mt-4"><strong>4.2 Cookie Management:</strong> You can control cookies through your browser settings. Disabling cookies may affect Website functionality.</p>
              <p className="mt-4"><strong>4.3 Third-Party Tracking:</strong> Third-party tools like Google Analytics and advertising networks may place cookies on your device. Review their privacy policies for details.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-[#ff4d4d] mb-4"><strong>5.1 We DO NOT Sell Personal Data:</strong> We do NOT sell, trade, or rent your personal information to third parties.</p>
              <p><strong>5.2 Third-Party Service Providers:</strong> We share information with Payment Processors, Email Service Providers, Analytics Services, and Hosting Providers. All service providers are contractually obligated to maintain confidentiality.</p>
              <p className="mt-4"><strong>5.3 Legal Requirements:</strong> We may disclose information if required by law, court order, or government authority.</p>
              <p className="mt-4"><strong>5.4 Business Transfers:</strong> In case of merger, acquisition, or bankruptcy, your information may be transferred as part of business assets.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">6. Data Security</h2>
              <p><strong>6.1 Security Measures:</strong> SSL/TLS encryption for data transmission, Secure payment gateways, Regular security audits, Password protection and access controls.</p>
              <p className="mt-4"><strong>6.2 Data Breach Notification:</strong> In case of a data breach, we will notify affected users within 30 days as required by law.</p>
              <p className="mt-4"><strong>6.3 Limitations:</strong> While we use reasonable security measures, no method is 100% secure. We are not liable for unauthorized access due to circumstances beyond our control.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">7. Data Retention</h2>
              <p><strong>7.1 Retention Period:</strong> We retain personal information for as long as necessary to fulfill service obligations, comply with legal requirements, resolve disputes, and enforce agreements.</p>
              <p className="mt-4"><strong>7.2 Deletion:</strong> You can request deletion of your account and associated data. However, we may retain information required for legal compliance or fraud prevention.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">8. Your Privacy Rights</h2>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li><strong>8.1 Access:</strong> You have the right to access your personal information. Submit a request to swagcentral012@gmail.com with "Data Access Request" in the subject line.</li>
                <li><strong>8.2 Correction:</strong> You can update or correct inaccurate information through your account settings or by contacting us.</li>
                <li><strong>8.3 Deletion:</strong> You may request deletion of your account and personal data, subject to legal retention requirements.</li>
                <li><strong>8.4 Opt-Out:</strong> You can unsubscribe from marketing communications by clicking the "Unsubscribe" link in emails, updating account preferences, or contacting us directly.</li>
                <li><strong>8.5 Data Portability:</strong> You may request a copy of your data in a portable format.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">9. Children's Privacy</h2>
              <p>The Website is not intended for users under 18 years of age. We do not knowingly collect information from minors. If a minor's information is collected without consent, parents/guardians can request immediate deletion by contacting us.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">10. Third-Party Links and Services</h2>
              <p>The Website may contain links to third-party websites. We are not responsible for privacy practices, content, or data collection by third parties. Review third-party privacy policies before providing information.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">11. International Data Transfers</h2>
              <p>Your information may be transferred to, stored in, and processed outside India. By using the Website, you consent to such transfers. We ensure appropriate safeguards are in place.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">12. California Privacy Rights (CCPA)</h2>
              <p>If you are a California resident, you have rights under the California Consumer Privacy Act: Right to know what data is collected, Right to delete collected data, Right to opt-out of sale of data, Right to non-discrimination for exercising CCPA rights. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">13. European Privacy Rights (GDPR)</h2>
              <p>If you are in the European Union, you have rights under GDPR: Right to access, rectify, and erase data, Right to restrict processing, Right to data portability, Right to object to processing, Right to withdraw consent. Data Controller: Coffee Reads, Gurgaon, Haryana, India</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-[#2d5da1] mb-4">14. Changes to Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes are effective immediately upon posting. Continued use of the Website constitutes acceptance of updated policies.</p>
            </section>

            <section className="bg-[var(--color-brand-100)] dark:bg-[#2d2d2d] p-8 border-[3px] border-[#2d2d2d] wobbly mt-12 -rotate-1">
              <h2 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-white mb-6">15. Contact Us</h2>
              <div className="space-y-4 text-[#2d2d2d] dark:text-[#e5e0d8]">
                <p><strong>Email:</strong> swagcentral012@gmail.com</p>
                <p><strong>Website:</strong> starbucksnews.com</p>
                <p><strong>Address:</strong> Gurgaon, Haryana, India</p>
                <p><strong>Response Time:</strong> Within 7–10 business days</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
