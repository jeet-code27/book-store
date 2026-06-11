import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import BookCard from '@/components/BookCard';
import { ArrowRight, CheckCircle2, Shield, Zap, Star, HelpCircle, Lightbulb } from 'lucide-react';

export default function Home() {
  const books = Object.values(PRODUCTS);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Premium Book Store',
            url: 'https://starbucksnews.com/',
            description: 'Purchase premium digital books, guides, and curated bundles.',
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-8 inline-block relative">
                Master the art of <br className="hidden md:block" />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-[#ff4d4d] rotate-2 inline-block">knowledge and growth!</span>
                  {/* Highlight behind text */}
                  <span className="absolute -bottom-2 left-0 w-full h-6 bg-[var(--color-brand-50)] -z-10 -rotate-2 wobbly"></span>
                </span>
              </h1>
              
              <p className="max-w-xl mx-auto lg:mx-0 text-2xl text-[#2d2d2d] dark:text-[#e5e0d8] mb-12 leading-relaxed font-bold">
                Premium digital books and guides designed to give you clarity, 
                actionable strategies, and real-world results. 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center relative">
                {/* Hand-drawn arrow pointing to CTA */}
                <svg className="absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-16 text-[#2d2d2d] dark:text-[#fdfbf7] hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: '4 8' }}>
                  <path d="M10,50 Q40,10 90,50 M70,30 L90,50 L70,70" />
                </svg>
                
                <Link 
                  href="/books"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-2xl font-bold bg-white text-[#2d2d2d] border-[4px] border-[#2d2d2d] wobbly hard-shadow-lg hover:bg-[#ff4d4d] hover:text-white hover:hard-shadow-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  Explore Library <ArrowRight size={24} strokeWidth={3} className="rotate-12" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Image 
                  src="/images/hero.png" 
                  alt="Hero sketch illustration" 
                  fill 
                  className="object-contain rotate-2 transition-transform hover:-rotate-1" 
                  priority
                />
              </div>
              {/* Bouncing Decorative Scribble */}
              <div className="absolute top-10 right-10 w-8 h-8 rounded-full border-[3px] border-[#2d2d2d] bg-[#ff4d4d] animate-bounce wobbly-sm z-20"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-24 border-t-[4px] border-dashed border-[#2d2d2d] relative bg-[var(--color-brand-100)] dark:bg-[#1a1a1a]">
        {/* Decorative Tack */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#ff4d4d] rounded-full border-[3px] border-[#2d2d2d] shadow-sm z-20">
          <div className="absolute top-1 left-1 w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <h2 className="text-5xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block bg-[var(--color-brand-50)] border-2 border-[#2d2d2d] wobbly px-6 py-2 -rotate-1">Our Bestsellers</h2>
            <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] max-w-2xl mx-auto rotate-1">
              Carefully crafted guides tailored to specific challenges, 
              available instantly as high-quality PDFs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto relative z-10">
            {books.map((book, i) => (
              <div key={book.id} className={i % 2 === 0 ? 'mt-4' : '-mt-4'}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 border-t-[4px] border-[#2d2d2d] bg-[var(--color-brand-50)] relative">
        {/* Background dots pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="text-center relative">
              <div className="absolute top-8 right-10 w-full h-full border-t-[3px] border-dashed border-[#2d2d2d] hidden md:block"></div>
              <div className="mx-auto w-24 h-24 bg-white border-[4px] border-[#2d2d2d] text-[#2d2d2d] wobbly flex items-center justify-center mb-8 hard-shadow-sm -rotate-2 relative z-10">
                <Zap size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-4">Instant Access</h3>
              <p className="text-xl text-[#2d2d2d] font-bold opacity-90 dark:text-[#e5e0d8]">
                Get your digital copy delivered directly to your email inbox immediately after purchase.
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="absolute top-8 right-10 w-full h-full border-t-[3px] border-dashed border-[#2d2d2d] hidden md:block"></div>
              <div className="mx-auto w-24 h-24 bg-[var(--color-brand-50)] border-[4px] border-[#2d2d2d] text-[#2d2d2d] wobbly flex items-center justify-center mb-8 hard-shadow-sm rotate-3 relative z-10">
                <CheckCircle2 size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-4">Premium Quality</h3>
              <p className="text-xl text-[#2d2d2d] font-bold opacity-90 dark:text-[#e5e0d8]">
                Expertly crafted content designed for maximum readability and actionable takeaways.
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="mx-auto w-24 h-24 bg-white border-[4px] border-[#2d2d2d] text-[#2d2d2d] wobbly flex items-center justify-center mb-8 hard-shadow-sm -rotate-1 relative z-10">
                <Shield size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-4">Secure Checkout</h3>
              <p className="text-xl text-[#2d2d2d] font-bold opacity-90 dark:text-[#e5e0d8]">
                Simple, transparent ordering process with personal support from the author.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 border-t-[4px] border-dashed border-[#2d2d2d] bg-[var(--color-pastel-blue)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <h2 className="text-5xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-6 inline-block bg-[var(--color-brand-100)] dark:bg-[#1a1a1a] border-[3px] border-[#2d2d2d] wobbly px-8 py-3 rotate-1">
              How We Work
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            {/* Connecting line (desktop only) */}
            <div className="absolute top-1/2 left-0 w-full h-0 border-t-[4px] border-dashed border-[#2d2d2d] hidden md:block -z-10 -translate-y-4"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white border-[4px] border-[#2d2d2d] text-3xl font-heading font-bold flex items-center justify-center wobbly-sm hard-shadow-sm mb-6 -rotate-3 text-[#ff4d4d]">1</div>
              <h3 className="text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-3">Choose a Book</h3>
              <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8]">Browse our collection and select the guide you need.</p>
            </div>
            
            <div className="text-center mt-8 md:mt-0">
              <div className="w-16 h-16 mx-auto bg-white border-[4px] border-[#2d2d2d] text-3xl font-heading font-bold flex items-center justify-center wobbly-sm hard-shadow-sm mb-6 rotate-2 text-[#ff4d4d]">2</div>
              <h3 className="text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-3">Secure Checkout</h3>
              <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8]">Enter details. The author will email payment instructions.</p>
            </div>
            
            <div className="text-center mt-8 md:mt-0">
              <div className="w-16 h-16 mx-auto bg-[var(--color-brand-50)] border-[4px] border-[#2d2d2d] text-3xl font-heading font-bold flex items-center justify-center wobbly-sm hard-shadow-sm mb-6 -rotate-1 text-[#2d2d2d]">3</div>
              <h3 className="text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-3">Get Your PDF</h3>
              <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8]">Once paid, receive your high-quality PDF instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 border-t-[4px] border-[#2d2d2d] bg-[#ff4d4d] relative overflow-hidden">
        {/* Background texture for red section */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-8 -rotate-1 leading-tight">
                Why Choose Our Digital Books?
              </h2>
              <div className="space-y-6">
                {[
                  "No fluff, just actionable and practical advice.",
                  "Direct support from the authors.",
                  "Formatted beautifully for all devices.",
                  "Lifetime updates directly to your inbox."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 shrink-0 bg-white border-[3px] border-[#2d2d2d] rounded-full flex items-center justify-center mt-1 rotate-3">
                      <CheckCircle2 size={20} strokeWidth={3} className="text-[#2d2d2d]" />
                    </div>
                    <p className="text-2xl font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Post-it Note Style Card */}
              <div className="bg-[var(--color-brand-50)] border-[4px] border-[#2d2d2d] p-8 md:p-12 wobbly-md hard-shadow-lg rotate-3">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-400/40 rotate-[-2deg] z-10"></div>
                <Lightbulb size={48} strokeWidth={2} className="text-[#2d2d2d] mb-6 -rotate-6" />
                <h3 className="text-3xl font-heading font-bold text-[#2d2d2d] mb-4">Our Promise</h3>
                <p className="text-xl font-bold text-[#2d2d2d] leading-relaxed">
                  We write books that we wish existed when we were facing these challenges. Every page is packed with value, designed to save you time and frustration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 border-t-[4px] border-[#2d2d2d] bg-[var(--color-pastel-green)] dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] inline-block relative rotate-1">
              What Readers Say
              <span className="absolute -bottom-2 left-0 w-full h-2 border-b-[4px] border-dashed border-[#2d5da1]"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="relative mt-8 md:mt-0">
              {/* Speech Bubble */}
              <div className="bg-[var(--color-brand-100)] dark:bg-[#2d2d2d] border-[4px] border-[#2d2d2d] p-8 wobbly-sm hard-shadow-sm -rotate-1 relative z-10">
                <div className="flex gap-1 text-[#ff4d4d] mb-4">
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                </div>
                <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] mb-6">
                  &quot;The Claude guide is exactly what I needed. No corporate jargon, just straight to the point workflows that actually save me hours every week.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-[3px] border-[#2d2d2d] wobbly-sm flex items-center justify-center rotate-3">
                    <span className="font-heading font-bold text-2xl text-[#2d2d2d]">M</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-[#2d2d2d] dark:text-[var(--color-paper)]">Mark T.</h4>
                    <span className="text-sm font-bold text-[#2d2d2d] opacity-70 dark:text-[#e5e0d8]">Developer</span>
                  </div>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-[20px] left-10 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#2d2d2d] border-r-[20px] border-r-transparent"></div>
                <div className="absolute -bottom-[14px] left-[42px] w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-[var(--color-brand-100)] dark:border-t-[#2d2d2d] border-r-[16px] border-r-transparent"></div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="relative mt-12 md:mt-8">
              <div className="bg-white dark:bg-[#2d2d2d] border-[4px] border-[#2d2d2d] p-8 wobbly-sm hard-shadow-sm rotate-2 relative z-10">
                <div className="flex gap-1 text-[#ff4d4d] mb-4">
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                </div>
                <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] mb-6">
                  &quot;Divorce Dad guide was a lifesaver. It felt like talking to a friend who had been through it all before. Highly recommend it to anyone struggling.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--color-brand-50)] border-[3px] border-[#2d2d2d] wobbly-sm flex items-center justify-center -rotate-3">
                    <span className="font-heading font-bold text-2xl text-[#2d2d2d]">R</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-[#2d2d2d] dark:text-[var(--color-paper)]">Rahul S.</h4>
                    <span className="text-sm font-bold text-[#2d2d2d] opacity-70 dark:text-[#e5e0d8]">Father of 2</span>
                  </div>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-[20px] right-10 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#2d2d2d] border-r-[20px] border-r-transparent"></div>
                <div className="absolute -bottom-[14px] right-[42px] w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-white dark:border-t-[#2d2d2d] border-r-[16px] border-r-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t-[4px] border-dashed border-[#2d2d2d] bg-[var(--color-pastel-purple)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="mx-auto w-16 h-16 bg-white border-[4px] border-[#2d2d2d] flex items-center justify-center wobbly-sm hard-shadow-sm mb-6 rotate-3">
              <HelpCircle size={32} strokeWidth={2.5} className="text-[#2d5da1]" />
            </div>
            <h2 className="text-5xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] inline-block">
              Got Questions?
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Do I need a Kindle to read these?",
                a: "No! All our books are delivered as high-quality, universal PDF files. You can read them on your phone, tablet, computer, or even print them out."
              },
              {
                q: "Why do you use manual payments?",
                a: "To keep our prices incredibly low. Payment gateways take a huge cut. By handling it directly, we pass those savings directly to you."
              },
              {
                q: "How long does delivery take?",
                a: "Once you submit your order form, we usually reply within a few hours with payment details. After payment is confirmed, you'll get your PDF instantly."
              },
              {
                q: "Do you offer refunds?",
                a: "Because digital files cannot be 'returned', we generally do not offer refunds once the PDF has been sent. However, if you have issues, contact us!"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-[#1a1a1a] border-[3px] border-[#2d2d2d] p-6 sm:p-8 wobbly-sm hard-shadow-sm transition-transform hover:-translate-y-1">
                <h3 className="text-2xl font-heading font-bold text-[#2d2d2d] dark:text-[var(--color-paper)] mb-3 flex gap-3">
                  <span className="text-[#ff4d4d]">Q.</span> {faq.q}
                </h3>
                <p className="text-xl font-bold text-[#2d2d2d] dark:text-[#e5e0d8] opacity-90 pl-8 border-l-[3px] border-dashed border-[#2d2d2d] ml-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
